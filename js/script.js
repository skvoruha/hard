"use strict";

const week = ['Понедельник', 'Вторник', 'Среда', 'Четверг',
  'Пятница', 'Суббота', 'Воскресенье'];

const todayWeek = function () {
  let numDay = new Date().getDay();
  // у нас воскресенье последний день недели, а не первый
  return (numDay) ? numDay - 1 : 6;
};


const allWeekDay = function () {
  const body = document.querySelector('body');
  const current = todayWeek();

  let output = '';

  week.forEach((day, index) => {
    let dayWeek = day;

    // выхи
    if (index > 4) {
      dayWeek = "<i>" + dayWeek + "</i>"
    }
    // сегодняшний день
    if (index === current) {
      dayWeek = "<b>" + dayWeek + "</b>"
    }
    // ставим тег br для переноса строки
    output += dayWeek + '<br />';
  });
  body.innerHTML = output;
};

allWeekDay();