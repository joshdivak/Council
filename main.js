// //Create a deck with 20 cards and two players  
// let cards = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
// let player1 = [];
// let player2 = [];

let actcards = ['ACT1','ACT2','ACT3','ACT4','ACT5','ACT6'];
let supportcards = ['SUPPORT1','SUPPORT2','SUPPORT3','SUPPORT4','SUPPORT5','SUPPORT6'];
let cardsdealt = [];
let player1 = [];
let player2 = [];

// //deal act or support card
// var deal = 1;
// //generates random act card and updates your hand
// function dealAct() {
//     card = document.getElementById('card'+deal);
//     console.log(card);
//     rand = Math.floor(Math.random()*6);
//     //ensures no duplicates
//     while (cardsplayed.includes(actcards[rand])) {
//         rand = Math.floor(Math.random()*6);
//     }
//     cardsplayed.push(actcards[rand]);
//     card.innerHTML = cardsplayed[deal-1];
//     deal++;
// }
// //generates random support card and updates your hand
// function dealSupport() {
//     card = document.getElementById('card'+deal);
//     console.log(card);
//     rand = Math.floor(Math.random()*6);
//     //ensures no duplicates
//     while (cardsplayed.includes(supportcards[rand])) {
//         rand = Math.floor(Math.random()*6);
//     }
//     cardsplayed.push(supportcards[rand]);
//     card.innerHTML = cardsplayed[deal-1];
//     deal++;
// }

// //plays the card you click 
// function playCard(clickedElement) {
//     let destination = document.getElementById('inplay'); //sets destination to inplay container
//     destination.appendChild(clickedElement); //adds clicked card to inplay
// }

function randomCard(cardtype) {
    rand = Math.floor(Math.random()*6); //replace 6 with actual number of cards per deck
    //ensures no duplicates
    while (cardsdealt.includes(cardtype[rand])) {
        rand = Math.floor(Math.random()*6);
    }
    cardsdealt.push(cardtype[rand]);
    return cardtype[rand];
}

function drawCard(cardtype) {
    //creates div called 'card' of class 'placeholder' with onclick function
    const card = document.createElement('div');
    card.classList.add('card')
    card.addEventListener('click', function (event) {
        let destination = document.getElementById('inplay'); //sets destination to inplay container
        destination.appendChild(card); //adds clicked card to inplay
    });
    const para = document.createElement("P");
    if (cardtype === "act") {
        var text = randomCard(actcards);
    }
    else {
        var text = randomCard(supportcards);
    }
    para.innerHTML = text;
    card.appendChild(para);
    hand.appendChild(card);
}

