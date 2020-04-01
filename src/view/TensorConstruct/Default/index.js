import React, { useState } from 'react';
import { Input, FlexboxGrid, Button } from 'rsuite';
import * as tf from '@tensorflow/tfjs';

const Default = () => {
  const [result, setResult] = useState('');

  const handleExecute = () => {
    const txt = [];

    const tensor = tf.tensor([
      [1, 2],
      [3, 4],
    ]);
    const tensorD = tf.tensor([1, 2, 3, 4], [2, 2]);
    const tensorUnique = tf.tensor([1, 2, 3, 4]);

    // tensorUnique.print();
    // tensor.print();
    // tensorD.print();

    txt.push(`Tensor Padrão de 1 dimensão: \n ${tensorUnique.toString()} \n\n`);
    txt.push(`Tensor Padrão de 2 dimensões: \n ${tensor.toString()} \n\n`);
    txt.push(
      `Tensor Padrão com Dimensionalidade: \n ${tensorD.toString()} \n\n`
    );

    setResult(txt.join(''));
  };

  return (
    <FlexboxGrid>
      <FlexboxGrid.Item colspan={24}>
        <h1>Tensor padrão</h1>
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

export default Default;
