// get the elements
const addUser = document.getElementById('add-user')
const main = document.getElementById('main')
const double = document.getElementById('double')

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

// event listener

addUser.addEventListener('click', getRandomUsers)
double.addEventListener('click', doubleMoney)
