/**
 * Setup User Interface
 * Specifically, so that we can handle user input via stdin
 */

let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  stdin.on('data', handleUserInput); // callback handler
  return stdin;
};

const handleUserInput = function(key) {
  if (key === '\u0003') { // \u0003 maps to CTRL+C input
    process.exit();
  } else if (key === '\u0061') {
    connection.write('Move: left');
  } else if (key === '\u0073') {
    connection.write('Move: down');
  } else if (key === '\u0064') {
    connection.write('Move: right');
  } else if (key === '\u0077') {
    connection.write('Move: up');
  }
};

module.exports = { setupInput };









// Supported Move Commands

// "Move: up" - move up one square (unless facing down)
// "Move: down" - move down one square (unless facing up)
// "Move: left" - move left one square (unless facing right)
// "Move: right" - move left one square (unless facing left)