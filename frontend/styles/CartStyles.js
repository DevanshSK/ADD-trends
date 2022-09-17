import styled from "styled-components";

export const CartWrapper = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  height: 100vh;
  width: 100%;
  background: rgba(0, 0, 0, 0.4);
  z-index: 100;
  display: flex;
  justify-content: flex-end;
  /* display: none; */
`;

export const CartStyle = styled.div`
  /* width: 50%; */
  min-width: 40rem;
  background: #f1f1f1;
  padding: 2rem 5rem;
  overflow-y: scroll;
  position: relative;
  @media screen and (max-width: 800px) {
    min-width: 100%;
  }
  @media screen and (max-width: 580px) {
    padding: 2rem;
  }
`;

export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 2rem;
  border-radius: 1rem;
  overflow: hidden;
  background: white;
  padding: 2rem;
  margin: 2rem 0rem;
  /* max-width: 30rem; */
  img {
    width: 8rem;
    aspect-ratio: 1/1;
    object-fit: cover;
    object-position: center center;
  }
  @media screen and (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
    img {
      width: 100%;
    }
  }
`;

export const CardInfo = styled.div`
  width: 50%;
  div {
    display: flex;
    flex-direction: space-between;
  }
`;

export const EmptyDiv = styled.div`
  z-index: 10;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  h1 {
    font-size: 1.6rem;
    padding: 2rem;
  }

  svg {
    font-size: 7rem;
    color: var(--secondary);
  }
`;

export const Checkout = styled.div`
  button {
    background: var(--primary);
    padding: 1em 1rem;
    width: 100%;
    margin: 1rem 0rem;
    color: white;
    cursor: pointer;
  }
`;
export const CloseCart = styled.div`
  z-index: 99;
  svg {
    font-size: 1.5rem;
  }
  @media screen and (min-width: 800px) {
    display: none;
  }
`;
