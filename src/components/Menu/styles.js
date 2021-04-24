import styled from "styled-components";


export const MenuStyled = styled.nav`
  background-color: blue;
  padding: 15px 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .home, .perfil-btn {
    background-color: transparent;
    font-size: 24px;
    color: white;
    text-decoration: none;
  }

  .perfil-btn {
    font-size: 16px;
    background-color: lightblue;
    color: black;
    padding: 5px 10px;
    border-radius: 3px;

    :hover {
      filter: brightness(.95);
    }

    :nth-child(2) {
      margin-left: 10px;
    }

  }

  button:hover {
    cursor: pointer;
  }


`