// var userName=prompt("Please enter userName:")
// alert("Hello "+userName);

var btnTranslate=document.querySelector("#btn-translate");
var txtInput=document.querySelector("#txt-input");
var outputDiv=document.querySelector("#output");
function clickEventHandler(){
  console.log(txtInput.value); //Exercise 4 lesson: .value attribute of input elements
  outputDiv.innerText=txtInput.value;//Exercise 5 lesson:Wiring the output div part
}

btnTranslate.addEventListener("click",clickEventHandler);

// Ex7 answer
var url2="https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json?text=I am Iron Man"

fetch(url2).then(function rhandle(response){
  return response.json();
}).then(function show(data){
  console.log(data)
})

// Things to make work simpler

function constructURL(subtext){
  var trans="https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json?text="+subtext;
  return trans;
}

var text3="Life is goood LG"
fetch(constructURL(text3))
.then(function rhandle(response){
  return response.json();
})
.then(function showJSON(json){
  console.log(json);
})

//functions can be reduced by using arrow representation