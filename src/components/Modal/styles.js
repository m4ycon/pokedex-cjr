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
        border-radius: 20px;
        padding: 20px;

        display: flex;
        flex-direction: column;

        .close {
            background-color: transparent;
            border: none;
            outline: none;
            width: 32px;
            height: 32px;

            position: relative;
            top: 0;
            right: calc(32px - 100%);

            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            font-size: 32px;
        }

        .content {
          display: flex;
          justify-content: center;
          align-items: center;
        }
    }
`

export default ModalContainer;