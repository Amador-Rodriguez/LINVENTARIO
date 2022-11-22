import styled from 'styled-components';

export const Body = styled.body`
    margin: 0;
    background-color: blue;
    background-size:auto ;
    background-attachment:fixed;
    
`;

export const Button = styled.button`
  display: inline;
  flex-direction: column;
  text-align: center;
  text-decoration: none;
  width: 220px;
  cursor: pointer;
  outline: inherit;
  padding: 10px;
  margin: 20px;
  border-radius: 20px;
  border: none;
  color: white;
  background-color: ${(props) => props.bgColor};
`;

export const Content = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
  text-align: center;
  padding: 2px;
  margin: 2px;
`;

export const Emoji = styled.div`
  position: relative;
  display: inline-block;
  width: 25px;
  height: 25px;
  text-align: center;
  margin: 0 auto;
  background: ${(props) => props.bgColor};
  border-radius: 50px;
`;

export const Title = styled.label`
  width: 50px;
  font-size: 40px;
  margin: 0 auto;
  font-family: Bahnschrift SemiBold;
  background-color: '#2e25d9';
  padding: 10px;
  text-align: center;
  margin: 2px;
  border-radius: 50px;
`;

export const Cont = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
  text-align: center;
  padding: 10px;
  margin: 10px;
  border-radius: 50px;
  background-color: #2e25d9;
`;

/*export const Title = styled.label`
  display: inline-block;
  float: center;
  width: 50px;
  size: 50px;
  margin: 0 auto;
  font-family: Impact;
  background-color: '#ffffff8a';
  padding: 10px;
  text-align: center;
  margin: 2px;
  border-radius: 50px;
`; */
