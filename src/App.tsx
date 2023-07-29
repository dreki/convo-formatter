import React from 'react';
import logo from './logo.svg';
import './App.css';
import { List } from 'antd';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <List>
          <List.Item>
            <List.Item.Meta
              title="Cool item title"
              description="Cool item description"
            />
          </List.Item>
        </List>
      </header>
    </div>
  );
}

export default App;
