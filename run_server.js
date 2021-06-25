const {
    exec
} = require('child_process');
const waitPort = require('wait-port');

// start server
let child = exec('npm run start', () => {});


// check if server is ready
waitPort({
  host: 'localhost',
  port: 9999
})
  .then((open) => {
    process.exit(0);
  })
  .catch((err) => {
  	process.exit(1);
  });