// //Create a deck with 20 cards and two players  
// let cards = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
// let player1 = [];
// let player2 = [];

//create map for key issue # to shorthand
//also need one for corresponding icons
var keyDict = {

    1: "Police",
 
    2: "Courts",
 
    3: "Alternatives",
 
    4: "Conditions",
 
    5: "Re-Entry",
    
    6: "Juvenile",

    7: "Race",

    8: "Crime"
 
 };

 var iconDict = {

    1: "gavel.png",
 
    2: "gavel.png",
 
    3: "Alternatives",
 
    4: "Conditions",
 
    5: "Re-Entry",
    
    6: "Juvenile",

    7: "Race",

    8: "Crime"
 
 };
 
function cardObj(phase, title, key1){
    this.phase = phase;
    this.title = title;
    this.key1 = key1;
}

let ACT1 = new cardObj(1, 'Civilian-Led Crisis Response', 1);
console.log(ACT1.title)

let actcards = [ACT1];
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

let player = 2;
function drawCard(cardtype) {
    //creates div called 'card' of class 'placeholder' with onclick function
    const card = document.createElement('div');
    card.classList.add('card')
    card.addEventListener('click', function (event) {
        let destination = document.getElementById('inplay'); //sets destination to inplay container
        destination.appendChild(card); //adds clicked card to inplay
    });
    const para = document.createElement("h2");
    para.classList.add('cardTitle');
    const para2 = document.createElement("P");
    const icon = document.createElement("img");
    icon.classList.add('cardIcon');
    const icon2 = document.createElement("img");
    icon2.classList.add('cardIcon');
    if (cardtype === "act") {
        var title = actcards[0].title;
        var text = keyDict[actcards[0].key1];
        icon.src = iconDict[actcards[0].key1];
        icon2.src = "gavel.png";
    }
    else {
        var title = randomCard(supportcards);
    }
    para.innerHTML = title;
    para2.innerHTML = text;
    card.appendChild(para);
    card.appendChild(para2);
    if (document.getElementById('header1').className == 'activeplayer') {
        hand = document.getElementById('hand1');
    }
    else if (document.getElementById('header2').className == 'activeplayer') {
        hand = document.getElementById('hand2');
    }
    else if (document.getElementById('header3').className == 'activeplayer') {
        hand = document.getElementById('hand3');
    }
    hand.appendChild(card);
}

let num=1;
function changeTurn() {
    if (num == 1) {
        element = document.getElementById('header'+num);
        element.classList.remove('activeplayer');
        num = num + 1;
        element = document.getElementById('header'+num);
        element.classList.add('activeplayer');
    }
    else if (num == 2) {
        element = document.getElementById('header'+num);
        element.classList.remove('activeplayer');
        num = num + 1;
        element = document.getElementById('header'+num);
        element.classList.add('activeplayer');
    }
    else if (num == 3) {
        element = document.getElementById('header'+num);
        element.classList.remove('activeplayer');
        num = num + 1;
        createAlert('Now that everyone has drawn cards, click on an act card that you want to propose');
    }
}

function createAlert(text) {
    alert(text);
}

/* using jquery-csv to convert csv to 2D array
import csv from './jquery.csv.js';
var csvFile = new XMLHttpRequest();
csvFile.open("GET", "legislate.csv", true);
var data = csvFile.csv.toArrays(csv);
console.log(data);
*/