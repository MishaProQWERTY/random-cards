import styled from '@emotion/styled'
import { useUnit } from 'effector-react'
import { $App, toggleDescription } from '../../stores/app'

export const Card = () => {
    const card = useUnit($App)

    return (
        <CardRoot>
            <CardTitle onClick={() => toggleDescription(!card.showDescription)}>
                {card.activeCard?.question}
            </CardTitle>
            <CardElementRoot>
                {card.showDescription &&
                    <CardDescription>
                        {card.activeCard?.answer}
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
    gap: '20px',
    padding: '20px 0',
})

export const CardTitle = styled.h1({
    color: '#1E293B',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0',
    textAlign: 'center',
    fontFamily: 'Golos, sans-serif',
    fontSize: '2rem',
    lineHeight: '1.4',
    padding: '0 20px',
    cursor: 'pointer',
    userSelect: 'none',
    transition: 'color 0.2s',
    '&:hover': {
        color: '#4338CA',
    },
})

export const CardElementRoot = styled.div({
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
})

export const CardDescription = styled.div({
    color: '#475569',
    overflowY: 'auto',
    padding: '0 30px',
    fontSize: '1.15rem',
    lineHeight: '1.7',
    textAlign: 'justify',
    textAlignLast: 'center',
    maxHeight: '400px',
    '::-webkit-scrollbar': {
        width: '8px',
    },
    '::-webkit-scrollbar-thumb': {
        backgroundColor: '#CBD5E1',
        borderRadius: '4px',
    },
})
