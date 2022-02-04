const arg = prompt()

function getArgument(argument){
  if (typeof(argument) != 'string'){
    console.log("Уведомление, аргумент : \n" + argument + "\n Не строка" );
  }
  argument = argument.trim();
  if(argument.length > 30) {
    let string = argument.slice(0, 30);
        console.log(string + '...');
    } else {
        console.log(argument);
    }
}
console.log(getArgument(arg));


