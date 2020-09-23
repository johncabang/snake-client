const net = require('net');
// Establishes connection with the game server
const { IP, PORT } = require('./constants');

const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
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