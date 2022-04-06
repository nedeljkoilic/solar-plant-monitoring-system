"use strict";
const express= require('express');
var cors = require('cors');
const app = express();
app.use(cors());
var mqtt = require('mqtt');
var options = {
    port: 1883,
    clientId: 'mqttjs_' + Math.random().toString(16).substr(2, 8),
    username: 'app-etf-ues@ttn',
    password: 'NNSXS.VGLJCMSWH7GSW5YTULUNW6WD6GZYF23L3XD7WFQ.3OYQLY4EH462QDRWMIGZ7JZVIUVBV37KOEYGUERIDZZW6BCYQUUQ',
    keepalive: 60,
    reconnectPeriod: 1000,
    protocolId: 'MQIsdp',
    protocolVersion: 3,
    clean: true,
    encoding: 'utf8'
};
var client = mqtt.connect('https://eu1.cloud.thethings.network',options);
// Global variable to save data
var globalMQTT =0;
client.on('connect', function() {
  console.log('Client connected to TTN');
  client.subscribe('v3/app-etf-ues@ttn/devices/eui-00016c001ff19d17/up');
});
client.on('error', function(err) {
  console.log(err);
});

client.on('message', function(topic, message) {
  var getDataFromTTN = JSON.parse(message);
  console.log("Data from TTN: ", getDataFromTTN.uplink_message.frm_payload);
  var getFrmPayload = getDataFromTTN.uplink_message.frm_payload;
  globalMQTT = Buffer.from(getFrmPayload, 'base64').toString();
   globalMQTT = getFrmPayload;
});

app.get('/asfdgh',(req,res)=>{
	/*client.publish('v3/app-etf-ues@ttn/devices/eui-00016c001ff19d17/down/push', '{"downlinks":[{"f_port": 15,"frm_payload":"vu8=","priority": "NORMAL"}]}')
	res.send(globalMQTT.toString());*/
	console.log('ulazi');
})
app.get('/shutdown',(req,res)=>{
	/*{"downlinks":[{"f_port": 15,"frm_payload":"Cg==","priority": "NORMAL"}]}*/
	client.publish('v3/app-etf-ues@ttn/devices/eui-70b3d57ed004e30a/down/push', '{"downlinks":[{"f_port": 15,"frm_payload":"AQ==","priority": "NORMAL"}]}');
	res.send('pablis uradjen');
})

app.listen(9000,err=>{
	if(err)
	{
		console.log("there was a problem",err);
		return;

	}console.log("listeninig");
}
	
	);