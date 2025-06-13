const choiceR = document.body.querySelector(".R")
const choiceP = document.body.querySelector(".P")
const choiceS = document.body.querySelector(".S")

const user_Score = document.body.querySelector("#US")
const comp_Score = document.body.querySelector("#CS")

const result = document.body.querySelector(".result")

const refresh = document.body.querySelector(".refresh")

let US = 0
let CS = 0

let rounds = 0
const totalRounds = 10;
//game logic starts 

const UCR = () => {
    rounds++
    console.log("rounds - ", rounds)
    let rand = () => {
        const choices = ["rock", "paper", "scissor"]
        const random_val = Math.floor(Math.random() * 3)
        return random_choice = choices[random_val]
    }
    let comp_choice = rand()

    if (comp_choice == "rock") {
        result.innerHTML = "DRAW"
        result.style.backgroundColor = "yellow"
    }
    else if (comp_choice == "paper") {
        result.innerHTML = "YOU LOSE"
        result.style.backgroundColor = "red"
        CS++
        comp_Score.innerHTML = CS

    }
    else {
        result.innerHTML = "YOU WIN"
        result.style.backgroundColor = "green"
        US++
        user_Score.innerHTML = US
    }
    checkOver()
}

const UCP = () => {
    rounds++
    console.log("rounds - ", rounds)
    let rand = () => {
        const choices = ["rock", "paper", "scissor"]
        const random_val = Math.floor(Math.random() * 3)
        return random_choice = choices[random_val]
    }
    let comp_choice = rand()

    if (comp_choice == "paper") {
        result.innerHTML = "DRAW"
        result.style.backgroundColor = "yellow"
    }
    else if (comp_choice == "scissor") {
        result.innerHTML = "YOU LOSE"
        result.style.backgroundColor = "red"
        CS++
        comp_Score.innerHTML = CS

    }
    else {
        result.innerHTML = "YOU WIN"
        result.style.backgroundColor = "green"
        US++
        user_Score.innerHTML = US
    }
    checkOver()
}

const UCS = () => {
    rounds++
    console.log("rounds - ", rounds)
    let rand = () => {
        const choices = ["rock", "paper", "scissor"]
        const random_val = Math.floor(Math.random() * 3)
        return random_choice = choices[random_val]
    }
    let comp_choice = rand()

    if (comp_choice == "scissor") {
        result.innerHTML = "DRAW"
        result.style.backgroundColor = "yellow"
    }
    else if (comp_choice == "rock") {
        result.innerHTML = "YOU LOSE"
        result.style.backgroundColor = "red"
        CS++
        comp_Score.innerHTML = CS

    }
    else {
        result.innerHTML = "YOU WON"
        result.style.backgroundColor = "green"
        US++
        user_Score.innerHTML = US
    }
    checkOver()
}

const checkOver = () => {
    if (rounds === totalRounds) {
        choiceR.style.pointerEvents = "none";
        choiceP.style.pointerEvents = "none";
        choiceS.style.pointerEvents = "none";
        choiceR.style.opacity = 0.5;
        choiceP.style.opacity = 0.5;
        choiceS.style.opacity = 0.5;
        if (US > CS) {
            result.innerHTML = "USER WON"
            result.style.backgroundColor = "white"
        }
        else {
            result.innerHTML = "COMP WON"
            result.style.backgroundColor = "white"
        }
    }
}

const refreshFunc = () => {
    US = 0;
    CS = 0;
    rounds = 0;
    user_Score.innerHTML = US;
    comp_Score.innerHTML = CS;
    result.innerHTML = "Let's Play!";
    result.style.backgroundColor = "white";
    choiceR.style.pointerEvents = "auto";
    choiceP.style.pointerEvents = "auto";
    choiceS.style.pointerEvents = "auto";
    choiceR.style.opacity = 1;
    choiceP.style.opacity = 1;
    choiceS.style.opacity = 1;
}

//game logic ends





