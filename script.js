var userName=prompt("Please enter userName:")
alert("Hello "+userName);

var btnTranslate=document.querySelector("#btn-translate");
function clickEventHandler(){
  console.log("CLICK")
}

btnTranslate.addEventListener("click",clickEventHandler);