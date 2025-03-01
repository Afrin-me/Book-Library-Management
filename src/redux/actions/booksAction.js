import axios from "axios";

export const FETCH_BOOKS_REQUEST = "FETCH_BOOKS_REQUEST";
export const FETCH_BOOKS_SUCCESS = "FETCH_BOOKS_SUCCESS";
export const FETCH_BOOKS_FAILURE = "FETCH_BOOKS_FAILURE";
export const ADD_BOOK_TO_USER_LIST = "ADD_BOOK_TO_USER_LIST";
export const FETCH_MY_BOOKS = "FETCH_MY_BOOKS";
export const UPDATE_BOOK_STATUS = "UPDATE_BOOK_STATUS";
export const UPDATE_BOOK_RATING = "UPDATE_BOOK_RATING";

const FIREBASE_URL = `https://book-library-management-app-default-rtdb.firebaseio.com/books.json`;

export const fetchbooks = ()=>async (dispatch)=>{
    dispatch({ type: FETCH_BOOKS_REQUEST });
  try{
   const response = await axios.get(FIREBASE_URL)
   const data = response.data
   console.log(data)

   const books = data 
   ? Object.entries(data).map(([id, val])=>({id,...val}))
   : [];

   dispatch({ type: FETCH_BOOKS_SUCCESS , payload : books});
  }
  catch(error){
    dispatch({ type: FETCH_BOOKS_FAILURE });
  console.log(error, "error occur in book fetching")
  }
}
 export const postbooks = () =>{
    
 }
