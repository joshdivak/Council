// function card(title, text, cost) {
//     this.title = title;
//     this.text = text;
//     this.cost = cost;
// }

// function deck(){
//     this.names = ['Crisis Units','Limit Pre-Trial Detention','Drug Court','Stop Shackling Pregnant Women','Record Expungement','Minimum Age for Prosecution','Resentencing'];
//     this.text = ['Crisis Units are alternative first-responders ...','Pre-trial detention can sometimes stretch on for weeks...','Drug courts divert people who have unlawfully used drugs to sober houses and other resources instead of prison...','Prisons can require women to be shackled during active labor and childbirth...','Create paths to allow some people to have their record expunged after serving their sentence...','Some states do not have a minimum age at which you can be tried for a crime...children as young as 8 can be prosecuted. Create laws to set the miniumum age to 14 or higher.','Pursue resentencing for BIPOC where there is evidence of racial bias in their original arrest or trial.']
//     this.cost = [2, 1, 3, 1, 2, 1, 2]
// 	var cards = [];
    
//         for(var n = 0; n < this.names.length; n++) {
//             cards.push(new card(this.names[n], this.text[n], this.cost[n]));
//         }

//     return cards;
// }
// var myDeck = new deck();
// window.onload = function() {
// 	for(var i=0; i < myDeck.length; i++){
// 		div = document.createElement('div');
// 		div.className = 'card';
// 		div.innerHTML = '<span class="title">' + myDeck[i].title + '<br><br>' + '</span><span class="text">'+ myDeck[i].text + '</span>';
// 		document.body.appendChild(div);
// 	}
// }
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
// window.onload = function() {
//     div = document.createElement('div')
//     div.className = 'test';
//     div.innerHTML = player1[0];
//     document.body.appendChild(div);
//     // document.getElementById('output').innerHTML = player1[0];
// }

// let ply1 = document.querySelector('#player1');
// ply1.innerHTML = player1[0];

deal=1
function dealCard() {
    // document.querySelector('#card1').innerHTML = player1[0];
    card = document.getElementById('card'+deal);
    card.innerHTML = player1[deal-1];
    deal++
}

let num = 1;
function playCard() {
    let destination = document.getElementById('inplay'+num);
    let box = document.getElementById('p'+num);
    num++;
    destination.appendChild(box);
}