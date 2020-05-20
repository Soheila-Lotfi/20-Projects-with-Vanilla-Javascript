
// setas is a nodelist of not occupied seats
const seats = document.querySelectorAll('.row .seat:not(.occupied)')
const container = document.querySelector('.container');   // const container = document.querySlector(".container");
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');
let ticketPrice = +movieSelect.value;                // the movieSelect.value is string, we use parseInt or + sign to convert string to number

/// get the data saved in local storage
populateUi();

// update the count and total price

function updatedSelectedCount() {
    // we need to count the slected seats first
    const selectedSeats = document.querySelectorAll('.row .seat.selected')
    const selectedSeatsCount = selectedSeats.length;

    ////////// save slectedseatsindex into local storage /////////////

    const selectedSeatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat))
    localStorage.setItem('selectedSeatIndices', JSON.stringify(selectedSeatsIndex))

    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount * ticketPrice;

}
/////////////////////////// save movie data in local storage////////////////////

function setMovieData(movieIndex, moviePrice) {
    localStorage.setItem('selectedMovieIndex', movieIndex);
    localStorage.setItem('selectedMoviePrice', moviePrice)

}

//////////////////////////// get data saved in localstorage ///////////////

function populateUi() {

    /// get selectedmovieindex
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeatIndices'));

    if (selectedSeats !== null && selectedSeats.length > 0) {
        seats.forEach((seat, index) => {
            if (selectedSeats.indexOf(index) > -1) {
                seat.classList.add('selected')
            }
        })
    }


    const movieSelectedIndex = localStorage.getItem('selectedMovieIndex');
    if (movieSelectedIndex !== null) {
        movieSelect.selectedIndex = movieSelectedIndex;
    }


}

// event listener

movieSelect.addEventListener('change', (e) => {
    ticketPrice = +e.target.value;

    ///////////////// save movie data in localstorage ////////////////////////
    setMovieData(+e.target.selectedIndex, +e.target.value)
    updatedSelectedCount();
})


container.addEventListener('click', (e) => {
    if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
        // now we want to add class selected to the seat, we use toggle method
        e.target.classList.toggle('selected');           // we have method add and remove as well but here we use toggle to select and unselect a seat by clicking
        // update the price and total in the p.text
        updatedSelectedCount();
    }
})

