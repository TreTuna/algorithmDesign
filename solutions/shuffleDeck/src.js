const swap = (a, b, array) => {
  const temp = array[a];
  array[a] = array [b];
  array[b] = temp;
  return array;
};

const shuffleDeck = function(deck) {
  for (var i = 0; i < deck.length; i++) {
    var pick = i + Math.floor(Math.random() * (deck.length - i));
    swap(i, pick, deck);
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