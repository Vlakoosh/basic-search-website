window.onload = () => {

    if (isOnline()) {
        setOnline();
    }
    const accountButton = document.getElementById("accountButton");
    accountButton.addEventListener("click", () => {
        if (accountButton.classList.contains("online")) {
            setOffline();
        }
    });
}

function setOnline() {
    const navbarEnd = document.querySelector(".navbar-end");

    const accountButton = document.getElementById("accountButton");
    accountButton.classList.remove("offline")
    accountButton.classList.add("online");
    accountButton.textContent = "Sign out";

    const user = JSON.parse(localStorage.getItem("currentUser"));

    let p = document.createElement("p");
    p.style.fontWeight = "600";
    p.textContent = "Welcome, " + user.username;
    p.style.marginRight = "30px";

    navbarEnd.innerHTML = "";
    navbarEnd.appendChild(p);
    navbarEnd.appendChild(accountButton);
}

function setOffline() {
    const navbarEnd = document.querySelector(".navbar-end");

    const accountButton = document.getElementById("accountButton");
    accountButton.classList.remove("online")
    accountButton.classList.add("offline");
    accountButton.textContent = "Sign in";

    localStorage.removeItem("currentUser");

    navbarEnd.innerHTML = "";
    navbarEnd.appendChild(accountButton);
}

function isOnline() {
    return localStorage.getItem("currentUser");
}