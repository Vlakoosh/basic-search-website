import {laureates} from "./nobelprize_laureates.js";

window.addEventListener("load", () => {
    let params = new URLSearchParams(location.search);
    let query = params.get('query');
    console.log(query);

    searchLaureates(query);

})

function searchLaureates(query) {
    let regex = new RegExp(query.toLowerCase());
    let people = [];

    for (let laureate of laureates){
        if (!laureate.surname || !laureate.firstname || !laureate.bornCountry) continue;
        if (regex.test(laureate.firstname.toLowerCase()) ||
            regex.test(laureate.surname.toLowerCase()) ||
            regex.test(laureate.bornCountry.toLowerCase())){
            people.push(laureate);
        }
    }

    if (people) displayLaureates(people);
}

function displayLaureates(people) {
    const table = document.getElementById("table");

    for (const person of people) {
        let row = document.createElement("tr");
        let columnName = document.createElement("td");
        let columnCountry = document.createElement("td");
        let columnPrize = document.createElement("td");

        columnName.textContent = person.firstname + " " + person.surname;
        columnCountry.textContent = person.bornCountry;
        for (let prize of person.prizes){
            if (columnPrize.textContent !== "") columnPrize.textContent += ", "
            columnPrize.textContent += prize.category + " " + "(" + prize.year + ")";
        }


        row.append(columnName, columnCountry, columnPrize);
        table.appendChild(row);
    }

}