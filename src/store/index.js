import Vue from "vue";
import Vuex from "vuex";
import _ from "lodash";
import {cardsDeck} from "./cardDeckGenerator";

Vue.use(Vuex);

export const store = new Vuex.Store({

    state: {
        shuffledCardDeck: _.shuffle(cardsDeck),
        numberOfTurns: 0,
        timeElapsed: 0,
        pickedCards: [],
        matchedCards: [],
        ticker: null
    },

    mutations: {

        startTimer: (state) => {
            state.ticker = setInterval(() => {
                state.timeElapsed += 1000;
            }, 1000);
        },

        revealCard: (state, payload) => {
            let pickedCards = state.shuffledCardDeck.filter((card) => card.picked);

            if (pickedCards.length < 2) {
                state.shuffledCardDeck.filter((card) => card.id === payload).map(card => card.picked = true);
            }
        },

        handlePairs: (state) => {
            let pickedCards = state.shuffledCardDeck.filter((card) => card.picked);
            let matchedCards = state.shuffledCardDeck.filter((card) => card.matched);

            if (pickedCards.length === 2) {
                if (pickedCards[0].shownCardNumber === pickedCards[1].shownCardNumber) {
                    pickedCards.map(card => {
                        card.matched = true;
                        card.picked = false;
                    });
                } else {
                    pickedCards.map(card => card.picked = false);
                }
                state.numberOfTurns += 1;
            }

            if (matchedCards.length === state.shuffledCardDeck.length) {
                clearInterval(state.ticker);
            }
        },

        resetDeck: (state) => {
            state.shuffledCardDeck.map((card) => {
                card.picked = false;
                card.matched = false;
            });
            state.shuffledCardDeck = _.shuffle(state.shuffledCardDeck);
            state.numberOfTurns = 0;
        },

        resetTimer: (state) => {
            state.timeElapsed = 0;
            clearInterval(state.ticker);
        },
    },

    actions: {
        handlePairs: (context) => {
            context.commit("handlePairs");
        },
        revealCard: (context, payload) => {
            context.commit("revealCard", payload);
        },
        startTimer: (context) => {
            context.commit("startTimer");
        },
        resetGame: (context) => {
            context.commit("resetDeck");
            context.commit("resetTimer");
            context.commit("startTimer");
        },
    },

    getters: {
        shuffledCardDeck: state => {
            return state.shuffledCardDeck;
        },
        timeElapsed: state => {
            return state.timeElapsed;
        },
        numberOfTurns: state => {
            return state.numberOfTurns;
        }
    }
});
