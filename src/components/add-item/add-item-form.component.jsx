import React from 'react';
import { useDispatch } from 'react-redux';
import { Field, reduxForm, reset } from 'redux-form';

import { addItem } from '../../actions/itemAction';

const AddItemForm = (props) => {
    const { handleSubmit } = props;
    const dispatch = useDispatch();
    const handleAdd = () => {
        dispatch(addItem());
        dispatch(reset('addItemForm'));
    }
    return (
        <div className="add-item-form">
            <form onSubmit={handleSubmit(handleAdd)}>
                <div className="input-field">
                    <label htmlFor="title">Title</label>
                    <Field name="title" type="text" component="input"/>
                </div>
                <div className="input-field">
                    <label htmlFor="price">Price</label>
                    <Field name="price" type="number" component="input"/>
                </div>
                <div className="input-field">
                    <label htmlFor="imageUrl">Image URL</label>
                    <Field name="imageUrl" type="text" component="input"/>
                </div>
                <div className="input-field">
                    <button type="submit" className="waves-effect red darken-2 btn">Add</button>
                </div>
            </form>
        </div>
    )
}

export default reduxForm({ 
    form: 'addItemForm',
 })(AddItemForm);

