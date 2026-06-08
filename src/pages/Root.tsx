import { Outlet } from 'react-router'

export const Root = () => (
    <div className="flex flex-col h-screen overflow-hidden">
        <div className="flex-1 overflow-hidden">
            <Outlet />
        </div>
        <footer className="py-2 text-center text-sm text-slate-400 font-golos shrink-0">
            @mikesmth {new Date().getFullYear()}
        </footer>
    </div>
)
