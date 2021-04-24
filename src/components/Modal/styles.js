import styled from 'styled-components'

export const ModalContainer = styled.div`

    background-color: rgba(0, 0, 0, .7);


    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 10;

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
            right: calc(36px - 100%);
            top: 16px;
            display: flex;
            position: relative;
            align-items: center;
            cursor: pointer;
            font-size: 32px;
        }
    }
`

export default ModalContainer;