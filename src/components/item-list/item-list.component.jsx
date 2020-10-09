import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Item from '../item/item.component';
import { getItems } from '../../actions/itemAction';

const ItemList = () => {
    const dispatch = useDispatch();
    const items = useSelector(state => state.item.items);

    useEffect(() => {
        dispatch(getItems());
    }, [dispatch]);

    console.log(items);

    return (
        <div className="item-list section">
            <ul>
                {
                    items && // If there are any items, then map them after &&. Otherwise don't.
                    items.map((item) => <Item key={item.id} title={item.title} price={item.price} />)
                }
            </ul>
        </div>
    )
}

export default ItemList;