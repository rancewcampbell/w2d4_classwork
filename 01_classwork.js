const fs = require('fs');

// Problem: Read the data files ** in order **, creating one final string as a result
// The data files are in the ./data directory

fs.readdir('./data', 'utf8', (err, files) => {
  if (err) throw err;
  for (const file of files) {
    fs.readFile(`./data/${file}`, 'utf8', (err, data) => {
      if (err) throw err;
      console.log(data);
    })
  }
});

