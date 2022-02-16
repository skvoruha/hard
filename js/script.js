"use strict";

const body = document.querySelector('body');

const week = ['Понедельник', 'Вторник', 'Среда', 'Четверг',
  'Пятница', 'Суббота', 'Воскресенье'];

const todayWeek = function () {
  let numDay = new Date().getDay();
  // у нас воскресенье последний день недели, а не первый
  return (numDay) ? numDay - 1 : 6;
};





let screenOutput = "";

// функция окончаний
setInterval(function checkingTimeCompletion(){
  let dateTime = new Date();
  const nowTime = new Date().toLocaleTimeString();
  const nowDate = new Date().toLocaleDateString();
  // Создаём объект с окончаниями
  const ending = {
    nameHourEnding : {
        theTime: dateTime.getHours(),
        0:' час',
        1:'а ',
        2:'ов ',
        3:''
    },
    nameMinutesEnding : {
        theTime: dateTime.getMinutes(),
        0:' минут',
        1:'ы ',
        2:' ',
        3:'а '
    },
    nameSecondsEnding : {
        theTime: dateTime.getSeconds(),
        0:' секунд',
        1: 'ы ',
        2: '',
        3: 'а '
    }
  }
  // присваиваем ключи объекта ending
  const keys = Object.keys(ending)
  // перебор массива с названием ключей
  keys.forEach(element => {
     screenOutput += checkNameTime(element)
    // console.log(element);
  });


  function checkNameTime(nameTime) {
    const time = ending[nameTime].theTime
    // ДЛЯ ПРОВЕРКИ ЧИСАЛ ВКЛЮЧИТЬ do while в конце до 60 чисел
    // do{
    // const time = +prompt()
    let Output
    // вар a
    // вывод 1 час, 21 час 1 минута 1 секунда , всё что связано с окончаниеем 1 кромне 11
    if (time % 10 == 1 && time !== 11){Output = time + ending[nameTime][0] + ending[nameTime][3]
    // вывод с оконание  , 2 часа , 2 минуты , 2 секунды
  } else if (time % 10 > 1 && time % 10 < 5 ) {Output = time + ending[nameTime][0] + ending[nameTime][1]
    // вывод с оконание ов , 13 часов , 13 минут , 13 секунд 2 часа
    } else if (time % 10 >= 5 || time % 10 == 0 || time == 11 )
    {Output = time + ending[nameTime][0] + ending[nameTime][2]
    }
    return Output
    // Включить while
    // }while(time < 60)
  } // конец функции checkNameTime

  body.innerHTML = "<div class='day'> Сегодня "+ week[todayWeek()] + " " + dateTime.getFullYear() + " года " + " " + screenOutput + " "  +  "</div>"

  body.innerHTML +=  "<div class='day'>" + nowDate + " " + nowTime +  "</div>"
  screenOutput = ""

},1000)

