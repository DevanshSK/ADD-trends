import styled from "styled-components";

export const DetailsStyled = styled.div`
  display: flex;
  justify-content: center;
  gap: 5rem;
  margin-top: 5rem;
  img {
    width: 40%;
    aspect-ratio: 1/1;
    object-fit: cover;
    object-position: center center;
  }
`;

export const ProductInfo = styled.div`
  width: 40%;
  button {
    font-size: 1rem;
    font-weight: medium;
    padding: 0.5rem 1rem;
    cursor: pointer;
  }
`;
export const Price = styled.h2`
  margin: 0.5rem 0rem;
`;
export const Title = styled.h2`
  margin-bottom: 0.5rem;
`;

export const Quantity = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 0rem;
  /* gap: 0.5rem; */

  button {
    background: transparent;
    border: none;
    display: flex;
    font-size: 1.15rem;
    padding: 0rem 1rem;
  }
  p {
    width: 1rem;
    text-align: center;
  }
  span {
    color: var(--secondary);
  }
  svg {
    color: #494949;
  }
`;

export const Buy = styled.button`
  width: 100%;
  background: var(--primary);
  color: white;
  font-weight: 500;
`;
