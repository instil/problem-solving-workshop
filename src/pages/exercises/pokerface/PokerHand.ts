// TODO: Solutions goes here
//       Return a string of the name of the poker hand
//       https://en.wikipedia.org/wiki/List_of_poker_hands

import {Card} from "./Card";
import { orderBy } from "lodash";

export function calculatePokerHand(hand: string) {
	const cards: Card[] = hand
		.split(" ")
		.map(card => {
			return {rank: card[0], suit: card[1]};
		});

	return getNameOfHand(cards);
}

const getNameOfHand = (cards: Card[]) => {
		if (isFiveOfAKind(cards)) {
			return "Five of a Kind";
		} else if (isStraightFlush(cards)) {
			return "Straight Flush";
		} else {
			return "High Card";
		}
}

const isFiveOfAKind =
	([{rank: headRank}, ...tail]: Card[]) =>
		tail.every(card => card.rank === headRank);

const isStraightFlush = (cards: Card[]) => 
	isFlush(cards)
		? {

		}
		: false;
	
const isStraight = (cards: Card[]) => {
	let straight: boolean = false;
	let last: number = 0;
}

const isFourOfAKind = (cards: Card[]) => countUniques(ranks(cards)) === 2;
//TODO differentiate
//Three of a kind + 2 of a kind
const isFullHouse = (cards: Card[]) => countUniques(ranks(cards)) === 2;

const isFlush =
	([{suit: headSuit}, ...tail]: Card[]) => tail
		.every(card => card.suit === headSuit);

const isThreeOfAKind = (cards: Card[]) => countUniques(ranks(cards)) === 3;
//TODO differentiate
//Two of a kind + Two of a kind
const isTwoPair = (cards: Card[]) => countUniques(ranks(cards)) === 3;

//Two of a kind
const isOnePair = (cards: Card[]) => countUniques(ranks(cards)) === 4;

const suits = (cards: Card[]) => cards.map(card => card.suit);

const ranks = (cards: Card[]) => cards.map(card => card.rank);

const countUniques = (elements: string[]) => new Set(elements).size;

/*
const isStraight =
	(cards: Card[]) =>
		cards
			.map(card => card.rank)
			.reduce(
				(() => []),

			) */
