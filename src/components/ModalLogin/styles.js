import styled from "styled-components";


export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  width: 100%;
  height: 200px;

  .username-container, button[type="submit"] {
    width: 70%;
  }

  input[type="text"] {
    width: calc(100% - 42px);
    padding: 10px 20px;

    border: 1px solid black;
    border-radius: 5px;

    margin-top: 5px;
  }

  button[type="submit"] {
    border-radius: 5px;
    padding: 10px 20px;
    transition: filter ease 300ms, transform ease 100ms;
    background-color: lightblue;

    :hover {
      cursor: pointer;
      filter: brightness(.95);
    }

    :active {
      transform: scale(.99);
    }
  }

`