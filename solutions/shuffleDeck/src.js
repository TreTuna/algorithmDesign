const swap = (a, b, array) => {
  const temp = array[a];
  array[a] = array [b];
  array[b] = temp;
  return array;
};

const shuffleDeck = function(deck) {
  // we shuffle into the front of the array
  // i is the first index of the un-shuffled portion
  for (var i = 0; i < deck.length; i++) {
    // select a random card from the un-shuffled portion
    var pick = i + Math.floor(Math.random() * (deck.length - i));
    // swap that card with the first un-shuffled card
    swap(i, pick, deck);
    // since the pick is selected randomly each time, the swap is not biasing
  }
  return deck;
};


// var orderedDeck = function() {
//   var suits = [ '♥', '♣', '♠', '♦' ];
//   var values = [ 'A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K' ];
//   var deck = [];
//
//   suits.forEach(function(suit) {
//     values.forEach(function(value) {
//       deck.push(value + suit);
//     });
//   });
//
//   return deck;
// };