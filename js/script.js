// select target elements
var selectPlayerOne = $("#player-one-character");
var selectPlayerTwo = $("#player-two-character");
var randomizeButton = $("#randomize");

selectPlayerOne.on("change", handleChange)

selectPlayerTwo.on("change", handleChange)

randomizeButton.on("click", function () {
    var indexOne = randomOption();
    var indexTwo = randomOption();

    selectPlayerOne.val(indexOne);
    selectPlayerTwo.val(indexTwo);
})

function randomOption() {
    return Math.floor(Math.random() * 3) + 1;
}

function handleChange(event) {
    var selectElement = event.target;

    var userSelection = $(selectElement).val();
    console.log(userSelection)
}

function init() {
    selectPlayerOne.val(1);
    selectPlayerTwo.val(1);
}

$(document).ready(function () {
    init();
})
