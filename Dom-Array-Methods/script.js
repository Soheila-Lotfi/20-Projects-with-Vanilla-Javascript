// get the elements
const addUser = document.getElementById('add-user')
const main = document.getElementById('main')
const double = document.getElementById('double')
const showMillionaries = document.getElementById('show-millionaires')
const sort = document.getElementById('sort')

// get the random users

getRandomUsers();
getRandomUsers();
getRandomUsers();

let users = [];

// get the random users from an api usinf fetch
async function getRandomUsers() {
    const res = await fetch('https://randomuser.me/api');
    const data = await res.json();
    const user = data.results[0];

    let newUser = {
        name: `${user.name.first} ${user.name.last}`,
        money: Math.floor(Math.random() * 10000000000)
    }
    addData(newUser)
}


// add new user to data
function addData(user) {
    users.push(user);

    // grab the new user and then update the dom, display it on the dom
    updateDom();

}

// update dom

function updateDom(providedUSer = users) {

    // empty the main
    main.innerHTML = `<h2><strong>Person</strong>Wealth</h2>`

    providedUSer.forEach(item => {
        const element = document.createElement('div')
        element.classList.add('person');
        element.innerHTML = `<strong>${item.name}</strong> ${formatMoney(item.money)}`;
        main.appendChild(element);
    })

}

// format money 

function formatMoney(number) {
    return '$' + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}


// double money

function doubleMoney() {
    users = users.map(item => {
        return { ...item, money: item.money * 2 }
    })
    updateDom();
}


// show only millionaires

function showOnlyMillionairs() {
    users = users.filter(user => user.money > 1000000000)
    updateDom();
}


// sort by richest

function sortByRichest() {
    users.sort((a, b) => b.money - a.money)
    updateDom();
}

// event listener

addUser.addEventListener('click', getRandomUsers)
double.addEventListener('click', doubleMoney)
showMillionaries.addEventListener('click', showOnlyMillionairs)
sort.addEventListener('click', sortByRichest)
