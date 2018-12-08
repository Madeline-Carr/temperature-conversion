//Temperature Conversion Equations

// Celsius to Fahrenheit
function celToFah(cel) {
    let fah = (cel * 9 / 5) + 32;
    return fah;
}
console.log(celToFah(0)); // Logs 32

//Celsius to Kelvin
function celToKel(cel) {
    let kel = cel + 273.15;
    return kel;
}
console.log(celToKel(0)); //Logs 273.15

//Fahrenheit to Celsius
function fahToCel(fah) {
    let cel = (fah - 32) * 5 / 9;
    return cel;
}
console.log(fahToCel(32)); //Logs 0

//Fahrenheit to Kelvin
function fahToKel(fah) {
    let kel = (fah - 32) * 5 / 9 + 273.15;
    return kel;
}
//Kelvin to Fahrenheit
function kelToFah(kel) {
    let fah = (kel - 273.15) * 9 / 5 + 32;
    return fah;
}

//Kelvin to Celsius
function kelToCel(kel) {
    let cel = kel - 273.15;
    return cel;
}