import styled, { keyframes } from 'styled-components';

const animation = keyframes`
  from {opacity: .4}
  to {opacity: 1} `;

export const SlideShowContainer = styled.div`
  max-width: 1000px;
  height: 400px;
  position: relative;
  margin: auto;
`;
export const SlideShowSlides = styled.div`
  display: ${(props) => (props.show ? 'block' : 'none')};
  animation-name: ${animation};
  animation-duration: 1.5s;
`;

const slideshowarrow = `cursor: pointer;
position: absolute;
top: 50%;
width: auto;
margin-top: -22px;
padding: 16px;
color: white;
font-weight: bold;
font-size: 18px;
transition: 0.6s ease;
border-radius: 0 3px 3px 0;
user-select: none;`;

export const SlideShowArrowNext = styled.a`
  ${slideshowarrow}
  right: 0;
  border-radius: 3px 0 0 3px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }
`;
export const SlideShowArrowPrev = styled.a`
  ${slideshowarrow}
  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }
`;

export const SlideShowText = styled.div`
  color: #f2f2f2;
  font-size: 50px;
  font-weight: bold;
  padding: 8px 12px;
  position: absolute;
  text-align: center;
  top: 0;
  right:0;
  left:0;
  margin: 0 auto;
`;
export const SlideShowNumberText = styled.div`
  color: #f2f2f2;
  font-size: 12px;
  padding: 8px 12px;
  position: absolute;
  top: 0;
`;
export const SlideShowImage = styled.img.attrs((props) => ({
  src: props.src,
}))`
  width: 100%;
`;
export const SlideShowDot = styled.div`
  cursor: pointer;
  height: 15px;
  width: 15px;
  margin: 0 2px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
  &:hover {
    background-color: #717171;
  }
  &:active {
    background-color: #717171;
  }
`;
