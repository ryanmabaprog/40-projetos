const button = document.getElementById("clickBtn");
const clickerLabel = document.getElementById("clickerLabel");
const clickCount = document.getElementById("clickCount");

let i = 0;  

function backgroundColorChange(){
    let getBackgroundColor = Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = "#" + getBackgroundColor; 
}

button.addEventListener("click", () => {
    backgroundColorChange();  
    i += 1;  
    clickCount.innerText = i;  
});
