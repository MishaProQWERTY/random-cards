import { createEvent, createStore, sample } from 'effector'
import { cards as initialCards, CardType } from '../services/storage'

export const pickRandomCard = createEvent()
export const pickNextSequentialCard = createEvent()
export const randomCardSelected = createEvent<CardType>()
export const toggleDescription = createEvent<boolean>()
export const toggleMode = createEvent()

export type State = {
    cards: CardType[]
    activeCard: CardType | null
    showDescription: boolean
    usage: Record<string, number>
    isSequentialMode: boolean
    currentSequentialIndex: number
}

const initialState: State = {
    cards: initialCards,
    activeCard: null,
    showDescription: false,
    usage: {},
    isSequentialMode: false,
    currentSequentialIndex: 0,
}

export const $App = createStore<State>(initialState)
    .on(randomCardSelected, (state, card) => ({
        ...state,
        activeCard: card,
        currentSequentialIndex: state.isSequentialMode
            ? (state.cards.findIndex(c => c.question === card.question) + 1) % state.cards.length
            : state.currentSequentialIndex,
        usage: {
            ...state.usage,
            [card.question]: (state.usage[card.question] || 0) + 1,
        },
    }))
    .on(toggleDescription, (state, show) => ({
        ...state,
        showDescription: show ?? !state.showDescription,
    }))
    .on(toggleMode, (state) => ({
        ...state,
        isSequentialMode: !state.isSequentialMode,
    }))


sample({
    clock: pickRandomCard,
    source: $App,
    filter: (state) => !state.isSequentialMode,
    fn: (state) => {
        const index = Math.floor(Math.random() * state.cards.length)
        return state.cards[index]
    },
    target: randomCardSelected,
})

sample({
    clock: pickRandomCard,
    source: $App,
    filter: (state) => state.isSequentialMode,
    fn: (state) => {
        const nextIndex = state.currentSequentialIndex % state.cards.length
        return state.cards[nextIndex]
    },
    target: randomCardSelected,
})

sample({
    clock: pickRandomCard,
    source: $App,
    filter: (state) => state.isSequentialMode,
    target: pickNextSequentialCard,
})
