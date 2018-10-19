var PORT = 33333;
var HOST = '192.168.8.101';
var now = require("performance-now");
var dgram = require('dgram');
var server = dgram.createSocket('udp4');
var fs = require("fs");
var log = require('util').log;
var wstream = fs.createWriteStream('E:/OneDrive - NORTH-WEST UNIVERSITY/2018/Tweede Semester/ITRW 322/project/UDP/file.jpg');

wstream.on('finish', function () {
  console.log('file has been written');
});

server.on('message', function (message, remote) {
    var t0 = now();
    console.log('Server listening on port:'+ HOST+":"+ PORT);
    wstream.write(message);
    wstream.end();
    var t1 = now();
    console.log('Server listening on port:'+ HOST+":"+ PORT + ", Time to receice file " + (t1-t0) + "ms" );
});

server.bind(PORT, HOST);

