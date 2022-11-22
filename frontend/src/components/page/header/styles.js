import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const TopNav = styled.div`
  background-color: ${(props) => props.color};
  overflow: hidden;
`;
export const TopNavLink = styled.a`
  float: left;
  color: ${(props) => props.textColor};
  text-align: center;
  cursor: pointer;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
  &:hover {
    background-color: ${(props) => props.bgColor};
    color: black;
  }
  &active {
    background-color: ${(props) => props.activeColor};
    color: white;
  }
`;

export const TopNavSearchBar = styled.input.attrs({ type: 'text' })`
  float: right;
  padding: 6px;
  border: none;
  margin-top: 8px;
  margin-right: 55px;
  font-size: 17px;
`;

export const TopNavSearchButton = styled.button`
  float: right;
  padding: 6px 10px;
  margin-top: 8px;
  margin-right: 16px;
  background: #ddd;
  font-size: 17px;
  border: none;
  cursor: pointer;
`;
