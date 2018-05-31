import React from 'react';
import ReactDOM from 'react-dom';
import Grid from './Grid/Grid.jsx'

const App = () => {
  return <div>Here is a grid:<Grid /></div>;
};

ReactDOM.render(<App />, document.getElementById('root'));