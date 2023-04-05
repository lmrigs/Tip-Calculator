const billAmount = document.getElementById("bill-amount");
const tipPercentage = document.querySelectorAll(".tip-box");
const totalTip = document.getElementById("tip-output");
const totalBill = document.getElementById("total-output");

console.log(billAmount);


tipPercentage.forEach((button) => {
button.addEventListener("click", () => {
    const billNum = billAmount.value;
    const tipPerNum = button.textContent / 100;
    const tip = billNum * tipPerNum;
    const total = parseFloat(billNum) + parseFloat(tip);
    const roundedTotal = total.toFixed(2); // round the total to 2 decimal places
    totalTip.innerHTML = "$" + tip.toFixed(2); // round the tip to 2 decimal places and set the HTML
    totalBill.innerHTML = "$" + roundedTotal; 
    });
});