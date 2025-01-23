
let textArray = [];

function addText() {
    const inputText = document.getElementById("textInput").value;
    if (!inputText) return;

    
    textArray.push(inputText);

  
    document.getElementById("textInput").value = "";

    
    displayReversedText();
}


function displayReversedText() {
    const textList = document.getElementById("textList");
    textList.innerHTML = "";


    textArray.reverse().forEach((text, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = text.split("").reverse().join("");
        textList.appendChild(listItem);
    });
}
