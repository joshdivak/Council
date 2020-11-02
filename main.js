let cards = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
let player1 = [];
let player2 = [];

for (i=0; i<10; i++) {
    rand = Math.floor(Math.random()*19);
    while (player1.includes(cards[rand])) {
        rand = Math.floor(Math.random()*19);
    }
    player1.push(cards[rand]);
}

for(i=0; i<cards.length; i++) {
    if (!player1.includes(cards[i])) {
        player2.push(cards[i]);
    }
}
console.log(player1)
console.log(player2)


deal=1
function dealCard() {
    // document.querySelector('#card1').innerHTML = player1[0];
    card = document.getElementById('card'+deal);
    card.innerHTML = player1[deal-1];
    deal++
}

let num = 1;
function playCard(clickedElement) {
    let destination = document.getElementById('inplay'+num);
    let box=clickedElement
    num++;
    destination.appendChild(box);
}