import { ButtonRandom, ModeToggle } from "@/components/buttons"
import { Card } from "@/components/cards"

export const Home = () => (
    <main className="min-h-screen flex flex-col bg-slate-50">
        <div className="py-6 flex justify-center">
            <ModeToggle />
        </div>

        <div className="flex-1 px-4 sm:px-6 overflow-y-auto">
            <div className="max-w-3xl mx-auto h-full">
                <Card />
            </div>
        </div>

        <div className="py-8 flex justify-center">
            <ButtonRandom />
        </div>
    </main>
)
