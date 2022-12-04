let count = 0
let countEl = document.getElementById("count-el")


function add() {
    count += 1 
    countEl.textContent = count
}

let saveEl = document.getElementById("entry-el")

function save() {
    let saveNew = count + " - "
    saveEl.textContent += saveNew

    count = 0
    countEl.textContent = count
}

