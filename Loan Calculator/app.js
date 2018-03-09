// Get value from submit button
document.getElementById('loan-form').addEventListener('submit', calculateLoans);

// Create function
function calculateLoans(e) {

    console.log('calculating....');

    const amount = document.getElementById('amount');
    const interest = document.getElementById('interest');
    const years = document.getElementById('years');
    const monthly_payment = document.getElementById('monthly-payment');
    const total_payment = document.getElementById('total-payment');
    const total_interest = document.getElementById('total-interest');

    const principal = parseFloat(amount.value);
    const calculatedInterest = parseFloat(interest.value) / 100 / 12;
    const calculatedPayments = parseFloat(years.value) * 12;

    //compute monthly payment
    const x = Math.pow(1 + calculatedInterest,  calculatedPayments);
    const monthly = (principal*x*calculatedInterest)/(x-1);

    if(isFinite(monthly)) {
        monthly_payment.value = monthly.toFixed(2);
        total_payment.value = (monthly * calculatedPayments).toFixed(2);
        total_interest.value = ((monthly * calculatedPayments)-principal).toFixed(2);
    } else {
        console.log('input your number');
    }
    console.log(principal)

    e.preventDefault();
}