import React from 'react';

import Item from '../item/item.component';

const ItemList = () => {
    return (
        <div className="item-list section">
            <ul>
                <Item />
                <Item />
                <Item />
            </ul>
        </div>
    )
}

export default ItemList;