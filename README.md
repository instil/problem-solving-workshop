# Poker Face

Taking a hand of 5 cards in the format of 3H with the '3' being the rank and 'H' being the suit determine what poker hand the input is.


## Running the app

`nvm use`

`npm install`

`npm start`

## Expected outputs
The list of options are illustrated here (excluding the joker card): https://en.wikipedia.org/wiki/List_of_poker_hands#Hand-ranking_categories

## Suits and Ranks

The 52 card deck is illustrated here: https://en.wikipedia.org/wiki/Standard_52-card_deck#Composition

### Suits
The suits are as follows:
- S: Spades
- H: Hearts
- C: Clubs
- D: Diamonds

### Ranks
The ranks are as follows:
- 2-9: the number representation
- 10: `T`
- J: Jack
- Q: Queen
- K: King
- A: Ace

Ace is a special card that can either be at the start (as rank 1) or at the end (as rank 14)

### Inputs and Outputs

The inputs will come in as a white space separated string such as `3H JS 3C 7C 5D`.
The output will be `HAND_INPUT => HAND_RESULT` i.e. `TH 9S 8H 7C 6C => Straight`.

The list of outputs are:
- `High Card`
- `One pair`
- `Two pair`
- `Three of a kind`
- `Straight`
- `Flush`
- `Full house`
- `Four of a kind`
- `Straight flush`

Only the best outcome is expected to be the output.

### Error handling
If the input is invalid then the output will be `Unknown`. 
Invalid outputs will be:
- Incorrect card hand (only 5 cards in the hand)
- Unknown rank or suits
- Duplicate cards

### Where the write your solution
`src/pages/exercises/pokerface/PokerHand.ts`
Changes should be reflected on the UI
Bonus points for using TDD (write your tests before the implementation) but any tests are good :)

