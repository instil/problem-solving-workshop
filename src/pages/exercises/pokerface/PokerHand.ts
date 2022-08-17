// TODO: Solutions goes here
//       Return a string of the name of the poker hand
//       https://en.wikipedia.org/wiki/List_of_poker_hands
import {groupBy, orderBy} from "lodash";

interface Card {
    value: number,
    suit: "H" | "S" | "C" | "D"
}

export function calculatePokerHand(hand: string) {
    const cards = hand
        .split(" ")
        .map(cardString => cardString.split(""))
        .map(cardAsArray =>
            <Card>{
                value: getCardValueAsNumber(cardAsArray[0]),
                suit: cardAsArray[1]
            });

    const sortedCards = orderBy(cards, "value", "asc");

    const result = kickoffChainOfResponsibility(sortedCards);

    return `Hand of Cards ${hand} equates to a result of: ${result}`;
}

function kickoffChainOfResponsibility(cards: Card[]): string {
    return isRoyalFlush(cards);
}

function isRoyalFlush(cards: Card[]) {
    const isAllRoyal = cards.map(card => card.value).reduce((previousValue, currentValue) => previousValue + currentValue) === 37;
    const isRun = isAStraight(cards);

    return isAllRoyal && isRun ? "Royal Flush" : isStraightFlush(cards);
}

function isStraightFlush(cards: Card[]) {
    return isAFlush(cards) && isAStraight(cards) ? "Straight Flush" : isFourOfAKind(cards);
}

function isFourOfAKind(cards: Card[]): string {
    return containsRepeatedCards(cards, 4) ? "Four of A Kind" : isFullHouse(cards);
}

function isFullHouse(cards: Card[]) {
    return containsRepeatedCards(cards, 3) && containsRepeatedCards(cards, 2) ? "Full House" : isFlush(cards);
}

function isFlush(cards: Card[]) {
    return isAFlush(cards) ? "Flush" : isStraight(cards);
}

function isStraight(cards: Card[]) {
    return isAStraight(cards) ? "Straight" : isThreeOfAKind(cards);
}

function isThreeOfAKind(cards: Card[]) {
    return containsRepeatedCards(cards, 3) ? "Three of a kind" : isTwoPair(cards);
}

function isTwoPair(cards: Card[]) {
    return containsRepeatedCards(cards, 2, 2) ? "Two Pair" : isOnePair(cards);
}

function isOnePair(cards: Card[]) {
    return containsRepeatedCards(cards, 2) ? "One Pair" : "High Card";
}

function isAStraight(cards: Card[]) {
    let consecutive = false;
    for (let i = 0; i < cards.length - 1; i++) {
        consecutive = cards[i].value === cards[i + 1].value - 1;
    }
    return consecutive;
}

function containsRepeatedCards(cards: Card[], count: number, occurrences: number = 1): boolean {
    return Object.entries(
        groupBy(cards, "value"))
        .map(([key, groupedCards]) => groupedCards.length)
        .filter(cardCount => cardCount === count).length === occurrences;
}

function isAFlush(cards: Card[]): boolean {
    return cards.filter(card => card.suit === cards[0].suit).length === 5;
}

function getCardValueAsNumber(value: string): number {
    switch (value) {
        case "2": return 0;
        case "3": return 1;
        case "4": return 2;
        case "5": return 3;
        case "6": return 4;
        case "7": return 5;
        case "8": return 6;
        case "9": return 7;
        case "T": return 8;
        case "J": return 9;
        case "Q": return 10;
        case "K": return 11;
        case "1" || "A": return 12;
        default: return -1;
    }
}
