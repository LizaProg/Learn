do{
    var read = require("readline-sync");
    var answer = read.question("Say 'stop': ");
    console.log("You said '" + answer + "'.");
}while (answer != "stop");

