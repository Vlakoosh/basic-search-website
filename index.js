
const signInNavButton = document.getElementById("accountButton");

function setSignInButtonEvents() {
    signInNavButton.addEventListener('click', () => {
        if (!localStorage.getItem("currentUser")) window.location.href = "sign-up.html";
    });
}

setSignInButtonEvents();

