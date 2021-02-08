import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import styles from './index.scss';

const Index = () => {
  return (
    <div className={styles.test}>
      <App />
    </div>
  );
};

ReactDOM.render(<Index />, document.getElementById('root'));
