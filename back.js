// get all with query selector
var txtinput = document.querySelector("#txt-input");
var Button = document.querySelector("#BTN");
var txtoutput = document.querySelector("#output");

// define server url
var serverURL = "https://api.funtranslations.com/translate/ferb-latin.json";

//define Function getTranslaion url
function getTranslationURL(Text) {
    return serverURL + "?" + "text=" + Text
}

//define function errr handle 
function errorHandler(error) {
    console.log("error occured",error);;
    alert("server is down , Try Later Plz !!")
}

//define function click Handler
function clickHandler() {
    var inputText = txtinput.value;
    
    //fetch
    fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        txtoutput.innerText = translatedText;
    })
    .catch(errorHandler)
};
Button.addEventListener("click",clickHandler);
