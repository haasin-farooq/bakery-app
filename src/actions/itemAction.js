import firebase, { firestore, auth } from '../firebase/firebaseConfig';
import { 
    ADD_ITEM,
    GET_ITEMS
} from '../actions/actionTypes';

export const addItem = (item) => async (dispatch) => {
  try {

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