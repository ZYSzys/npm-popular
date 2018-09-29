'use strict';

const fs = require('fs');
const Package = require('../lib/mongo').Package;

fs.readFile('Popular', (err, res) => {
  if (err) {
    console.log(err);
  }
  const list = strToList(res);

  let name, url, homepage, github;
  for (const str of list) {
    [name, url, homepage, github] = [...separate(str, ' => ')];
    //console.log(name, url, homepage, github);
    const pkg = new Package({ name, url, homepage, github });
    pkg.save((err, pkg) => {
      if (err) return console.error(err);
      console.log(`${pkg.name} is saved !`);
    });
  }
});

const strToList = buf => {
  return buf
    .toString()
    .split('\n')
    .slice(2, -3);
};

const separate = (str, symbol) => {
  return str.split(symbol);
};

process.on('exit', () => {
  console.log('Great ! All data saved.');
  process.exit();
});
