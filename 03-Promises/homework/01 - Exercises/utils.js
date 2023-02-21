"use strict";

let fs = require("fs");
let chalk = require("chalk");

let utils = {};

utils.readFile = function (filename, callback) {
  let randExtraTime = Math.random() * 200;
  setTimeout(function () {
    fs.readFile(filename, function (err, buffer) {
      if (err) callback(err);
      else callback(null, buffer.toString());
    });
  }, randExtraTime);
};
// es una funcion a la que pasamos el path y lo que hace es retornarme una promesa y lo que hace es leerla
utils.promisifiedReadFile = function (filename) {
  return new Promise(function (resolve, reject) {
    let readFileSync = fs.readFileSync(filename);
    if (!readFileSync) return reject("File not found");
    resolve(readFileSync.toString());
  });
};

//consologear en color azul
utils.blue = function (text) {
  if (text !== undefined && text !== null) console.log(chalk.blue(text));
};
//consologear en color magenta
utils.magenta = function (text) {
  console.log(chalk.magenta(text));
};

module.exports = utils;
