import { pickRandomCard, toggleDescription } from "@/stores/app"

export const ButtonRandom = () => (
    <button
        onClick={() => {
            toggleDescription(false)
            pickRandomCard()
        }}
        className="w-56 sm:w-60 py-3.5 rounded-3xl bg-indigo-600 text-white font-golos font-semibold text-2xl shadow-lg shadow-indigo-500/30 transition-all duration-300 hover:bg-indigo-700 hover:shadow-xl hover:shadow-indigo-500/40 hover:-translate-y-0.5 active:translate-y-0 active:shadow-md"
    >
        Играть
    </button>
)
