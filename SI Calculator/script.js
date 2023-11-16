function calculateMaturityAmount(){
    const principalAmount = parseFloat(document.getElementById("principalAmount").value);
    const interestRate = parseFloat(document.getElementById("interestRate").value);
    const tenure = parseFloat(document.getElementById("tenure").value);

    const maturityAmount = (principalAmount * interestRate * tenure)/100;
    document.getElementById("maturityAmount").innerText=`Maturity Amount:  $${maturityAmount.toFixed(2)}`;
}
document.getElementById("calculateBtn").addEventListener('click', calculateMaturityAmount);