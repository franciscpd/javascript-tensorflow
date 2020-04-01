import React, { useState } from 'react';
import { Input, FlexboxGrid, Button } from 'rsuite';
import * as tf from '@tensorflow/tfjs';

const Typing = () => {
  const [result, setResult] = useState('');

  const handleExecute = () => {
    const txt = [];

    const int32 = tf.tensor2d([1, 2, 3, 4], [2, 2], 'int32');
    const float32 = tf.tensor2d([1.5, 2.7, 3.1, 4.8], [2, 2], 'float32');
    const bool = tf.tensor2d([true, false, false, true], [2, 2], 'bool');
    const string = tf.tensor2d(['a', 'b', 'c', 'd'], [2, 2], 'string');

    txt.push(`Tensor de tipo int32: \n ${int32.toString()} \n\n`);
    txt.push(`Tensor de tipo float32: \n ${float32.toString()} \n\n`);
    txt.push(`Tensor de tipo bool: \n ${bool.toString()} \n\n`);
    txt.push(`Tensor de tipo string: \n ${string.toString()} \n\n`);

    setResult(txt.join(''));
  };

  return (
    <FlexboxGrid>
      <FlexboxGrid.Item colspan={24}>
        <h1>Tipagem explícita</h1>
        <span>TensorFlow.js - Para visualizar clique em executar</span>
      </FlexboxGrid.Item>
      <FlexboxGrid.Item colspan={24} style={{ marginTop: 10 }}>
        <Input componentClass="textarea" value={result} rows={10} />
      </FlexboxGrid.Item>
      <FlexboxGrid.Item colspan={5} style={{ marginTop: 10 }}>
        <Button appearance="primary" onClick={handleExecute}>
          Executar
        </Button>
      </FlexboxGrid.Item>
    </FlexboxGrid>
  );
};

export default Typing;
