let covertBtn = document.getElementById("child-button")
let num = document.getElementById("child-num")
let lengthEl = document.getElementById("length-el")
let volumeEl = document.getElementById("volume-el")
let massEl = document.getElementById("mass-el")
let meterToFeet = 3.28
let literToGallon = 0.264
let kiloToPound = 2.204


covertBtn.addEventListener("click", function () {
    let meterValue = num.value
    let literValue = num.value
    let kiloValue = num.value

    let poundValue = num.value
    let gallonValue = num.value
    let feetValue = num.value


    lengthEl.textContent = `${meterValue} meter = ${meterValue * meterToFeet} feet | ${feetValue} feet = ${(feetValue / meterToFeet).toFixed(2)} meter`
    volumeEl.textContent = `${literValue} liter = ${literValue * literToGallon} gallons | ${gallonValue} gallons = ${(gallonValue / literToGallon).toFixed(2)} liter`
    massEl.textContent = `${kiloValue} kilo = ${kiloValue * kiloToPound} pounds | ${poundValue} pounds = ${(poundValue / kiloToPound).toFixed(2)} kilograms`

})