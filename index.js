// Server downloads

const fs = require('fs');
const express = require('express');
const sanitier = require('sanitizer');

// DeepAI 

const deepai = require('deepai');
deepai.setApiKey(process.env.api_key);

// Express App

const app = require('express')();
const http = require('http').Server(app);
const bodyParser = require('body-parser');

const port = process.env.PORT || 3000;
const io = require('socket.io')(http);

app.use(bodyParser.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

// Google Firestore

const {
	type,
	project_id,
	private_key_id,
	private_key,
	client_email,
	client_id,
	auth_uri,
	token_uri,
	auth_provider_x509_cert_url,
	client_x509_cert_url
} = process.env;

const serviceAccount = {
	type,
	project_id,
	private_key_id,
	private_key,
	client_email,
	client_id,
	auth_uri,
	token_uri,
	auth_provider_x509_cert_url,
	client_x509_cert_url
};

const admin = require('firebase-admin');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

// Routes 

// GET

app.get('', function (req, res) {
  const index = __dirname + '/public/static/index.html';

  res.sendFile(index);
});

app.get('/homes', function (req, res) {
  async function getHomes () {
    const shookRef = db.collection("shook").doc("chatlog");

    const shook = await shookRef.get();
    res.send(shook.data().log);
  }

  getHomes();
});

// POST

app.post('/create-home', function (req, res) {
  const user = req.body.user;
  const name = req.body.name;

  const shookRef = db.collection("shook").doc("chatlog");

  async function createHome () {
    const resp = await deepai.callStandardApi("text2img", {
      text : "a house",
    });
    const shook = await shookRef.get();

    const json_resp = JSON.parse(JSON.stringify(resp));
    const home_url = json_resp.output_url;

    await shookRef.set({
      log : "<center><div><tt style='color: white'>" + sanitier.escape(name) + " by " + user + "</tt><br/><img src='" + home_url + "'/></div></center><br/>" + shook.data().log
    });
  }

  createHome();
  res.send("success");
});

// Start up the server

http.listen(port, function(){
  console.log('listening on *:' + port);

  async function fixData () {
    const shookRef = db.collection("shook").doc("chatlog");
    const fix_data = {
      log : ""
    }

    const shook = await shookRef.get();

    if (!shook.exists) {
      await shookRef.set(fix_data);
    }

    else {
      console.log("No fix needed.");
    }
  }

  fixData();
});