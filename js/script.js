let num = 266219;
let multiply;
let res;
let degree;

multiply = num.toString().split("");
res = multiply.reduce((acc, rec) => acc * rec);
degree = res**3;

console.log(res);
console.log(degree);
console.log(degree.toString().split("").slice(0,2).join(""));