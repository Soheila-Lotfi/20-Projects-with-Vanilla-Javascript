

// get the random users

getRandomUsers();
getRandomUsers();
getRandomUsers();

let users = [];

async function getRandomUsers() {
    const res = await fetch('https://randomuser.me/api');
    const data = await res.json();
    const user = data.results[0];

    let newUser = {
        name: `${user.name.first} ${user.name.last}`,
        money: `$${Math.floor(Math.random() * 10000000000)}`
    }
    users.push(newUser)
}