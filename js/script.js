
// const isNumber = function(num){
//    return /^-?[\d.]+(?:e-?\d+)?$/.test(num);
// }

const isNumber = function (num) {
  return (typeof num == 'string' || typeof num == 'number') && !isNaN(num - 0) && num !== '';
};
const cancel = function(num){
  if (num == null) return true
}
do {
  screenPrice = prompt("Сколько будет стоить данная работа?");
} while(!cancel(screenPrice) && !isNumber(screenPrice))
// } while(!cancel(screenPrice) || !isNumber(screenPrice))

if (cancel(screenPrice)) {
  console.log("Вы нажали отмена");
} else {
  console.log(screenPrice.trim());
  console.log(typeof screenPrice);
}

