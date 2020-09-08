// ============= получение элементов


const score = document.querySelector('.score'),
  start = document.querySelector('.start'),
  gameArea = document.querySelector('.gameArea'),
  car = document.createElement('div');// создаем новый элемент

car.classList.add('car'); // добавление класса
// кнопки управления
const kays = {
  ArrowUp: false,
  ArrowDown: false,
  ArrowLeft: false,
  ArrowRight: false
};

// параметры игры
const setting = {
  start: false,
  score: 0,
  speed: 3
}

// ============== Обработчики событий

// нажатие на кнопку start
start.addEventListener('click', startGame);

// нажатие любой кнопки
document.addEventListener('keydown', startRun);
document.addEventListener('keyup', stopRun);

// =============== Фунции

//события при старте игры
function startGame() {
  start.classList.add('hide'); // скрытие кнопки старт
  setting.start = true;        // игра начата
  gameArea.appendChild(car);   // добавление дочернего элемента car
  requestAnimationFrame(playGame);// анимация игры
}

// управление игрой
function playGame() {
  console.log('Play game');
  if (setting.start) {
    requestAnimationFrame(playGame);
  }
}

// старт
function startRun(event) {
  event.preventDefault();  // отмена скролла на странице
  console.log(event.key);  // какая клавиша нажата
}

// стоп
function stopRun(event) {
  event.preventDefault();  // отмена скролла на странице

}

