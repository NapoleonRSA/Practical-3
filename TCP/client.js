var net = require('net');
var fs = require('fs');
var now = require('performance-now')
var PORT = 33333;
var HOST = '192.168.8.101';
var FILEPATH = 'C:/Users/Danie/Pictures/Danie.jpg';
var t0;
var t1;
var client = new net.Socket()

//connection to server
client.connect(PORT,HOST,function() {
    'Client Connected to server'
    t0 = now();
    //sends file
    var fileStream = fs.createReadStream(FILEPATH);
    fileStream.on('error', function(err){
        console.log(err);
    })

    fileStream.on('open',function() {
        fileStream.pipe(client);
    });

});

//handle closed
client.on('close', function() {
    console.log('Connection to Server Closed');
    t1 = now();
    console.log('Completed in : ' + (t1 - t0) +'ms');
});

client.on('error', function(err) {
    console.log(err);
});
