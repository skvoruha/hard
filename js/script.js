
const isNumber = function(num){
   return /^-?[\d.]+(?:e-?\d+)?$/.test(num);
}

screenPrice = prompt("Сколько будет стоить данная работа?");
while(!isNumber(screenPrice)){
  screenPrice = +prompt("Сколько будет стоить данная работа?");
}
