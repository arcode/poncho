import React from 'react';
import { Stack, Text, Link, FontWeights, IStackTokens, IStackStyles, ITextStyles } from '@fluentui/react';
import './App.css';

const boldStyle: Partial<ITextStyles> = { root: { fontWeight: FontWeights.semibold } };
const stackTokens: IStackTokens = { childrenGap: 15 };
const stackStyles: Partial<IStackStyles> = {
  root: {
    width: '960px',
    margin: '0 auto',
    textAlign: 'center',
    color: '#605e5c',
  },
};

export const App: React.FunctionComponent = () => {
  return (
    <Stack horizontalAlign="center" verticalAlign="center" verticalFill styles={stackStyles} tokens={stackTokens}>
    
      <Text variant="xxLarge" styles={boldStyle}>
        Welcome to my world!
      </Text>
      <Text variant="large">My name is Rami. I'm a full stack developer!</Text>
    </Stack>
  );
};
