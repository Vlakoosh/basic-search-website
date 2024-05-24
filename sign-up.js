const signInNavButton = document.getElementById("accountButton");

function setSignInButtonEvents() {
    signInNavButton.addEventListener('click', () => {
        window.location.href = "sign-up.html";
    });
}

const homeButton = document.getElementById("homeButton");

function setHomeButtonEvents() {
    homeButton.addEventListener('click', () => {
        window.location.href = "index.html";
    });
}

setHomeButtonEvents();
setSignInButtonEvents();