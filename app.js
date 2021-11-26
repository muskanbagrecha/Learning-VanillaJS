var btnTranslate = document.querySelector('#btn-translate');
var textareaInput = document.querySelector("#textarea-input");
var outputDiv = document.querySelector("#output");


function clickEventHandler() {
    var inputvalue = textareaInput.value;
    outputDiv.innerText = inputvalue;
};

btnTranslate.addEventListener("click", clickEventHandler);


