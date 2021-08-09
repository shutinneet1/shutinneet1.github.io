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

    let rand_num = Math.floor(Math.random(11));

    if (rand_num === 1) {
        window.alert("Your waifu is Scathach");
        let image = document.CreateElement("img");
        image.src = "images/shishou.png";
        element.appendChild("img");
    }

    if (rand_num === 2) {
        window.alert("Your waifu is Scathach");
        let image = document.CreateElement("img");
        image.src = "images/shishou.png";
        element.appendChild("img");
    }

    if (rand_num === 3) {
        window.alert("Your waifu is Scathach");
        let image = document.CreateElement("img");
        image.src = "images/shishou.png";
        element.appendChild("img");
    }

    if (rand_num === 4) {
        window.alert("Your waifu is Scathach");
        let image = document.CreateElement("img");
        image.src = "images/shishou.png";
        element.appendChild("img");
    }

    if (rand_num === 5) {
        window.alert("Your waifu is Scathach");
        let image = document.CreateElement("img");
        image.src = "images/shishou.png";
        element.appendChild("img");
    }

    if (rand_num === 6) {
        window.alert("Your waifu is Scathach");
        let image = document.CreateElement("img");
        image.src = "images/shishou.png";
        element.appendChild("img");
    }

    if (rand_num === 7) {
        window.alert("Your waifu is Scathach");
        let image = document.CreateElement("img");
        image.src = "images/shishou.png";
        element.appendChild("img");
    }

    if (rand_num === 8) {
        window.alert("Your waifu is Scathach");
        let image = document.CreateElement("img");
        image.src = "images/shishou.png";
        element.appendChild("img");
    }

    if (rand_num === 9) {
        window.alert("Your waifu is Scathach");
        let image = document.CreateElement("img");
        image.src = "images/shishou.png";
        element.appendChild("img");
    }

    if (rand_num === 10) {
        window.alert("Your waifu is Scathach");
        let image = document.CreateElement("img");
        image.src = "images/shishou.png";
        element.appendChild("img");
    }

    else {
        window.alert("Your waifu is Scathach");
        let image = document.CreateElement("img");
        image.src = "images/shishou.png";
        element.appendChild("img");
    }
    
}
