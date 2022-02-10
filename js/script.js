"use strict";

const week = ['Понедельник', 'Вторник', 'Среда', 'Четверг',
  'Пятница', 'Суббота', 'Воскресенье'];

const todayWeek = function () {
  let numDay = new Date().getDay();
  // у нас воскресенье последний день недели, а не первый
  return (numDay) ? numDay - 1 : 6;
};


week.forEach((element, index) => {
  console.log(index);
  const body = document.querySelector('body');
  const current = todayWeek();
  body.innerHTML +="<div class='day'>" + element + "</div>";
  // выходные
    if (index > 4) {
      document.getElementsByClassName('day')[index].style.fontStyle = "italic";
    }
    // сегодняшний день
    if (index === current) {
      document.getElementsByClassName('day')[index].style.fontWeight = "Bold";
    }
});

