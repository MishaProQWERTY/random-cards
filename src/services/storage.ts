import data from '../assets/data_cards.json'

export type CardType = {
    name: string
    description: string
}

export const cards: CardType[] = data.cards
