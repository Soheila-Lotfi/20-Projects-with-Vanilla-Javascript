const form = document.getElementById('form');
const userName = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');



// check required function

// function checkRequired()

function checkRequired(inputArr) {
    inputArr.forEach(input => {
        if (!input.value) {
            showError(input, `${getFieldName(input)} is required`)
        }
    })
}

// get field name and make the first character uppercase
function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.slice(1);

}

// check length

function checkLength(input, min, max) {
    if (input.value.length < min) {
        showError(input, `${getFieldName(input)} must be at least ${min} characters`)
    }
    else if (input.value.length > max) {
        showError(input, `${getFieldName(input)} must be at least ${min} characters`)
    }
}

// show error message

function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}



form.addEventListener('submit', function (e) {
    e.preventDefault();

    checkRequired([userName, email, password, password2]);
    checkLength(userName, 3, 30);
    checkLength(password, 6, 20);


})