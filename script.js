let search_button = document.querySelector("#button");
let userInput = document.querySelector("#input")

search_button.addEventListener("click", onClick);

function onClick(event) {
    event.preventDefault();
    window.alert("You searched up " + userInput.value + ". What do you hope to acomplish by searching up something here lol. Go read the fandom. https://fategrandorder.fandom.com/wiki/");
}

let waifu_button = document.querySelector("#waifu_button");
let user_Input = document.querySelector("#num")

waifu_button.addEventListener("click", waifuClick);

function waifuClick(event) {
    event.preventDefault();
    Math.floor(Math.random(11));
    if (num === 1) {
        window.alert("Your waifu is Scathach");
    }
    if (num === 2) {
        window.alert("Your waifu is Scathach");
    }
    if (num === 3) {
        window.alert("Your waifu is Scathach");
    }
    if (num === 4) {
        window.alert("Your waifu is Scathach");
    }
    if (num === 5) {
        window.alert("Your waifu is Scathach");
    }
    if (num === 6) {
        window.alert("Your waifu is Scathach");
    }
    if (num === 7) {
        window.alert("Your waifu is Scathach");
    }
    if (num === 8) {
        window.alert("Your waifu is Scathach");
    }
    if (num === 9) {
        window.alert("Your waifu is Scathach");
    }
    if (num === 10) {
        window.alert("Your waifu is Scathach");
    }
    else {
        window.alert("Your waifu is Scathach");
    }
    let img = doucmentCreateElement("img");
    img.src = "images/shishou.png";
}
