import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import app from "../../firebase/firebaseConfig";
export const REGISTER_USER = "REGISTER_USER";
export const LOGIN_USER = "LOGIN_USER";
export const LOGOUT_USER = "LOGOUT_USER";
export const SET_USER = "SET_USER";


const auth = getAuth(app);
export const signin = (email, password, navigate) => async (dispatch) => {
  try {
    const userCredentials = await signInWithEmailAndPassword(auth,email,password)
    dispatch({
      type: LOGIN_USER,
      payload: userCredentials.user,
    });
    console.log(userCredentials, "user")
    navigate("/mybookspage")
  } catch (error) {
    console.log("error in signing", error);
  }
};

export const register = (email,password)=> async (dispatch) => {
    try{
        const userCredentials = await createUserWithEmailAndPassword(
            auth,
            email,
            password
        )
     const user = userCredentials.user;
     dispatch({
        type:REGISTER_USER,
        payload:user
     })
   
     console.log(user)
    }
    catch(error){
        console.log("error in registering", error)
    }
}

export const signout = ()=>async (dispatch)=>{
    try{
    await signOut(auth)
    dispatch({ type: LOGOUT_USER });
    }
    catch(error){
        console.log("error in logout", error)
    }
}
