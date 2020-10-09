import firebase, { auth } from '../firebase/firebaseConfig';
import { 
    SIGN_IN_SUCCESSFUL,
    SIGN_IN_ERROR,
    SIGN_OUT_SUCCESSFUL,
    SIGN_OUT_ERROR
} from '../actions/actionTypes';


export const signInWithGoogle = () => async (dispatch) => {
  try{
    var provider = new firebase.auth.GoogleAuthProvider();
    provider.setCustomParameters({ prompt: 'select_account' });
    const { user } = await auth.signInWithPopup(provider);

    console.log(dispatch);

    dispatch({
      type: SIGN_IN_SUCCESSFUL, 
      payload: user
    });
  }
  catch(error) {
    dispatch({
      type: SIGN_IN_ERROR
    });
  } 
}

export const signOut = () => async (dispatch) => {
  try{
    await auth.signOut();
    dispatch({ 
      type: SIGN_OUT_SUCCESSFUL 
    });
  }
  catch(error) {
    dispatch({
      type: SIGN_OUT_ERROR
    });
  } 
}