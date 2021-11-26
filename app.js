var btnTranslate = document.querySelector('#btn-translate');
var textareaInput = document.querySelector("#textarea-input");
var outputDiv = document.querySelector("#output");
var url = "https://api.funtranslations.com/translate/minion.json"

function errorHandler(error) {
    console.log(Error);
    alert("Server is down!")
}

function clickEventHandler() {
    var inputvalue = textareaInput.value;
    fetch(GETTranslationUrl(inputvalue))
    .then(response => response.json()
    .then(json => 
        outputDiv.innerHTML = json.contents.translated))
    .catch(errorHandler);
};

function GETTranslationUrl(text){
    updatedurl =  url + "?text="+text
    return updatedurl;
}

btnTranslate.addEventListener("click", clickEventHandler);


