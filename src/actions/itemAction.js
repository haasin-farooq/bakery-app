import firebase, { firestore, auth } from '../firebase/firebaseConfig';
import { 
    ADD_ITEM,
    GET_ITEMS
} from '../actions/actionTypes';

export const addItem = () => async (dispatch, getState) => {
  try {
    const item = await getState().form.addItemForm.values;

    console.log(item);

    await firestore.collection('items').add({
      ...item
    });

    dispatch({
      type: ADD_ITEM
    });
  } 
  catch(error) {
    console.log(error);
  } 
}

export const getItems = (item) => async (dispatch) => {
  try {
    const data = await firestore.collection("items").get();
    const items = data.docs.map(doc => {
      return (
        {
          id: doc.id,
          ...doc.data()
        }
      )
    });

    console.log(items);

    dispatch({
      type: GET_ITEMS,
      payload: items
    });
  } 
  catch(error) {
    console.log(error);
  } 
}