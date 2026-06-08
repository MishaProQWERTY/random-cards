import { ButtonRandom, ModeToggle } from "@/components/buttons"
import { Card } from "@/components/cards"

export const Home = () => (
    <main className="h-full flex flex-col bg-slate-50 overflow-hidden">
        <div className="py-4 sm:py-6 flex justify-center shrink-0">
            <ModeToggle />
        </div>

        <div className="flex-1 px-4 sm:px-6 overflow-hidden min-h-0">
            <div className="max-w-3xl mx-auto h-full overflow-y-auto">
                <Card />
            </div>
        </div>

        <div className="py-3 sm:py-4 flex justify-center shrink-0">
            <ButtonRandom />
        </div>
    </main>
)
