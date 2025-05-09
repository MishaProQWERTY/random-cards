import { Global, css } from '@emotion/react'

import Regular from '../../assets/fonts/GolosText-Regular.ttf'
import Medium from '../../assets/fonts/GolosText-Medium.ttf'
import Bold from '../../assets/fonts/GolosText-Bold.ttf'

export const FontsStyles = () => {
    return (
        <Global styles={css`
                @font-face {
                    font-family: 'Golos';
                    src: local('Golos Regular'), url(${Regular});
                    font-weight: 400;
                }

                @font-face {
                    font-family: 'Golos';
                    src: local('Golos Medium'), url(${Medium});
                    font-weight: 500;
                }

                @font-face {
                    font-family: 'Golos';
                    src: local('Golos Bold'), url(${Bold});
                    font-weight: 700;
                }
            `} />
    )
}
