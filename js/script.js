/*
1.Написать скрипт, которые заменяет слово "функция" и его однокоренные слова в div с id=task1 на «<strong>функция</strong>».
2. Написать скрипт который в div с id=task2 найдет время. Время имеет формат часы:минуты. И часы, и минуты состоят из двух цифр, пример: 09:00.
заключить найденное время в тег <b></b>
3. Создать запрос во всем документе найти текст в кавычках и заключить его в теги <mark></mark>
4. Замените в документе домены вида http://site.ru на <a href="http://site.ru">site.ru</a>,
5. Напишите регулярное выражение для поиска цвета, заданного как #ABCDEF, вывести цвет в консоль
6. Ссылки такого вида http://site.ru/aaaa/bbbb.html заменить
на <a href="http://site.ru/aaaa/bbbb.html">site.ru</a>
Попрактикуйтесь на кроссвордах https://regexcrossword.com/
и на задачках https://habr.com/ru/post/167015/
 */

// Задача 1
const task1 = document.getElementById('task1')
// 1 корень функци
task1.innerHTML = task1.innerHTML.replace(/функци[а-я]+/gi, "<strong>функция</strong>")
// Задача 2
const task2 = document.getElementById('task2')
// 2
task2.innerHTML = task2.innerHTML.replace(/(\d\d):(\d\d)/g,(str) =>{
  return `<b> ${str}</b>`
})

// Задача 3
const mark = document.querySelectorAll('div')

mark.forEach(element => {
  element.innerHTML = element.innerHTML.replace(/"[\W]+"/gi ,(str) =>{
      return `<mark> ${str}</mark>`
  })
  // console.log(element.textContent.match(/"[\W]+"/gi));
});
// задача 4
// Замените в документе домены вида http://site.ru на <a href="http://site.ru">site.ru</a>

const link = document.querySelector('body')
const linkReplace = /(http|https)(\:\/\/)([\w\.]+[\w]+)[\w\-\.\/\_]+/gi

link.innerHTML = link.innerHTML.replace(linkReplace, (str,$1, $2, $3) =>{
  return `<a href='${str}'>${$1+$2+$3}</a>`
})
// 5. Напишите регулярное выражение для поиска цвета, заданного как #ABCDEF, вывести цвет в консоль

const color = document.querySelector('body')
let colorRegexp = /#[a-f0-9]{6}/gi;
// 5
console.log(color.innerHTML.match(colorRegexp));