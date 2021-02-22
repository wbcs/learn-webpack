import React, { useState } from 'react';
import * as ReactDOM from 'react-dom';
import { Counter } from '@/components';
import './index.less';

if (module.hot) {
  console.log(module.hot, '--');
  module.hot.accept();
}

const App: React.FC = () => {
  return <Counter />;
};

ReactDOM.render(<App />, document.querySelector('#root'));
