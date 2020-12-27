import React, { useEffect, useState } from 'react';
import InputField from './components/InputField';
import ResultsView from './components/ResultsView';
import { useToxicityClassifier } from './hooks/useToxicityClassifier';

const App = () => {
  const model = useToxicityClassifier();
  const [results, setResults] = useState(null);
  const [inputReady, setInputReady] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (!model) return;
    setInputReady(true);
    model.classify(searchQuery).then(setResults);
  }, [model, searchQuery]);

  return (
    <div className="container">
      <h1>Toxicity ML Model</h1>
      <p style={{ marginTop: '10px' }}>
        Built using{' '}
        <a href="https://github.com/tensorflow/tfjs-models/tree/master/toxicity">
          Toxicity Model made by Tensorflow
        </a>
      </p>

      <InputField
        setSearchQuery={setSearchQuery}
        searchQuery={searchQuery}
        inputReady={inputReady}
      />
      {results ? <ResultsView results={results} /> : null}
    </div>
  );
};

export default App;
