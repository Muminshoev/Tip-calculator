const calculate = document.getElementById("btn");
const bill = document.getElementById("bill");
const tipPercentage = document.getElementById("tip");
const total = document.getElementById("total");

function doMath() {
    let billValue = bill.value;
    let tipValue = tipPercentage.value
    let totalBill = billValue * (1 + tipValue / 100)
    total.innerHTML = totalBill.toFixed(2)
}

calculate.addEventListener("click", doMath)

