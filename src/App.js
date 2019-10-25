import React from 'react';
import logo from './logo.svg';
import './App.css';

import Portfolio from './components/portfolio';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <section className="content">
        <Portfolio 
          url="https://cdn4.iconfinder.com/data/icons/men-avatars-icons-set-1/256/21-128.png"
          alttext="Icon"
          headline="My Portfolio"
          name="John Doe"
          year="2019"
        >
          <div>
            Welcome to my portfolio website.
          </div>
        </Portfolio>
      </section>
      <footer className="App-footer">
        (c) Copyright - Mike Ludemann
      </footer>
    </div>
  );
}

export default App;
