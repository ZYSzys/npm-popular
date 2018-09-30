'use strict';

const fs = require('fs');
const { promisify } = require('util');
const Package = require('../lib/mongo').Package;

const readAsync = promisify(fs.readFile);

process.on('exit', () => {
  console.log('Great ! All data above are saved.');
});

const writeToDB = async () => {
  const content = await readAsync('Popular');
  const list = await strToList(content);
  const res = await savePkgs(list);
  return res;
};

const strToList = async buf => {
  return buf
    .toString()
    .split('\n')
    .slice(2, -3);
};

const savePkg = async (name, url, homepage, github) => {
  let pkg = new Package({ name, url, homepage, github });
  pkg = await pkg.save();
  return pkg.name;
};

const savePkgs = async list => {
  const pkgs = [];
  let name, url, homepage, github;
  for (const str of list) {
    [name, url, homepage, github] = [...separate(str, ' => ')];
    const pkg = await savePkg(name, url, homepage, github);
    pkgs.push(pkg);
  }
  return pkgs;
};

const separate = (str, symbol) => {
  return str.split(symbol);
};

(async () => {
  const res = await writeToDB();
  console.log(res);
  process.exit();
})();
