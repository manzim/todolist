import React, { useState } from 'react';

import './App.css';
import List from './List';
function App() {

  const [currentItem, setCurrentItem] = useState('');
  const [itemList, updateItemList] = useState('');

  return (
    <div className="App">
      <header className="App-header">
        <div className="Wrapper">
          <div className="Input-wrapper">
            <input
              placeholder="please add your task"
              value={currentItem}
              onChange={(e) => setCurrentItem(e.target.value)}
            />
            {/* {currentItem.length ? {} : undefined} */}
            <button onClick={() => { 
              updateItemList([...itemList, { item: currentItem, key: Date.now() }]);
              { setCurrentItem('') }
            }
            }>
              +
            </button>
          </div>
            <List itemList={itemList} updateItemList={updateItemList} />
        </div>
      </header>
    </div>
  );
}

export default App;
