import React, { useEffect, useState } from 'react';
import { useToxicityClassifier } from '../hooks/useToxicityClassifier';
import styles from './InputField.module.css';

const InputField = () => {
  const [value, setValue] = useState('');
  const model = useToxicityClassifier();
  const [results, setResults] = useState(null);

  useEffect(() => {
    if (!model) return;
    const classifyText = async () => {
      const res = await model.classify([value]);
      setResults(res);
    };
    classifyText();
  }, [value, model]);

  return (
    <div>
      <textarea
        className={styles.TextArea}
        placeholder="Type something..."
        autoFocus={true}
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-evenly',
          width: '100%',
          textAlign: 'center',
        }}
      >
        {results
          ? results.map(res => {
              const match = res.results[0].match;
              return (
                <div
                  key={res.label}
                  style={{ width: '100%', display: 'block' }}
                >
                  <b>{res.label}</b>
                  <br />
                  <span
                    style={{
                      color: !match ? 'black' : 'red',
                    }}
                  >
                    {!match ? 'False' : 'True'}
                  </span>
                  <br />
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default InputField;
