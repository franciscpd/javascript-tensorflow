import React, { useState } from 'react';
import { Input, FlexboxGrid, Button } from 'rsuite';

const Home = () => {
  const [result, setResult] = useState('');

  return (
    <FlexboxGrid style={{ maxWidth: 1366, margin: '25px auto', padding: 25 }}>
      <FlexboxGrid.Item colspan={24}>
        <h1>Inteligência artificial com JavaScript e TensorFlow.js</h1>
        <span>TensorFlow</span>
      </FlexboxGrid.Item>
      <FlexboxGrid.Item colspan={24} style={{ marginTop: 10 }}>
        <Input componentClass="textarea" value={result} rows={10} />
      </FlexboxGrid.Item>
      <FlexboxGrid.Item colspan={5} style={{ marginTop: 10 }}>
        <Button appearance="primary">Executar</Button>
      </FlexboxGrid.Item>
    </FlexboxGrid>
  );
};

export default Home;
