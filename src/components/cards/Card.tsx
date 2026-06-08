import { $App, toggleDescription } from "@/stores/app"
import { useUnit } from "effector-react"

export const Card = () => {
    const card = useUnit($App)
    const { activeCard, showDescription } = card

    return (
        <div className="flex flex-col h-full gap-3 py-3 sm:gap-5 sm:py-5">
            {!showDescription ? (
                <div className="flex-1 flex items-center justify-center">
                    <h1
                        onClick={() => toggleDescription(!showDescription)}
                        className="m-0 text-center font-golos cursor-pointer select-none 
                                   transition-all duration-300 hover:text-indigo-600 
                                   text-2xl sm:text-3xl leading-relaxed px-3 sm:px-4"
                    >
                        {activeCard?.question}
                    </h1>
                </div>
            ) : (
                <>
                    <h1
                        onClick={() => toggleDescription(!showDescription)}
                        className="m-0 text-center font-golos cursor-pointer select-none 
                                   transition-all duration-300 hover:text-indigo-600 
                                   shrink-0 text-xl sm:text-3xl leading-relaxed px-3 sm:px-4"
                    >
                        {activeCard?.question}
                    </h1>
                    <div className="flex-1 overflow-y-auto px-4 sm:px-8 pb-2 min-h-0">
                        <div className="font-golos text-slate-600 text-base sm:text-lg leading-7 text-justify sm:text-center">
                            {activeCard?.answer}
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}
