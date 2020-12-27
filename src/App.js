import React from 'react';
import InputField from './components/InputField';

const App = () => {
  return (
    <div className="container">
      <h1>Toxicity ML Model</h1>
      <p style={{ marginTop: '10px' }}>
        Built using{' '}
        <a href="https://github.com/tensorflow/tfjs-models/tree/master/toxicity">
          Toxicity Model made by Tensorflow
        </a>
      </p>

      <InputField />
    </div>
  );
};

export default App;
