import styled from '@emotion/styled'
import { useUnit } from 'effector-react'
import { $App, toggleMode } from '../../stores/app'

export const ModeToggle = () => {
    const { isSequentialMode } = useUnit($App)

    return (
        <ToggleRoot onClick={() => toggleMode()}>
            <ToggleLabel>
                Режим:{' '}
                <strong>{isSequentialMode ? 'По порядку' : 'Случайный'}</strong>
            </ToggleLabel>
            <ToggleSwitch>
                <ToggleKnob $active={isSequentialMode} />
            </ToggleSwitch>
        </ToggleRoot>
    )
}

const ToggleRoot = styled.div({
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    cursor: 'pointer',
    userSelect: 'none',
    padding: '12px 24px',
    backgroundColor: '#E0E7FF',
    borderRadius: '50px',
    transition: 'all 0.3s',
    '&:hover': {
        backgroundColor: '#C7D2FE',
    },
})

const ToggleLabel = styled.span({
    fontFamily: 'Golos, sans-serif',
    fontSize: '1.3rem',
    color: '#4338CA',
    fontWeight: '500',
})

const ToggleSwitch = styled.div({
    position: 'relative',
    width: '64px',
    height: '32px',
    backgroundColor: '#CBD5E1',
    borderRadius: '32px',
    transition: 'background-color 0.3s',
})

const ToggleKnob = styled.div<{ $active: boolean }>(({ $active }) => ({
    position: 'absolute',
    top: '4px',
    left: $active ? '36px' : '4px',
    width: '24px',
    height: '24px',
    backgroundColor: $active ? '#4338CA' : '#64748B',
    borderRadius: '50%',
    transition: 'all 0.3s ease',
    boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
}))
