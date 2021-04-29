import styled from 'styled-components'

const containerSize = 150
const ballImgSize = 40

const fadeAnimation = `
  @keyframes fade {
    from {filter: opacity(0);}
    to {filter: opacity(1);}
  }
`

export const PokemonContainer = styled.div`
  background-color: white;
  width: ${containerSize}px;
  height: ${containerSize}px;
  margin: 20px;
  padding: 5px;
  position: relative;

  border-radius: 50%;
  border: 3px solid black;
  border-top: 3px solid red;
  border-right: 3px solid red;

  &.visible {
    z-index: 20;
  }

  :hover {
    cursor: pointer;
  }

  img {
    width: 100%;
    height: 100%;
    transition: transform ease-in-out 200ms;

    :hover {
    transform: scale(1.05);
    }
  }
`


const transformNBallPos = n => {
  const oneDeg = Math.PI / 180
  const circlePosDeg = (45 - (n - 1) * 30) % 360

  return `
    &:nth-of-type(${n}) {
      transform: translate(
        calc(${Math.cos(oneDeg * circlePosDeg)} * ${containerSize / 2 + 5}px - 50%),
        calc(${-Math.sin(oneDeg * circlePosDeg)} * ${containerSize / 2 + 5}px - 50%)
      );
    }
  `
}

export const ElementBall = styled.div`
  position: absolute;

  top: 50%;
  left: 50%;

  width: ${ballImgSize}px;
  height: ${ballImgSize}px;

  img {
    width: 100%;
  }
  
  ${transformNBallPos(1)}
  ${transformNBallPos(2)}
  ${transformNBallPos(3)}
  ${transformNBallPos(4)}

`

export const FavoriteStar = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;

  transform: translate(
    calc(${Math.cos(Math.PI / 180 * 135)} * ${containerSize / 2 + 5}px - 50%),
    calc(${-Math.sin(Math.PI / 180 * 135)} * ${containerSize / 2 + 5}px - 50%)
  );

  width: 40px;
  height: 40px;
  background-color: whitesmoke;

  border-radius: 50%;
  border: 2px solid gold;
  padding: 2px;
  outline: none;
  transition: filter ease-in-out 100ms;

  :hover {
    cursor: pointer;
    filter: brightness(1.05);
  }
  :active {
    filter: brightness(0.95);
  }

  img {
    width: 30px;
    height: 30px;

    /* cor gold feito com filter pro svg */
    filter: invert(71%) sepia(95%) saturate(545%) hue-rotate(358deg) brightness(102%) contrast(107%);
  }

`

export const PokemonsAttributes = styled.div`
  position: absolute;
  top: 85%;
  left: 50%;
  transform: translateX(-50%);

  div {
    display: none;
    background-color: white;
    min-width: 90px;
    padding: 5px 20px;
    margin-bottom: 5px;
    text-align: center;

    border-radius: 5px;
    border: 2px solid black;
  }

  div:first-of-type, /* nome do pokemon */
  &.visible div { /* resto das informações */
    display: block;
    animation: fade linear 300ms;
  }

  ${fadeAnimation}
  
`

export const BlackBG = styled.div`
  background-color: rgba(0, 0, 0, .7);

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;

  animation: fade linear 300ms;
  
  ${fadeAnimation}
`
