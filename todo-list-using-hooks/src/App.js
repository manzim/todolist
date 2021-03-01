import React, { useState } from 'react';

import './App.css'

function App() {

  const [currentItem, setCurrentItem] = useState('');
  const [itemList, updateItemList] = useState('');

  return (
    <div className="App">
      <header className="App-header">
        <div className="Wrapper">
          <div className="Input-wrapper">
            <input
              value={currentItem}
              onChange={(e) => setCurrentItem(e.target.value)}
            />
            <button onClick={() => {
              updateItemList([...itemList, { item: currentItem, key: Date.now() }]);
              { setCurrentItem('') }
            }
            }>
              +
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
