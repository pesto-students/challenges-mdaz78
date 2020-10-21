import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function Item() {
  return (
    <div className='card'>
      <section className='item-name'>Potato</section>
      <section className='item-quantity'>1</section>
    </div>
  );
}

function App() {
  const [item, setItem] = useState('');
  const [items, setItems] = useState([]);

  return (
    <div className='App'>
      <h1 className='heading'>Grocery List</h1>

      <section className='input-area'>
        <input type='text' name='item-name' id='item-name' />
        <button>Add Item</button>
      </section>

      <section className='clear-button-section'>
        <button className='clear-button'>Clear List</button>
      </section>

      <section className='item-list'>
        <Item />
      </section>
    </div>
  );
}

export default App;
