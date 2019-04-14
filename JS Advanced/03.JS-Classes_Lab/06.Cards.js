let result = function () {
    let faces = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
    let suits = {
        SPADES: "\u2660",
        HEARTS: "\u2665",
        CLUBS: "\u2663",
        DIAMONDS :"\u2666"
    };

    let card = class Card {
        constructor(face, suit) {
            this.face = face;
            this.suit = suit;
            
        }

        get face(){
            return this._face;
        }

        set face(face){
            if (!faces.includes(face)) {
                throw new Error("The card face is not valid.");
            }

            this._face = face;
        }

        get suit(){
            return this._suit;
        }

        set suit(suit){
            if (Object.values(suits).every(s => s !== suit)) {
                throw new Error("The card suit is not valid.");
            }

            this._suit = suit;
        }
    };

    return {
    "Suits": suits,    
    "Card": card
    }
}();