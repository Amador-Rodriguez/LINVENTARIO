import styled from 'styled-components';

export const HeroImage = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('https://fiqa.com.mx/wp-content/uploads/2021/02/16Feb_Blog_Face_FIQA_LOS-SUPERMERCADOS-Y-EL-MERCADO-ELECTRONICO_Portada.png');
  height: 300px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  width: 100%;
`;
export const HeroText = styled.div`
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
`;
export const HeroDescription = styled.p`
  font-size: 25;
  font-family: cursive;
  `;
export const HeroTitle = styled.div`
  font-size: 50;
  font-family: cursive;
`;

export const HeroTextButton = styled.button`
  border: none;
  outline: 0;
  display: inline-block;
  padding: 10px 25px;
  color: black;
  background-color: #ddd;
  text-align: center;
  cursor: pointer;
  &:hover {
    background-color: #555;
    color: white;
  }
`;
