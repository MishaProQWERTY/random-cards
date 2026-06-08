import { $App, toggleDescription } from "@/stores/app"
import { useUnit } from "effector-react"

export const Card = () => {
    const card = useUnit($App)
    const { activeCard, showDescription } = card

    return (
        <div className={`h-full grid gap-5 py-5 ${showDescription ? 'grid-rows-[1fr_auto]' : 'grid-rows-[1fr]'}`}>
            <h1
                onClick={() => toggleDescription(!showDescription)}
                className="flex items-center justify-center m-0 text-center font-golos text-2xl sm:text-3xl leading-relaxed px-4 cursor-pointer select-none transition-colors duration-200 hover:text-indigo-600 text-slate-800"
            >
                {activeCard?.question}
            </h1>
            {showDescription && (
                <div className="overflow-y-auto max-h-96 px-5 sm:px-8 pb-2">
                    <div className="font-golos text-slate-600 text-base sm:text-lg leading-7 text-justify sm:text-center">
                        {activeCard?.answer}
                    </div>
                </div>
            )}
        </div>
    )
}
