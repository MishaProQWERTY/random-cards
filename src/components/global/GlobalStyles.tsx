import { Global, css } from '@emotion/react'

export const GlobalStyles = () => {
    return (
        <Global
            styles={css`
                html {
                    font-family: "IBM Plex Mono", 'Courier New', Courier, monospace;
                    overflow: hidden;
                }
                
                body {
                    min-height: -webkit-fill-available;
                    min-height: 100svh;
                }

                #root {
                    height: 100%;
                    width: 100%;
                    min-height: inherit;
                }

                * {
                    box-sizing: border-box;
                    -webkit-tap-highlight-color: transparent;
                }

                a {
                    text-decoration: none;
                    color: initial;
                }

                span {
                    font-family: 'Golos';
                }
                
                button {
                    border: 0;
                    padding: 0;
                    cursor: pointer;
                }

                *::-webkit-scrollbar {
                    width: 12px;
                }

                *::-webkit-scrollbar-track {
                    background-color: transparent;
                }

                *::-webkit-scrollbar-thumb {
                    border: 4px solid transparent;
                    border-radius: 6px;
                    background-color: rgba(0 0 0 / 0.1);
                    background-clip: content-box;
                    min-height: 60px;
                }
            `}
        />
    )
}
