import styled from "@emotion/styled"
import { Outlet } from "react-router-dom"
import { FontsStyles, GlobalStyles } from "../components"

export const Root = () => {
    return (
        <>
            <FontsStyles />
            <GlobalStyles />
            <RootRoot>
                <Outlet />
            </RootRoot>
        </>
    )
}

const RootRoot = styled.div({
    display: 'grid',
    gridTemplateRows: '1fr',
    minHeight: 'inherit',
})
