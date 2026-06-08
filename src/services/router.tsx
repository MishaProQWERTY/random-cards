import { Index } from "@/pages/Index"
import { Home } from "../pages/Home"
import { Root } from "../pages/Root"
import { createBrowserRouter } from "react-router"

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '*',
                element: <Index />
            },
        ]
    }
], {
    basename: '/random-cards/',
})
