import React from 'react';
import './List.css';

function List({ itemList, updateItemList }) {
    // console.log("props ki")
    const deleteFromList = (key) => {
        const newList = itemList.filter((itemObj) => {
            return itemObj.key !== key;
        });
        updateItemList(newList);
    };

    return (
        <div>
            {
                (itemList.length > 0) ?
                    itemList.map((itemObj) => {
                        return (
                            <div key={itemObj.key} className="Item">
                                <p> {itemObj.item} </p>
                                <button onClick={() => deleteFromList(itemObj.key)} > - </button>
                            </div>)
                    }
                    ) : undefined
            }
        </div>
    );
}

export default List;