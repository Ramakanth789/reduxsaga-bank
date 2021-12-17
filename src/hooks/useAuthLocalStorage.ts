import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setLoggedIn } from "../features/auth/auth";

const useAuthLocalStorage=()=>{
    const dispatch= useDispatch();
    useEffect(()=>{
      const loggedInFromLocalStorage = (localStorage.getItem("loggedIn"));
      dispatch(setLoggedIn(loggedInFromLocalStorage==="true"?true:false)) 
    },[dispatch])
}

export default useAuthLocalStorage;