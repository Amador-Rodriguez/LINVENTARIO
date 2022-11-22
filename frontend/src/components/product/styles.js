import styled from 'styled-components';

export const ProductCard = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 300px;
  margin: auto;
  text-align: center;
  font-family: arial;
`;

export const ProductTitle = styled.h1`
  color: green;
  font-size: 32px;
`;
export const ProductPrice = styled.div`
  color: grey;
  font-size: 22px;
`;
export const ProductImage = styled.img`
  width: 100%;
`;
export const ProductButton = styled.div`
  border: none;
  outline: 0;
  padding: 12px;
  color: white;
  background-color: #000;
  text-align: center;
  cursor: pointer;
  width: 100%;
  font-size: 18px;
  &:hover {
    opacity: 0.7;
  }
`;
