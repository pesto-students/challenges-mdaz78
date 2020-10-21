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
  return items.some(({ itemName }) => item === itemName);
}

function getAddedItem(item, items) {
  for (let i = 0; i < items.length; i++) {
    const currentItem = items[i];
    if (item === currentItem.itemName) {
      return {
        itemName: currentItem.itemName,
        quantity: currentItem.quantity,
        index: i,
      };
    }
  }

  return null;
}

function App() {
  const [item, setItem] = useState('');
  const [items, setItems] = useState([]);

  const addItemToList = (item, items) => {
    if (isItemAlreadyAdded(item, items)) {
      const addedItem = getAddedItem(item, items);
      const quantity = addedItem.quantity + 1;

      const itemObj = {
        itemName: addedItem.itemName,
        quantity,
      };

      const filteredItems = items.filter(
        ({ itemName }) => itemName !== addedItem.itemName,
      );

      setItems([itemObj, ...filteredItems]);
      setItem('');
    } else {
      const itemObj = {
        itemName: item,
        quantity: 1,
      };

      setItems([itemObj, ...items]);
      setItem('');
    }
  };

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
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              addItemToList(item, items);
            }
          }}
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
        {items.map(({ itemName, quantity }) => (
          <Item item={itemName} quantity={quantity} key={itemName} />
        ))}
      </section>
    </div>
  );
}

export default App;
