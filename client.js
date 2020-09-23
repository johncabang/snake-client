const net = require('net');
// Establishes connection with the game server

const connect = function() {
  const conn = net.createConnection({
    host: '135.23.222.131',
    port: 50542
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');
  
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

  conn.on('connect', () => {
    
   conn.write('Hello from client!');
   console.log('Sucessfully connect to game server');
   conn.write('Name: LOL');
    setInterval(() => {
      conn.write('Move: left');
    }, 50);
 });

  return conn;
}


/**
 * Setup User Interface
 * Specifically, so that we can handle user input via stdin
 */

const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRowMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  stdin.on('data', handleUserInput); // callback handler
  return stdin;
}

const handleUserInput = function() {
  if (key === '\u0003') { // \u0003 maps to CTRL+C input
    process.exit();
  }
}

module.exports = { connect };


// Supported Move Commands

// "Move: up" - move up one square (unless facing down)
// "Move: down" - move down one square (unless facing up)
// "Move: left" - move left one square (unless facing right)
// "Move: right" - move left one square (unless facing left)