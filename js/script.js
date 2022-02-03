const lang = prompt("Пример: (ru en)");

console.log(" Пример с if , else");

if (lang == "ru") console.log("Понедельник, Вторник, Среда ,Четверг,Пятница, Суббота, Воскресенье");
else if (lang == "en") console.log("Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday");
else console.log(" Что-то пошло не так");

console.log(" Пример с swift");

switch(lang){
  case 'ru':
    console.log("Понедельник, Вторник, Среда ,Четверг,Пятница, Суббота, Воскресенье");
    break;
  case 'en':
      console.log("Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday");
    break;
  default:
      console.log(" Что-то пошло не так default");
}

console.log(" Пример с многомерным массивом");

const weekday = {
    ru: ['Понедельник, Вторник, Среда ,Четверг,Пятница, Суббота, Воскресенье'],
    en:  ['Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday']
 }
console.log(weekday[lang]);

const namePerson = 'Александр';
const check = (namePerson == 'Артем') ? console.log('директор'):
    (namePerson == 'Александр') ? console.log('преподаватель') : console.log('студент');
