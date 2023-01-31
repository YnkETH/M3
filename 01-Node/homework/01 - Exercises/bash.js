const process = require("process");
const commands = require("./commands/index.js");

function print(output) {
  process.stdout.write(output);
  process.stdout.write('\nprompt > ')
}

function bash() {
  process.stdout.write('prompt > ') 

  process.stdin.on('data', function (data) {


    let args = data.toString().trim().split(' ') 

    let cmd = args.shift() 

    if (commands.hasOwnProperty(cmd)) {
      commands[cmd](print, args.join(' '));
    } else {
      print(`command not found: ${cmd}`)
    }
  })
}

bash();
module.exports = {
  print,
  bash,
};