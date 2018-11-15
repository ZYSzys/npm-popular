'use strict';

const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const { Package } = require('../lib/mongo');

const readAsync = promisify(fs.readFile);

process.on('exit', () => {
  console.log('Great ! All data above are saved.');
});

const writeToDB = async path => {
  const content = await readAsync(path);
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
  await Package.deleteMany();
  const res = await writeToDB(path.resolve(__dirname, './Popular'));
  console.log(res);
  process.exit();
})();
