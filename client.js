const net = require('net');
// Establishes connection with the game server

const connect = function() {
  const conn = net.createConnection({
    host: '135.23.222.131', // IP address
    port: 50542
  });
  conn.setEncoding('utf8');   // interpret incoming data as text
  
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

  conn.on('connect', () => {
    conn.write('Hello from client!');
    console.log('Sucessfully connect to game server');
    conn.write('Name: LOL');
    // setInterval(() => {
    //   conn.write('Move: left');
    // }, 50);
  });

  return conn;
};

module.exports = { connect };