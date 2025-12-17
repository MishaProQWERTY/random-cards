import styled from '@emotion/styled'
import { ButtonRandom, ModeToggle } from '../components/buttons'
import { Card } from '../components/cards'

export const Home = () => {
    return (
        <HomeRoot>
            <HomeContainer>
                <ModeToggleContainer>
                    <ModeToggle />
                </ModeToggleContainer>

                <CardContainer>
                    <Card />
                </CardContainer>

                <ButtonContainer>
                    <ButtonRandom />
                </ButtonContainer>
            </HomeContainer>
        </HomeRoot>
    )
}

const HomeRoot = styled.main({
    height: '100vh',
    backgroundColor: '#F8FAFC',
})

const HomeContainer = styled.div({
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#F8FAFC',
})

const ModeToggleContainer = styled.div({
    padding: '24px 0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
})

const CardContainer = styled.div({
    flex: 1,
    padding: '0 24px',
    overflowY: 'auto',
})

const ButtonContainer = styled.div({
    padding: '32px 0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
})
