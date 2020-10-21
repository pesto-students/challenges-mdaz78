import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function Item({ item, quantity }) {
  return (
    <div className='card'>
      <section className='item-name'>{item}</section>
      <section className='item-quantity'>{quantity}</section>
    </div>
  );
}

function isItemAlreadyAdded(item, items) {
  items.some(({ itemName, quantity }) => item === itemName);
}

function getAddedItem(item, items) {
  items.forEach(({ item_name, quantity }, index) => {
    if (item === item_name) {
      return {
        item,
        quantity,
        index,
      };
    }
  });
}

function App() {
  const [item, setItem] = useState('');
  const [items, setItems] = useState([]);

  const addItemToList = (item, items) => {
    if (isItemAlreadyAdded(item, items)) {
      const { item: itemName, quantity, index } = getAddedItem(item, items);
      const item_obj = {
        item: itemName,
        quantity: quantity + 1,
      };

      const updatedItems = items
        .splice(0, index)
        .concat(items.splice(index + 1, -1));

      setItems([...updatedItems, item_obj]);
      setItem('');
    } else {
      const item_obj = {
        item,
        quantity: 1,
      };

      setItems([...items, item_obj]);
      setItem('');
    }
  };

  console.log(items);
  return (
    <div className='App'>
      <h1 className='heading'>Grocery List</h1>

      <section className='input-area'>
        <input
          type='text'
          name='item-name'
          id='item-name'
          value={item}
          onChange={(e) => setItem(e.target.value)}
        />
        <button onClick={() => addItemToList(item, items)}>Add Item</button>
      </section>

      <section className='clear-button-section'>
        {items.length > 0 ? (
          <button className='clear-button' onClick={() => setItems([])}>
            Clear List
          </button>
        ) : null}
      </section>

      <section className='item-list'>
        {items.map(({ item, quantity }) => (
          <Item item={item} quantity={quantity} key={item} />
        ))}
      </section>
    </div>
  );
}

export default App;
