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
        else {
            showSuccess(input)
        }
    })
}

// get field name and make the first character uppercase
function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);

}

// check length

function checkLength(input, min, max) {
    if (input.value.length < min) {
        showError(input, `${getFieldName(input)} must be at least ${min} characters`)
    }
    else if (input.value.length > max) {
        showError(input, `${getFieldName(input)} must be less than ${max} characters`)
    }
    else {
        showSuccess(input);
    }
}

//check email

function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (re.test(input.value.trim())) {
        showSuccess(input);
    }
    else {
        showError(input, 'Email is not valid')
    }
}

// passwords must be match

function checkPasswordMatch(input1, input2) {
    if (input1.value !== input2.value) {
        showError(input2, 'Passwords do not match')
    }

}

// show error message

function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

// show success outline

function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';


}



form.addEventListener('submit', function (e) {
    e.preventDefault();

    checkRequired([userName, email, password, password2]);
    checkLength(userName, 3, 30);
    checkLength(password, 6, 20);
    checkEmail(email);
    checkPasswordMatch(password, password2);


})