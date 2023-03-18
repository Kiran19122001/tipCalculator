let billAmount = document.getElementById("billAmount")
let percentageTip = document.getElementById("percentageTip")
let tipAmount = document.getElementById("tipAmount")
let totalAmount = document.getElementById("totalAmount")
let errorMesg = document.getElementById("errorMessage")
let errorCont = "Please Enter a Valid Input"

function calculateBtn() {
    if (billAmount.value === "") {
        errorMesg.textContent = errorCont
    } else if (percentageTip.value === "") {
        errorMesg.textContent = errorCont
    } else {
        errorMesg.textContent = ""
        let bill = parseInt(billAmount.value)
        let percent = parseInt(percentageTip.value)
        let calculatedTip = (percent / 100) * bill
        let total = bill + calculatedTip
        tipAmount.value = calculatedTip
        totalAmount.value = total
    }



}