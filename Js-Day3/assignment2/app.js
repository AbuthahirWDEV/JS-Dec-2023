const names = [ "Aarav", "Sanya", "Vikram", "Neha", "Rohan", "Priya", "Amit", "Meera", "Rajiv", "Ananya" ];
let display = document.getElementById('display')
currentIndex = 0
function currentDisplay(){
    display.innerHTML = names[currentIndex]
}
function showPrevious(){
    currentIndex = (currentIndex + 1) % names.length;
    currentDisplay()
}
function showNext(){
    currentIndex = (currentIndex - 1 + names.length) % names.length;
    currentDisplay()
}
currentDisplay()