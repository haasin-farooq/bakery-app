import React, { useReducer, useEffect } from 'react';
import { connect } from 'react-redux';

import { auth, firestore } from '../../firebase/firebaseConfig';

import Item from '../item/item.component';
import itemReducer from '../../reducers/itemReducer';

const ItemList = ({ items }) => {
    // const [items, dispatch] = useReducer(itemReducer);
    console.log(items);

    useEffect(() => {
        firestore.collection('items').get()
        .then(snapshot => {
            console.log(snapshot.data());
        })
        .catch(error => console.log(error));
    }, [items]);

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

const mapStateToProps = (state) => {
    return {
        items: state.item.items
    }
}

export default connect(mapStateToProps)(ItemList);