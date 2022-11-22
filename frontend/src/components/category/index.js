import React from 'react';
import { Button, Emoji, Title, Content } from './styles';

export const Category = ({
  path = 'https:www.google.com',
  icon = '😒',
  bgColor = '#191970',
  bgColor2 = '#6d6dff',
  name = 'Frutas y verduras',
}) => (
  <div>
    <Button href={path} bgColor={bgColor}>
      <Content>
        <Title>{name}</Title>
        <Emoji bgColor={bgColor2}>{icon}</Emoji>
      </Content>
    </Button>
  </div>
);
