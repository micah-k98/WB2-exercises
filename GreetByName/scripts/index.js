"use strict"

window.onload = init;

function init() {
    let greetButton = document.getElementById("greetButton");
    greetButton.onclick = onGreetUserButtonClicked;
}

function onGreetUserButtonClicked() {
    let nameField = document.getElementById("nameField");
    alert("Hello, " + nameField.value + "!");
}