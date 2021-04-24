import styled from 'styled-components'

export const ModalContainer = styled.div`

    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    background-color: rgba(0, 0, 0, 0.801);
    display: flex;
    justify-content: center;
    align-items: center;
    
    .container {
        background-color: white;
        color: black;
        width: 25%;
        min-width: 350px;
        height: 60%;
        border-radius: 20px;

        .close {
            background-color: transparent;
            border: none;
            outline: none;
            width: 32px;
            height: 32px;
            right: calc(-100% + 64px);
            top: 16px;
            display: flex;
            position: relative;
            align-items: center;
            cursor: pointer;
            font-size: 32px;

          /* &:before, &:after {
                content: ' ';
                position: absolute;
                width: 2.5px;
                height: 24px;
                background-color: black;
            } */
        }
    }
`

export default ModalContainer;