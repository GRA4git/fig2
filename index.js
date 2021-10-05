const figlet = require('figlet')
const path = require('path')
const fs = require('fs');

fs.writeFile(
    path.resolve(__dirname, 'ascii.txt'),
    figlet.textSync('Hello World!', function (err, data) {
      if (err) {
        console.log(err);
        return;
      }
      console.log('data');
    }),
    (err) => {
      if (err) {
        console.log(err);
      }
    }
  );

  fs.appendFile(
    path.resolve(__dirname, 'ascii.txt'),
    figlet.textSync('bay world', function (err, data) {
      if (err) {
        console.log(err);
        return;
      }
      console.log('data');
    }),
    (err) => {
      if (err) {
        console.log(err);
      }
    }
  );