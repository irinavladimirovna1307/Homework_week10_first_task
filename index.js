// // Функция для вывода сообщения в консоль
// function displayMessage() {
//     console.log('Я учу JavaScript!');
// }

// // Вызов функции для вывода сообщения
// displayMessage();

// // Управление галереей

// function prevImage() {
//     const imgElement = document.getElementById('image');
//     let current = parseInt(imgElement.getAttribute('data-current'));

//     if (current === 1) {
//         imgElement.src = 'image3.jpg';  
//         imgElement.setAttribute('data-current', 3);
//     } else if (current === 2) {
//         imgElement.src = 'image1.jpg';
//         imgElement.setAttribute('data-current', 1);
//     } else if (current === 3) {
//         imgElement.src = 'image2.jpg';
//         imgElement.setAttribute('data-current', 2);
//     }
// }

// // Функция для переключения на следующее изображение
// function nextImage() {
//     const imgElement = document.getElementById('image');
//     let current = parseInt(imgElement.getAttribute('data-current'));

//     if (current === 1) {
//         imgElement.src = 'image2.jpg';
//         imgElement.setAttribute('data-current', 2);
//     } else if (current === 2) {
//         imgElement.src = 'image3.jpg';
//         imgElement.setAttribute('data-current', 3);
//     } else if (current === 3) {
//         imgElement.src = 'image1.jpg';
//         imgElement.setAttribute('data-current', 1);
//     }
// }

//Без DOM:
// Функция, выводящая сообщение в консоли
function displayMessage() {
    console.log('Я учу JavaScript!');
}

// Вызов функции для вывода сообщения
displayMessage();

// Массив с изображениями (ссылками на изображения)
const images = [
    './image1.jpg',
    './image2.jpg',
    './image3.jpg'
];

// Переменная для отслеживания текущего изображения
let currentIndex = 0;

// Функция для переключения на следующее изображение
function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
}

// Функция для переключения на предыдущее изображение
function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
}

// Функция для обновления изображения
function updateImage() {
    const imageElement = document.getElementById('image');
    imageElement.src = images[currentIndex];
    imageElement.setAttribute('data-current', currentIndex + 1);
}