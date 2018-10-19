var PORT = 33333;
var HOST = '192.168.8.101';
var dgram = require('dgram');
var now = require('performance-now');
var log = require('util').log;
var client = dgram.createSocket('udp4');
var fs = require("fs");
var message ;
var start = Date.now();
var t0 = now();
fs.readFile('C:/Users/Danie/Pictures/Test.jpg',(err,data)=>{

message =  Buffer.from(data,'base64');
client.send(message, 0, data.length, PORT, HOST, function(err, bytes) {
    if (err) {
        return console.log(err);
      }
    log('UDP file sent to ' + HOST +':'+ PORT);
    log('File size: ' + data.length);
  });
}) 
var t1 = now();
console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.")