import React from 'react';

import './item-section.styles.scss';

import ItemList from '../item-list/item-list.component';

const ItemSection = () => {
    return (
        <div className="item-section">
            <div className="item-section-header">
                <div className="image-block">
                    <span>Item</span>
                </div>
                <div className="header-block">
                    <span>Title</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div>
                    <span>Total</span>
                </div>
            </div>
            <ItemList />
        </div>
    )
}

export default ItemSection;