import React from 'react';
import { FlexboxGrid } from 'rsuite';

const Home = () => {
  return (
    <FlexboxGrid>
      <FlexboxGrid.Item colspan={24}>
        <h1>Inteligência artificial com JavaScript e TensorFlow.js</h1>
        <span>TensorFlow</span>
      </FlexboxGrid.Item>
    </FlexboxGrid>
  );
};

export default Home;
