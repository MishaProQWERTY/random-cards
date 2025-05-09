import { createEvent, createStore, sample } from 'effector'
import { cards as initialCards, CardType } from '../services/storage'

export const pickRandomCard = createEvent()
export const randomCardSelected = createEvent<CardType>()
export const toggleDescription = createEvent<boolean>()

export type State = {
    cards: CardType[]
    activeCard: CardType | null
    showDescription: boolean
    usage: Record<string, number>
}

const initialState: State = {
    cards: initialCards,
    activeCard: null,
    showDescription: false,
    usage: {},
}

export const $App = createStore<State>(initialState)
    .on(randomCardSelected, (state, card) => ({
        ...state,
        activeCard: card,
        usage: {
            ...state.usage,
            [card.name]: (state.usage[card.name] || 0) + 1,
        },
    }))
    .on(toggleDescription, (state, show) => ({
        ...state,
        showDescription: show,
    }))

sample({
    source: $App.map((state) => state.cards),
    clock: pickRandomCard,
    fn: (cards) => {
        const index = Math.floor(Math.random() * cards.length)
        return cards[index]
    },
    target: randomCardSelected,
})
