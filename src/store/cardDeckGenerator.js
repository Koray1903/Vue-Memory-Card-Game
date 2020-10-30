import {v4 as uuidv4} from "uuid";

const numbersToBeUsed = ["1", "2", "3", "4", "5", "6"];

let cardNumberInPair = 0;

export const cardsDeck = [];

numbersToBeUsed.forEach((number, index) => {
    for (let i = 0; i < 2; i++) {
        cardNumberInPair += 1;

        cardsDeck.push({
            cardNumberInPair: cardNumberInPair,
            pairNumberInDeck: index,
            shownCardNumber: number,
            picked: false,
            matched: false,
            id: uuidv4()
        });
    }
});
