
// const isNumber = function(num){
//    return /^-?[\d.]+(?:e-?\d+)?$/.test(num);
// }

const isNumber = function (num) {
  return (typeof num == 'string' || typeof num == 'number') && !isNaN(num - 0) && num !== '';
};

do {
  screenPrice = prompt("Сколько будет стоить данная работа?");
} while(!isNumber(screenPrice))


console.log(screenPrice.trim());
console.log(typeof screenPrice);