import { debounce } from 'lodash';
import React, { useEffect, useState } from 'react';
import styles from './InputField.module.css';

const InputField = ({ inputReady, setSearchQuery }) => {
  const [value, setValue] = useState('');

  const updateQuery = q => setSearchQuery(q);
  useEffect(() => {
    const debounced = debounce(updateQuery, 1000);
    debounced(value);
    return debounced.cancel;
  }, [value, setSearchQuery]);

  return (
    <div>
      <textarea
        className={styles.TextArea}
        placeholder="Type something..."
        autoFocus={true}
        value={value}
        onChange={e => setValue(e.target.value)}
        disabled={!inputReady}
      />
    </div>
  );
};

export default InputField;
