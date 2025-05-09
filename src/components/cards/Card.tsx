import styled from '@emotion/styled'
import { useUnit } from 'effector-react'
import { $App, toggleDescription } from '../../stores/app'

export const Card = () => {
    const card = useUnit($App)

    return (
        <CardRoot>
            <CardTitle onClick={() => toggleDescription(!card.showDescription)}>
                {card.activeCard?.name}
            </CardTitle>
            <CardElementRoot>
                {card.showDescription &&
                    <CardDescription>
                        {card.activeCard?.description}
                    </CardDescription>
                }
            </CardElementRoot>
        </CardRoot>
    )
}

export const CardRoot = styled.div({
    height: '100%',
    display: 'grid',
    gridTemplateRows: '1fr auto',
    gridTemplateColumns: '1fr',
    '@media (max-width: 768px)': {
        gridTemplateRows: '1fr auto',
    }
})

export const CardTitle = styled.h1({
    color: ' #DDA853',
    display: 'flex',
    alignItems: 'center',
    margin: 'auto',
    textAlign: 'center',
    fontFamily: 'Golos',
    fontSize: '2rem',
})

export const CardElementRoot = styled.div({
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
})

export const CardButton = styled.button({
    margin: '15px 0',
    fontSize: '1.2rem',
    fontFamily: 'Golos',
    color: ' rgb(61, 90, 187)',
    backgroundColor: ' rgba(0, 0, 0, 0)',
})

export const CardDescription = styled.div({
    color: ' #183B4E',
    overflowY: 'auto',
    padding: '0 30px',
    fontSize: '1.1rem',
    textAlign: 'justify',
    textAlignLast: 'center',
    maxHeight: '300px',
})
