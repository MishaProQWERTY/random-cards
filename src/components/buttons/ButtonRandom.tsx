import styled from '@emotion/styled'
import { pickRandomCard, toggleDescription } from '../../stores/app'

export const ButtonRandom = () => {
    return (
        <ButtonRandomRoot onClick={() => {
            toggleDescription(false)
            pickRandomCard()
        }}>
            Играть
        </ButtonRandomRoot>
    )
}

const ButtonRandomRoot = styled.button({
    width: '220px',
    padding: '14px 0',
    borderRadius: '24px',
    border: 'none',
    backgroundColor: '#4338CA',
    color: '#FFFFFF',
    fontFamily: 'Golos, sans-serif',
    fontWeight: '600',
    fontSize: '1.6rem',
    cursor: 'pointer',
    boxShadow: '0 4px 14px rgba(67, 56, 202, 0.3)',
    transition: 'all 0.3s ease',
    '&:hover': {
        backgroundColor: '#3730A3',
        boxShadow: '0 6px 20px rgba(67, 56, 202, 0.4)',
        transform: 'translateY(-2px)',
    },
    '&:active': {
        transform: 'translateY(0)',
        boxShadow: '0 2px 8px rgba(67, 56, 202, 0.3)',
    },
})
