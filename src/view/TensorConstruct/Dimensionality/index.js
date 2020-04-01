import React, { useState } from 'react';
import { Input, FlexboxGrid, Button } from 'rsuite';
import * as tf from '@tensorflow/tfjs';

const Dimensionality = () => {
  const [result, setResult] = useState('');

  const handleExecute = () => {
    const txt = [];
    const escalar = tf.scalar(1.5);
    const tensor1d = tf.tensor1d([1, 2, 3]);

    const tensor2d = tf.tensor2d([1, 2, 3, 4], [2, 2]);
    // const tensor2d = tf.tensor2d([
    //   [1, 2],
    //   [3, 4],
    // ]);

    const tensor3d = tf.tensor3d([1, 2, 3, 4], [2, 2, 1]);
    // const tensor3d = tf.tensor3d([
    //   [[1], [2]],
    //   [[3], [4]],
    // ]);

    const tensor4d = tf.tensor4d([1, 2, 3, 4], [1, 2, 2, 1]);
    // const tensor4d = tf.tensor4d([
    //   [
    //     [[1], [2]],
    //     [[3], [4]],
    //   ],
    // ]);

    const tensor5d = tf.tensor5d([1, 2, 3, 4, 5, 6, 7, 8], [1, 2, 2, 2, 1]);
    // const tensor5d = tf.tensor5d([
    //   [
    //     [
    //       [[1], [2]],
    //       [[3], [4]],
    //       [[5], [6]],
    //       [[7], [8]],
    //     ],
    //   ],
    // ]);

    const tensor6d = tf.tensor6d([1, 2, 3, 4, 5, 6, 7, 8], [1, 1, 2, 2, 2, 1]);
    // const tensor6d = tf.tensor6d([
    //   [
    //     [
    //       [
    //         [[1], [2]],
    //         [[3], [4]],
    //         [[5], [6]],
    //         [[7], [8]],
    //       ],
    //     ],
    //   ],
    // ]);

    txt.push(`Tensor Escalar: \n ${escalar.toString()} \n\n`);
    txt.push(`Tensor de 1 dimensão: \n ${tensor1d.toString()} \n\n`);
    txt.push(`Tensor de 2 dimensões: \n ${tensor2d.toString()} \n\n`);
    txt.push(`Tensor de 3 dimensões: \n ${tensor3d.toString()} \n\n`);
    txt.push(`Tensor de 4 dimensões: \n ${tensor4d.toString()} \n\n`);
    txt.push(`Tensor de 5 dimensões: \n ${tensor5d.toString()} \n\n`);
    txt.push(`Tensor de 6 dimensões: \n ${tensor6d.toString()} \n\n`);

    setResult(txt.join(''));
  };

  return (
    <FlexboxGrid>
      <FlexboxGrid.Item colspan={24}>
        <h1>Dimensionalidade dos tensores</h1>
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

export default Dimensionality;
