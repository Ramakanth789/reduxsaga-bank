import { createSelector, createSlice } from "@reduxjs/toolkit"
import { RootState } from "../../app/store";

export interface AuthState {
    loggedIn:boolean;
    userDetails:any
}
const initialState:AuthState = {
    loggedIn:false,
    userDetails:null
}
const authSlice = createSlice({
    name:"auth", initialState, 
    reducers:{
        setLoggedIn: (state, action) =>{
           state.loggedIn= action.payload     
        },
        setUserDetails:(state, action) =>{
            state.userDetails=action.payload
        }
    }
});
//When you modify the data use this
export const {setLoggedIn, setUserDetails } = authSlice.actions;

//When you want to read data use this
export const selectAuth = (state:RootState) => state.auth;
export const selectLoggedIn = createSelector(selectAuth,(auth) => auth.loggedIn )

export default authSlice;