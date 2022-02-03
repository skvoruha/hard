let num = 266219;

let multiply = num.toString().split("");

const res = multiply.reduce((acc, rec) => acc * rec);
console.log(res);

let degree = res**3;
console.log(degree);

console.log(degree.toString().split("").slice(0,2).join(""));