
var easybtn = document.querySelector('#easy');
var hardbtn = document.querySelector('#hard');
var colors = generateRandomColor(6);
var s = document.querySelector('#value');
var boxes = document.querySelectorAll(".box");
var outputText = document.querySelector('.output');
outputText.textContent = "Try!!";
var boxCount = 6;
var pickedColor = colors[Math.floor(Math.random() * 6)];
s.textContent = pickedColor;
var playbtn = document.querySelector('#newColors');
easybtn.addEventListener('click', function () {
    document.querySelector('h1').style.background = '#f99999';
    outputText.textContent = "Try!!";
    boxCount = 3;
    colors = generateRandomColor(boxCount);
    pickedColor = colors[Math.floor(Math.random() * 3)];
    s.textContent = pickedColor;

    for (var i = 0; i < boxes.length; i++) {
        if (colors[i]) {
            boxes[i].style.background = colors[i];
        }
        else {
            boxes[i].style.display = 'none';
        }
    }
});
hardbtn.addEventListener('click', function () {
    document.querySelector('h1').style.background = '#f99999';
    outputText.textContent = "Try!!";
    boxCount = 6;
    colors = generateRandomColor(boxCount);
    pickedColor = colors[Math.floor(Math.random() * 6)];
    s.textContent = pickedColor;

    for (var i = 0; i < boxes.length; i++) {
        if (colors[i]) {
            boxes[i].style.background = colors[i];
            boxes[i].style.display = 'block';
        }
    }
});
playbtn.addEventListener('click', function () {
    document.querySelector('h1').style.background = '#f99999';
    outputText.textContent = "Try!!";
    colors = generateRandomColor(boxCount);
    pickedColor = colors[Math.floor(Math.random() * boxCount)];
    s.textContent = pickedColor;
    for (var i = 0; i < boxes.length; i++) {
        boxes[i].style.background = colors[i];
    }
});
for (var i = 0; i < colors.length; i++) {
    boxes[i].style.background = colors[i];
    boxes[i].addEventListener('click', function () {
        var selectedColor = this.style.background;
        if (selectedColor === pickedColor) {
            win();
        }
        else {
            loose(this);
        }
    });
}
function win() {
    for (var i = 0; i < colors.length; i++) {
        boxes[i].style.background = pickedColor;
    }
    document.querySelector("h1").style.background = pickedColor;
    outputText.textContent = "Correct!!";
}
function loose(a) {
    console.log(a);
    a.style.background = '#2f2f2f';
    outputText.textContent = "Try again!!";
}
function generateRandomColor(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push(randomColor());
    }
    return arr;
}
function randomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}