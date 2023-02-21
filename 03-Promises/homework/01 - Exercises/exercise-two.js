"use strict";

let exerciseUtils = require("./utils");

let args = process.argv.slice(2).map(function (st) {
  return st.toUpperCase();
});

module.exports = {
  problemAx: problemA,
  problemBx: problemB,
  problemCx: problemC
};

// corre cada problema dado como un argumento del command-line para procesar
args.forEach(function (arg) {
  let problem = module.exports["problem" + arg];
  if (problem) problem();
});

function problemA() {
  // callback version
  exerciseUtils.readFile("poem-two/stanza-01.txt", function (err, stanza) {
    exerciseUtils.blue(stanza);
  });
  exerciseUtils.readFile("poem-two/stanza-02.txt", function (err, stanza) {
    exerciseUtils.blue(stanza);
  });

  // promise version
  // Tu código acá:

  let p1 = exerciseUtils.promisifiedReadFile("poem-two/stanza-01.txt")
          .then( stanza1 => exerciseUtils.blue(stanza1) )
  let p2 = exerciseUtils.promisifiedReadFile("poem-two/stanza-02.txt")
          .then( stanza2 => exerciseUtils.blue(stanza2) )

  //recordemos que los lanza a la misma vez pero su valor o su razon 
  //se guarda en la posicion donde está la promesa dentro del arreglo de promesas [ ]

  Promise.all( [ p1, p2 ] )
  .then( () => console.log('done') )

}

function problemB() {
  let filenames = [1, 2, 3, 4, 5, 6, 7, 8].map(function (n) {
    return "poem-two/" + "stanza-0" + n + ".txt";
  });

  // callback version
  filenames.forEach((filename) => {
    exerciseUtils.readFile(filename, function (err, stanza) {
      exerciseUtils.blue(stanza);
    });
  });

  // promise version
  // Tu código acá:
  //el FOR EACH VA ELEMENTO POR ELEMENTO
  let promises = filenames.forEach( 
    file => exerciseUtils.promisifiedReadFile(file)
    .then (stanza => exerciseUtils.blue(stanza))
    )
  Promise.all(promises)
  .then( () => console.log('done') )
}

function problemC() {
  let filenames = [1, 2, 3, 4, 5, 6, 7, 8].map(function (n) {
    return "poem-two/" + "stanza-0" + n + ".txt";
  });

  //lo que hace es con math random nos bota un numero al azar y reemplaza cualquiera de 
  //los archivos en el arreglo de filenames con wrong-file-name por el real
  let randIdx = Math.floor(Math.random() * filenames.length);
  filenames[randIdx] = "wrong-file-name-" + (randIdx + 1) + ".txt";

  // callback version
/*   filenames.forEach((filename) => {
    exerciseUtils.readFile(filename, function (err, stanza) {
      exerciseUtils.blue(stanza);
      if (err) exerciseUtils.magenta(new Error(err));
    });
  }); */

  // promise version
  // Tu código acá:

  let promises =  filenames.forEach(
    file => exerciseUtils.promisifiedReadFile(file)
    .then ( stanza => exerciseUtils.blue(stanza)))
  Promise.all(promises)  
    .then( () => console.log('done') )
    .catch ( (err) =>  
        exerciseUtils.magenta(new Error(err))
  )
}

function problemD() {
  let fs = require("fs");
  function promisifiedWriteFile(filename, str) {
    // tu código acá:
  }
}
