let currentNum = document.getElementById("currentNum");
let decreaseBtn = document.getElementById("decreaseBtn");
let increaseBtn = document.getElementById("increaseBtn");
let resetBtn = document.getElementById("resetBtn");
let submitBtn = document.getElementById("submitBtn");
let circle = document.getElementById("circle").style;
let forcedNum = document.getElementById("forcedNum");
let circleSize = 0;
let counter = 0;

decreaseBtn.onclick = function(){
    counter -= 1;
    currentNum.textContent = counter
    circleSize = String(counter + "px");
    circle.height = circleSize
    circle.width = circleSize
}

increaseBtn.onclick = function(){
    counter += 1;
    currentNum.textContent = counter
    circleSize = String(counter + "px");
    circle.height = circleSize
    circle.width = circleSize
}

resetBtn.onclick = function(){
    counter = 0;
    currentNum.textContent = 0;
    circle.height = counter
    circle.width = counter
}

submitBtn.onclick = function(){
    counter = Number(forcedNum.value);
    currentNum.textContent = counter
    circleSize = String(counter + "px");
    circle.height = circleSize
    circle.width = circleSize
}