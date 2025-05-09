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
    width: '200px',
    padding: '9px 0',
    borderRadius: '17px',
    border: '2px solid #27548A',
    backgroundColor: '#F5EEDC',
    color: '#27548A',
    fontFamily: 'Golos',
    fontWeight: '500',
    fontSize: '1.5rem',
    cursor: 'pointer',
    transition: 'box-shadow 0.2s ease, filter 0.2s ease',
    '&:active': {
        filter: 'brightness(0.8)',
        boxShadow: '0 0 8px rgba(39, 84, 138, 0.6)',
    },
})
