const signInNavButton = document.getElementById("accountButton");
const signInForm = document.getElementById("signInForm");
const signInButton = document.getElementById("signIn");
signInButton.addEventListener("click", validateForm);

const passwordInput = document.getElementById("password");
passwordInput.addEventListener("input", validatePassword);
const confirmPasswordInput = document.getElementById("confirmPassword");
confirmPasswordInput.addEventListener("input", validateConfirmPassword);
const usernameInput = document.getElementById("username");
usernameInput.addEventListener("input", validateUsername);
const dobInput = document.getElementById("birthDate");
dobInput.addEventListener("input", validateDateOfBirth);


function validateForm(event) {
    if (!(validateUsername() && validatePassword() && validateDateOfBirth() && validateConfirmPassword())) {
        event.preventDefault();
    }
    else{
        saveUser();
    }
}

function saveUser() {
    const name = document.getElementById("username").value;
    localStorage.setItem("currentUser", JSON.stringify({username:name}));
}

function validateUsername() {
    const username = document.getElementById("username").value;
    const specialChars = new RegExp("(?=.*\\W)").test(username);
    const spanUsername = document.getElementById("spanUsername");

    if (specialChars){
        spanUsername.classList.remove("hidden");
        spanUsername.textContent = "invalid username";
    }
    else {
        if (!spanUsername.classList.contains("hidden")){
            spanUsername.classList.add("hidden");
        }
    }

    return !specialChars;
}

function validateDateOfBirth() {
    const dob = document.getElementById("birthDate");
    let isBirthDateValid = new RegExp("^\\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\\d|3[01])$").test(dob.value);
    console.log(isBirthDateValid);
    const spanDoB = document.getElementById("spanBirthdate");
    if (!isBirthDateValid){
        spanDoB.classList.remove("hidden");
        spanDoB.textContent = "invalid date of birth";
    }
    else {
        if (!spanDoB.classList.contains("hidden")){
            spanDoB.classList.add("hidden");
        }
    }

    return isBirthDateValid;
}

function validatePassword() {
    const inputPassword = document.getElementById("password");
    let strength = 0;
    let password = inputPassword.value;
    //check for length of at least 6
    if (password.length >= 6) strength++;
    //check for at least one digit/number
    if (new RegExp("(?=.*\\d)").test(password)) strength++;
    //check for at least one Upper case and one Lower case character
    if (new RegExp("(?=.*[a-z])(?=.*[A-Z])").test(password)) strength++;
    //check for at least one special character
    if (new RegExp("(?=.*\\W)").test(password)) strength++;
    setPasswordStrength(strength);

    const spanPassword = document.getElementById("spanPassword");
    if (strength <= 2){
        spanPassword.classList.remove("hidden");
        spanPassword.textContent = "password is not strong enough";
    }
    else {
        if (!spanPassword.classList.contains("hidden")){
            spanPassword.classList.add("hidden");
        }
    }

    return (strength > 2);
}

function setPasswordStrength(strength) {
    const veryWeak = document.getElementById("very-weak");
    const weak = document.getElementById("weak");
    const ok = document.getElementById("ok");
    const strong = document.getElementById("strong");
    let colors;
    switch (strength) {
        case 4:
            colors = ["lime", "lime", "lime", "lime"];
            break;
        case 3:
            colors = ["yellow", "yellow", "yellow", "#cacaca"];
            break;
        case 2:
            colors = ["orange", "orange", "#cacaca", "#cacaca"];
            break;
        case 1:
            colors = ["red", "#cacaca", "#cacaca", "#cacaca"];
            break;
        default:
            colors = ["#cacaca", "#cacaca", "#cacaca", "#cacaca"];
    }
    veryWeak.style.backgroundColor = colors[0];
    weak.style.backgroundColor = colors[1];
    ok.style.backgroundColor = colors[2];
    strong.style.backgroundColor = colors[3];

}

function validateConfirmPassword() {
    const inputPassword = document.getElementById("password");
    const inputConfirmPassword = document.getElementById("confirmPassword");

    const spanConfirmPassword = document.getElementById("spanConfirmPassword");
    if (inputPassword.value != inputConfirmPassword.value){
        spanConfirmPassword.classList.remove("hidden");
        spanConfirmPassword.textContent = "passwords do not match";
    }
    else {
        if (!spanConfirmPassword.classList.contains("hidden")){
            spanConfirmPassword.classList.add("hidden");
        }
    }

    return inputPassword.value === inputConfirmPassword.value;
}

