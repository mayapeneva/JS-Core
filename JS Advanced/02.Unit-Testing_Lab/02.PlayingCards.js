function makeCard(face, suit) {
    faces = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
    suits = {
        "S": "\u2660", 
        "H": "\u2665", 
        "D": "\u2666",
        "C": "\u2663"
    }

    if (!faces.includes(face) || !suits.hasOwnProperty(suit)) {
        throw new Error("Error");
    }

    return {
        face,
        suit: suits[suit],
        toString: function toStr() {
            return this.face + this.suit;
        }
    }
}