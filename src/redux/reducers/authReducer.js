import { LOGIN_USER, REGISTER_USER, LOGOUT_USER } from "../actions/authAction"

const initState ={
    user : JSON.parse(localStorage.getItem("user")) || null,
}

export const authReducer = (state= initState, action) =>{
  switch(action.type){
    case LOGIN_USER:
        case REGISTER_USER:
            localStorage.setItem("user", JSON.stringify(action.payload))
            return {...state, user: action.payload};
     case LOGOUT_USER :
        localStorage.removeItem("user")
        return {...state, user:null}  
    default:
        return state         
  }
}