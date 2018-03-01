const net = require('net')

const client = new net.Socket();
client.connect(3000, '192.168.1.38', function() {   
    client.write('Skylabcoders');
});
client.on('data', data => console.log(data.toString()))

// const { Socket } = require('net')

// const client = new Socket();
// client.connect(3000, '192.168.1.38', function() {   
//     client.write('Skylabcoders');
// });
// client.on('data', data => console.log(data.toString()))