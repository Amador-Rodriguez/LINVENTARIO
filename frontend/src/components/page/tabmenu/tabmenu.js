import React, { Fragment } from 'react';
import { Tab, TabButton, TabContent } from './styles';

export const Tabmenu = ({ tabs, content }) => {
  return (
    <Fragment>
      <Tab>
        {tabs.map((x,i) => (
          <TabButton key={i}>{x}</TabButton>
        ))}
      </Tab>
      {content.map((x, i) => (
        <TabContent key={i}>{x}</TabContent>
      ))}
    </Fragment>
  );
};
