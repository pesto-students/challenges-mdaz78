import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function getKey(key) {
  if (!isControlKey(key)) {
    return key;
  } else {
    return key.replace('<', '').replace('>', '');
  }
}

function isControlKey(key) {
  if (key.includes('<')) {
    return true;
  }

  return false;
}

function useKeyPress(key) {
  const [isKeyPressed, setKeyPressed] = useState(false);

  useEffect(() => {
    window.addEventListener('keyup', ({ key: keyPressed }) => {
      const cleanedKey = getKey(key);
      if (cleanedKey === keyPressed.toLowerCase()) {
        setKeyPressed(true);
      } else {
        setKeyPressed(false);
      }
    });
  });

  return isKeyPressed;
}

function App() {
  const hKeyPressed = useKeyPress('<enter>');
  return hKeyPressed ? <h1>Pressed</h1> : <h2>Not pressed</h2>;
}

export default App;
