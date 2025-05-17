// let firstCard = 10
// let secondCard = 4
// let cards = [firstCard, secondCard]
// let sum = firstCard + secondCard
// let hasBlackjack = false
// let isAlive = false
// let message = ""

// let sumEl = document.getElementById("sum-el")
// let cardsEl = document.getElementById("cards-el")


// let messageEl = document.getElementById("message-el")
// console.log(messageEl)
// function startGame(){
//         renderGame()
// }

// function renderGame(){
//         sumEl.textContent = "Sum: " + sum
//         cardsEl.textContent = "Cards: " + Cards[0] + " " + Cards[1]
//     if (sum <= 20) {
//         message = "Do you want to draw a new card?"
        
//     }        
// else if (sum === 21){
    
//         message = "Wohoo! You've got Blackjack!"
//         hasBlackjack = true
// }else {
//         message = "You're out of the game!"
//         isAlive = false
//     }

//     messageEl.textContent = message
// }
// function newCard(){
//         console.log("Drawing a new card from the deck!")

//         let card = 1

//         sum += card

//         startGame()
//     }





let player = {
    name: "Per",
    chips: 200
}

let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")

playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {
    let randomNumber = Math.floor( Math.random()*13 ) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}


function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()        
    }
}

















// let player = {
//     name:"per"
//     chips:200
// }


// let cards = []
// let sum = 0
// let hasBlackjack = false
// let isAlive = false
// let message = ""
// let messageEl = document.getElementById("message-el")
// let sumEl = document.getElementById("sum-el")
// let cardsEl = document.getElementById("cards-el")
// let playerEl = document.getElementById("player-el")

// let player={
//     Name: "per",
//     chips: 145
// }

// let playerEl = document.getElementById("player-el")
// playerEl.textContent = player.name + ":$" + player.chips


//     let firstCard = getRandomCard()
//     let secondCard = getRandomCard()
//     cards = [firstCard, secondCard]
//     sum = firstCard + secondCard
//     let hasBlackjack = false
//     let isAlive = false
//     let message = ""
//     let messageEl = document.getElementById("message-el")
//     let sumEl = document.getElementById("sum-el")
//     let cardsEl = document.getElementById("cards-el")

//     console.log(cards)



// function getRandomCard(){
//     let randomNumber = Math.floor(Math.random()*13) + 1
//     if (randomNumber > 10){
//         return 10
//     }
//     else if(randomNumber === 1){
//         return 11
//     }
//     else{
//         return randomNumber
//     }
        

// }

// function startGame(){
//     isAlive = true
//     let firstCard = getRandomCard()
//     let secondCard = getRandomCard()
//     cards = [firstCard, secondCard]
//     sum = firstCard, secondCard
//     renderGame()
// }

// function renderGame() {
//     cardsEl.textContent = "Cards: "
//     for (let i = 0; i < cards.length; i++) {
//         cardsEl.textContent += cards[i] + " "
//     }

//     sumEl.textContent = "Sum: " + sum
//     if (sum <= 20) {
//         message = "Do you want to draw a new card?"
//     } 
    
//     else if (sum === 21) {
//         message = "You've got Blackjack!"
//         hasBlackJack = true
//     }
    
//     else {
//         message = "You're out of the game!"
//         isAlive = false
//     }

//     messageEl.textContent = message
// }

// function newCard() {
//     if (isAlive === true && hasBlackJack === false) {
//         let card = getRandomCard()
//         sum += card
//         cards.push(card)
//         renderGame()        
//     }
// }