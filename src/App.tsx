import React from 'react';
import './App.css';
import { Input, Response, Rules } from './components';
import { ValueInsertedProvider } from './contexts';

function App() {
  return (
    <div className="App">
      <ValueInsertedProvider>
        <header className="App-header">
          <Rules />
          <Input />
          <Response />
        </header>
      </ValueInsertedProvider>
    </div>
  );
}

export default App;
