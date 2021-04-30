import styled from "styled-components";


export const MenuStyled = styled.nav`
  background-color: #1D3461;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .home {
    background-color: transparent;
    font-size: 24px;
    color: white;
    text-decoration: none;
  }

  .user {
    display: flex;
    flex-direction: row;

    .icon-btn {
      display: flex;
      justify-content: center;
      align-items: center;

      background-color: #6290C8;
      color: black;
      width: 40px;
      height: 40px;

      border-radius: 3px;

      img {
        filter: invert(1);
      }

      :hover {
        filter: brightness(.95);
      }

      :nth-child(2) {
        margin-left: 10px;
      }

    }
  }


  button:hover {
    cursor: pointer;
  }

  @media (min-width: 400px) {
    padding: 10px 60px;
  }

`