import React from 'react';
import ReactDOM from 'react-dom';
import Main from './parts/Main';

const Index = () => {
  return <div>
    <Main/>
  </div>;
};

ReactDOM.render(<Index />, document.getElementById("index"));
