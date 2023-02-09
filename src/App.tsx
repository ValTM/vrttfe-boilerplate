import React, { useState } from 'react';
import Content from './components/layout/Content';
import Header from './components/layout/Header';
import './App.css';

function App() {
  const [darkTheme, setDarkTheme] = useState(true);

  return (
    <>
      <Header darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
      <Content darkTheme={darkTheme} />
      <footer className="bg-transparent flex justify-center absolute bottom-0 w-screen overflow-hidden">
        © Copyright {new Date().getFullYear()}
      </footer>
    </>
  );
}

export default App;
