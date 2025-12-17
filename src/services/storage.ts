import data from '../assets/data_cards.json'

export type CardType = {
    question: string
    answer: string
}

export const cards: CardType[] = data
