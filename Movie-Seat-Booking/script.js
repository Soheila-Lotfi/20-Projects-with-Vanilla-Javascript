
// setas is a nodelist of not occupied seats
const seats = document.querySelectorAll('.row .seat:not(.occupied)')
const container = document.querySelector('.container');   // const container = document.querySlector(".container");
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');
const ticketPrice = +movieSelect.value;                // the movieSelect.value is string, we use parseInt or + sign to convert string to number


// update the count and total price

function updatedSelectedCount() {
    // we need to count the slected seats first
    const selectedSeats = document.querySelectorAll('.row .seat.selected')
    const selectedSeatsCount = selectedSeats.length;

    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount * ticketPrice;

}

// event listener

movieSelect.addEventListener('change', (e) => {

})



container.addEventListener('click', (e) => {
    if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
        // now we want to add class selected to the seat, we use toggle method
        e.target.classList.toggle('selected');           // we have method add and remove as well but here we use toggle to select and unselect a seat by clicking
        // update the price and total in the p.text
        updatedSelectedCount();
    }
})