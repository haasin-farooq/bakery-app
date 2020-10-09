import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import AddItemForm from './add-item-form.component';

import './add-item.styles.scss';

const AddItem = ({ handleSubmit }) => {
    const clientView = useSelector(state => state.view.clientView);

    if(clientView) {
        return <Redirect to='/signin' />
    }

    return (
        <div className="container card-container add-item-container">
            <div className="card">
                <div className="card-content">
                    <span className="card-title">Add Item</span>
                    <AddItemForm />
                </div>
            </div>
        </div>
    )
}

export default AddItem;

