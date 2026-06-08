import { $App, toggleMode } from "@/stores/app"
import { useUnit } from "effector-react"

export const ModeToggle = () => {
    const { isSequentialMode } = useUnit($App)

    return (
        <div
            onClick={() => toggleMode()}
            className="flex items-center gap-4 cursor-pointer select-none px-6 py-3 bg-indigo-100 rounded-full transition-all duration-300 hover:bg-indigo-200"
        >
            <span className="font-golos text-lg text-indigo-600 font-medium">
                Режим:{' '}
                <strong>{isSequentialMode ? 'По порядку' : 'Случайный'}</strong>
            </span>
            <div className="relative w-16 h-8 bg-slate-300 rounded-full transition-colors duration-300">
                <div
                    className={`absolute top-1 w-6 h-6 rounded-full shadow-md transition-all duration-300 ${isSequentialMode ? 'left-9 bg-indigo-600' : 'left-1 bg-slate-600'
                        }`}
                />
            </div>
        </div>
    )
}
