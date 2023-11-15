import './App.css';

import React from 'react';
import PersonList from './PersonList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React App with Axios</h1>
      </header>
      <main>
        <PersonList />
      </main>
    </div>
  );
}

export default App;

