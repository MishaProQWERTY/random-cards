import { Outlet } from 'react-router'

export const Root = () => (
    <div className="flex flex-col h-dvh">
        <Outlet />
        <footer className="py-2 text-center text-sm text-slate-400 font-golos shrink-0">
            @mikesmth {new Date().getFullYear()}
        </footer>
    </div>
)
