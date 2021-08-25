var array = [];
var numberArray = 0;
for (var i=0; i < 6; i++) {
    numberArray = parseInt(prompt("Inserisci un numero"));
    if (numberArray % 2 == 1) {
        array.push(numberArray);
    }
}
for (var i = 0; i < array.length; i++) {
    document.getElementById("arrayNumbers").innerHTML += array[i] + "   ";
}