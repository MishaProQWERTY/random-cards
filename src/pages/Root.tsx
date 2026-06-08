import { Outlet } from 'react-router'

export const Root = () => {
    return (
        <div className='grid grid-rows-[1fr] min-h-full'>
            <Outlet />
        </div>
    )
}
