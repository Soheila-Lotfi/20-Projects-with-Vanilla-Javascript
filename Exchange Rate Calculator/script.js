

const currencyOne = document.getElementById('currency-one')
const currencyTwo = document.getElementById('currency-two')
const amountOne = document.getElementById('amount-one')
const amountTwo = document.getElementById('amount-two')
const rateElement = document.getElementById('rate')
const swapEl = document.getElementById('swap')

calculate();
// calculate the rate

function calculate() {
    const currencyOneValue = currencyOne.value;
    const currencyTwoValue = currencyTwo.value;

    fetch(`https://api.exchangerate-api.com/v4/latest/${currencyOneValue}`,
        { method: 'GET' }).then(res => res.json()).then(data => {
            const rate = data.rates[currencyTwoValue];
            rateElement.innerText = `1 ${currencyOneValue}= ${rate} ${currencyTwoValue}`
            amountTwo.value = (rate * amountOne.value).toFixed(2)
        })

}

// swap the two currency and recalculate the rate 

function swap() {
    const temp = currencyOne.value;
    currencyOne.value = currencyTwo.value;
    currencyTwo.value = temp;
    calculate()
}


// Event listener

currencyOne.addEventListener('change', calculate)
currencyTwo.addEventListener('change', calculate)
amountOne.addEventListener('input', calculate)
amountTwo.addEventListener('input', calculate)
swapEl.addEventListener('click', swap)


