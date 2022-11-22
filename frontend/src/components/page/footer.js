import React from 'react';
import styled from 'styled-components';
import { TopNav, TopNavLink } from './header/styles';
import { pageColors, LOGIN_PAGE } from './../../utils/colors';
export const FooterComp = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: ${(props) => props.color};
  color: white;
`;
export const Footer = ({ theme, items }) => {
  return (
    <FooterComp className="footer" color={pageColors[theme].navbar}>
      <TopNav color={pageColors[theme].navbar}>
        {items.map((x, i) => (
          <TopNavLink
            textColor={pageColors[theme].navbarLinkText}
            bgColor={pageColors[theme].navbarLink}
            activeColor={pageColors[theme].navbarLinkActive}
            key={i}
            href={x.link}
          >
            {x.text}
          </TopNavLink>
        ))}
      </TopNav>
    </FooterComp>
  );
};
