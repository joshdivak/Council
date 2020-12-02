//Create a deck with 20 cards and two players  
let cards = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
let player1 = [];
let player2 = [];

//assign 10 random cards to player 1
for (i=0; i<10; i++) {
    rand = Math.floor(Math.random()*19);
    while (player1.includes(cards[rand])) {
        rand = Math.floor(Math.random()*19);
    }
    player1.push(cards[rand]);
}

//assign remaining 10 cards to player 2
for(i=0; i<cards.length; i++) {
    if (!player1.includes(cards[i])) {
        player2.push(cards[i]);
    }
}

//check that ^^ works correctly
console.log(player1)
console.log(player2)

//deal cards to hand when you click the deck
deal=1
function dealCard() {
    // document.querySelector('#card1').innerHTML = player1[0];
    //create element called card1, then card2, etc ??
    card = document.getElementById('card'+deal);
    //prints the number on the card
    card.innerHTML = player1[deal-1];
    deal++
}

//plays the card you click 
function playCard(clickedElement) {
    let destination = document.getElementById('inplay'); //sets destination to inplay container
    destination.appendChild(clickedElement); //adds clicked card to inplay
}