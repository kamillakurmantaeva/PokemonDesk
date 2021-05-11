import React from 'react';
import cn from 'classnames';

import './custom.css';
import s from './App.css';

const App = () => {
  return <div className={cn(s.header, 'color')}>This is App Component!</div>;
};

export default App;
