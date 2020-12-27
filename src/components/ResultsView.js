import React from 'react';
import styles from './ResultsView.module.css';

const ResultsView = ({ results }) => {
  return (
    <div className={styles.Results}>
      {results.map(res => {
        const match = res.results[0].match;
        return (
          <div key={res.label} className={styles.Result}>
            <b>{res.label.split('_').join(' ')}</b>
            <span
              style={{
                color: !match ? 'black' : 'red',
              }}
            >
              {!match ? 'False' : 'True'}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default ResultsView;
