// Массив для хранения введенных строк
let textArray = [];

// Функция добавления текста в массив и реверсирования
function addText() {
    const inputText = document.getElementById("textInput").value;
    if (!inputText) return; // Если строка пуста, не добавляем

    // Добавляем строку в массив
    textArray.push(inputText);

    // Очищаем поле ввода
    document.getElementById("textInput").value = "";

    // Отображаем реверсивные строки
    displayReversedText();
}

// Функция отображения реверсированных строк
function displayReversedText() {
    const textList = document.getElementById("textList");
    textList.innerHTML = ""; // Очищаем список перед выводом

    // Переворачиваем массив и выводим его
    textArray.reverse().forEach((text, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = text.split("").reverse().join(""); // Реверсируем строку
        textList.appendChild(listItem);
    });
}
