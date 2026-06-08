import { Outlet } from 'react-router'

export const Root = () => {
    return (
        <div className="grid grid-rows-[1fr_auto] min-h-dvh">
            <Outlet />
            <footer className="py-2 text-center text-sm text-slate-400 font-golos">
                @mikesmth {new Date().getFullYear()}
            </footer>
        </div>
    )
}
