function setSignInButtonEvents() {
    const signInNavButton = document.getElementById("accountButton");
    signInNavButton.addEventListener('click', () => {
        if (!localStorage.getItem("currentUser")) window.location.href = "sign-up.html";
    });
}

function setHomeButtonEvents() {
    const homeButton = document.getElementById("homeButton");
    homeButton.addEventListener('click', () => {
        window.location.href = "index.html";
    });
}

function setSearchButtonEvents() {
    const searchButton = document.getElementById("searchButton");
    searchButton.addEventListener('click', () => {
        window.location.href = "search.html";
    });
}


setSignInButtonEvents();
setSearchButtonEvents();
setHomeButtonEvents();