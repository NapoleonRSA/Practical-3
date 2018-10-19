var net = require('net');
var fs = require('fs');
var buffer = require('buffer');
var now = require('performance-now');
var HOST = '192.168.8.101';
var PORT = 33333
var FILEPATH = 'C:/Users/User/Desktop/itrw322-1';
var t1;
var t0; 

var server = net.createServer(function(conn) { //ek skep die server
    
    console.log('server connected');

    conn.on('data', function(data) {
        t1 = now();
        console.log('data received and saved');
        //console.log('data is: \n' + data);
        var data2 = data;

        fs.writeFile('E:/OneDrive - NORTH-WEST UNIVERSITY/2018/Tweede Semester/ITRW 322/project/TCP/',data2, function (err) { //ek save die file
            if (err) throw err;
              console.log('File Saved');
              console.log('Completed in : ' + (t1 - t0)+ 'ms');
            })
    });
});

server.listen(PORT, HOST, function() {
    t0 = now();
    //listening
    console.log('server bound to ' + PORT + '\n');

    server.on('connection', function(){
        console.log('connection made...\n');

    })
});



// const net = require('net');
// net.bytesWritten = 300000;
// net.bufferSize = 300000;
// const fs = require('fs');
// const server = net.createServer((c) => {
//   // 'connection' listener
//   console.log('client connected');
//   c.on('end', () => {
//     console.log('client disconnected');
//   });
//   // c.write('hello\r\n');
//   fs.readFile('x.jpg' , (err, data) =>{
//     if(!err){
//       console.log(data.length);
//       c.write(data);
//     }
//     else {
//       console.log('readfile daemon0 err');
//     }
//   });
//   c.pipe(c);
// });
// server.on('error', (err) => {
//   throw err;
// });
// server.listen(8124, 'localhost', () => {
//   console.log('server bound');
// });