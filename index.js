
const signInNavButton = document.getElementById("accountButton");

function setSignInButtonEvents() {
    signInNavButton.addEventListener('click', () => {
        window.location.href = "sign-up.html";
    });
}

setSignInButtonEvents();

