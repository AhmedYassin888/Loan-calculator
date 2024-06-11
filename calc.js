function calculateLoan() {
    let amount = parseFloat(document.getElementById('amount').value);
    let annualRate = parseFloat(document.getElementById('rate').value);
    let years = parseInt(document.getElementById('years').value);

    let monthlyRate = annualRate / 100 / 12;
    let numberOfPayments = years * 12;

    let monthlyPayment = (amount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -numberOfPayments));
    
    let tableBody = document.getElementById('amortizationTable').getElementsByTagName('tbody')[0];
    tableBody.innerHTML = ''; // Clear previous results

    let balance = amount;
    for (let i = 1; i <= numberOfPayments; i++) {
        let interestPayment = balance * monthlyRate;
        let principalPayment = monthlyPayment - interestPayment;
        balance -= principalPayment;

        let row = tableBody.insertRow();
        row.insertCell(0).innerText = i;
        row.insertCell(1).innerText = principalPayment.toFixed(2);
        row.insertCell(2).innerText = interestPayment.toFixed(2);
        row.insertCell(3).innerText = monthlyPayment.toFixed(2);
        row.insertCell(4).innerText = balance.toFixed(2);
    }
}