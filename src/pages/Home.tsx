import styled from '@emotion/styled'
import { ButtonRandom } from '../components/buttons'
import { Card } from '../components/cards'

export const Home = () => {
    return (
        <HomeRoot>
            <HomeContainer>
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

})

const HomeContainer = styled.div({
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: ' #F5EEDC',
})

const CardContainer = styled.div({
    flex: '1 auto',
    minHeight: '50%',
    maxHeight: 'calc(100% - 80px)',
    overflowY: 'auto',
})

const ButtonContainer = styled.div({
    flex: '1 auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    maxHeight: '50%',
    overflowY: 'auto',
})
