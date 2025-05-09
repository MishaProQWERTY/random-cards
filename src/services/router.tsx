import { createBrowserRouter } from "react-router-dom"
import { Index } from "../pages/Index"
import { Home } from "../pages/Home"
import { Root } from "../pages/Root"

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                index: true,
                element: <Index />,
            },
            {
                path: '/random',
                element: <Home />,
            },
        ]
    }
], {
    basename: '/random-cards/',
})
