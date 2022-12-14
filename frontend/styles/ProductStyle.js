import styled from "styled-components";

export const ProductStyle = styled.div`
  background-color: white;
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  cursor: pointer;

  img {
    width: 100%;
    cursor: pointer;
    aspect-ratio: 1/1;
    object-fit: cover;
    object-position: center center;
  }
  h2 {
    padding: 0.5rem 0rem;
  }
`;
