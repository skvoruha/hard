"use strict";

const lists = document.querySelectorAll('ul')
// Создали новый элемент


const btn = document.querySelector('button')



const addElem = function () {
  // создаём элееент дш
  const newElem = document.createElement('li')
  // получаем текст с инпута
  const inputText = document.querySelector('input').value
  if (inputText == '') {
    return alert("Пустая срока")
  }
  // присваиваем новому элементу текст с инпута
  newElem.textContent = inputText
  // добавляем новый элемент в спсок
  lists[0].append(newElem)
}
btn.addEventListener('click',addElem)



console.log(lists);
console.log(btn);