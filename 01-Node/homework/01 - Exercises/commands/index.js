const fs = require("fs");
const utils = require("../utils/request");
const process = require("process");

/*
PWD permitirá imprimir la ruta hacia el directorio en el que estás trabajando.
Completa la función pwd. Esta recibirá por parámetro el valor "print".
Utiliza la función print. Como argumento pásale el objeto process siendo ejecutado con el método cwd.
*/
function pwd(print, _args) {
  print(process.cwd())
  //print(__dirname) // nos retorna también el directorio en el que estamos trabajando

}

/*
DATE imprimirá la fecha actual de tu máquina.
Completa la función date. Esta recibirá por parámetro el valor "print".
Utiliza la función print. Como argumento pásale la función Date siendo ejecutada.
*/
function date(print) {
  print(Date())//función nativa de node js que muestra la fecha.
}

/*
ECHO imprimirá el texto que escribas en la consola.
Completa la función echo. Esta recibirá por parámetro dos valores: "print" y "args".
Utiliza la función print. Como argumento pásale a la función el parámetro args
*/
const echo = (print, args) => {
  print(args)
}

/*
LS va a imprimir los archivos y carpetas que estén disponibles en tu directorio actual.
Completa la función ls. Esta recibirá por parámetro un valor: "print".
Invoca el método readdir de la constante fs para leer los archivos actuales.
tendrás que pasarle como argumento un string con un valor de . (El punto hace referencia a tu directorio actual)
y un callback, que recibirá a su vez 2 parámetros, error (Posible error que pueda devolver el callback)
y files (un array de string conteniendo los archivos y carpetas encontrados).
Si fs.readdir devuelve un error arrójalo. (Puedes usar throw error)
Invoca la función print y pásale como argumentos los archivos encontrados.
IMPORTANTE: ¡Debes pasarlos como un string, sino se imprimirá un arreglo y arrojará un error!
*/
function ls(print) {
  fs.readdir('.',  (err, files) => { //fs: file system me permite leer carpetas y archivos.
    if (err) throw Error(err) // err //? throw Error(err) //: print(files.join(' ')) no se usan ternarios para arrojar errores
    print(files.join(' '))
  })
}

/*
CAT Imprimirá en la consola cualquier archivo que le indiques. Recuerda que si quieres imprimir un archivo
por fuera del directorio que estás parado, deberás indicar la ruta hacia el mismo.
Completa la función cat. Esta recibirá por parámetro dos valores: "print" y "args".
Invoca el método readFile de fs y pásale los siguientes argumentos:
args (El parámetro que recibes en la función cat)
Un string 'utf-8' (El formato Unicode que deberá tener el texto)
Un callback con los parámetros error y data
Si fs.readFile devuelve un error arrójalo. (Puedes usar throw error como se mencionó antes)
Invoca la función print y pásale como argumento el parámetro data (Que es el archivo encontrado)
*/
function cat(print, args) {
    fs.readFile(args, 'utf-8',  (err, data) => { // para leer un archivo específico. args[0] o args.join('')
        if (err) throw Error(err)
        print(data)
      })
  }

/*
HEAD Imprimirá las primeras 8 línea de cualquier archivo que indiques, ten en cuenta los mismos puntos
descritos en la función de CAT para utilizarlo correctamente.
Completa la función head. Esta recibirá por parámetro dos valores: "print" y "args".
Invoca el método fs.readFile y pásale los siguientes argumentos:
args (El parámetro que recibes en la función cat)
Un string 'utf-8' (El formato Unicode que deberá tener el texto)
Un callback con los parámetros error y data
Si fs.readFile devuelve un error arrójalo. (Puedes usar throw error como se mencionó antes)
Invoca la función print y pásale como argumento la primera línea del archivo data (¡Te toca pensar cómo hacerlo!)
*/


function head(print, args) {
    fs.readFile(args, 'utf-8',  (err, data) => {
        if (err) throw Error(err)
        print(data.split('\n').splice(0, 1).join(''))
        //print(data.split('\n')[0])
        //print(data.split('\n').at(0))
      })
  }

/*
TAIL Permitirá imprimir la última línea de cualquier archivo que indiques, 
ten en cuenta las mismas anotaciones descritas en el ejercicio de CAT para utilizarlo correctamente.
Completa la función head. Esta recibirá por parámetros dos valores: "print" y "args".
Invoca el método fs.readFile y pásale los siguientes argumentos:
args (El parámetro que recibes en la función cat)
Un string 'utf-8' (El formato Unicode que deberá tener el texto)
Un callback con los parámetros error y data
Si fs.readFile devuelve un error arrójalo. (Puedes usar throw error como se mencionó antes)
Invoca la función print y pásale como argumento la última línea del archivo data (¡Te toca también pensar cómo hacerlo!)
*/
const tail = (print, args) => {
    fs.readFile(args, 'utf-8',  (err, data) => {
        if (err) throw Error(err)
        print(data.trim().split(' ').pop())
    })
}

/*
CURL Imprimirá cualquier respuesta de una url que le puedas proveer, 
tiene que tener el prefijo https:// antes de ingresar la dirección.
Completa la función head. Esta recibirá por parámetros dos valores: "print" y "args".
Invoca la función request que se encuentra importada más arriba y pásale los siguientes argumentos:
args (El parámetro que recibes en la función curl).
un callback con los parámetros error y response.
Si request devuelve un error, arrojarlo (Puedes usar throw error como se mencionó antes).
Invoca la función print pasándole como argumento el parámetro response.
*/
function curl(print, args) {
    utils.request(args, (err, response) => { // args es un array por eso necesito convertirlo a string.
        if (err) throw Error(err)
        print(response)
        //print(response.data) es la forma correcta pero en el test se rompe con el .data
      })
}

module.exports = {
  pwd,
  date,
  echo,
  ls,
  cat,
  head,
  tail,
  curl
};