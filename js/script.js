const btn = document.querySelector('#start'),
    elem = document.querySelector('.box'),
    reset = document.querySelector('#end')

let active = false
// Изначальная позиция квадрата
let pos = 0;
let idInterval

function myAnimation() {
    pos++; // Увеличиваем позицию квадрата на единицу


    if (pos < 300) {
      elem.style.top = pos + "px"; // Устанавливаем значение top для инлайн стилей у квадрата
      elem.style.left = pos + 'px'; // // Устанавливаем значение left для инлайн стилей у квадрата
      idInterval = requestAnimationFrame(myAnimation); // Запуск анимации
    } else {
      active = false
    }
}

btn.addEventListener('click', () => {
  if (active) {
    cancelAnimationFrame(idInterval)
    console.log(' true');
    active = false
  } else {
    idInterval = requestAnimationFrame(myAnimation);
    console.log(' false');
    active = true
  }
});

reset.addEventListener('click', ()=>{
  cancelAnimationFrame(idInterval)
  active = false
  pos = 0
  elem.style.top = pos + "px"; // Устанавливаем значение top для инлайн стилей у квадрата
  elem.style.left = pos + 'px'; // // Устанавливаем значение left для инлайн стилей у квадрата
})