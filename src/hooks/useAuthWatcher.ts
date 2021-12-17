import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectLoggedIn } from "../features/auth/auth";

const useAuthWatcher = () => {
    const loggedIn = useSelector(selectLoggedIn);
    const navigate = useNavigate();
    useEffect(() => {
        console.log(loggedIn);
        if (loggedIn) {
            navigate("../dashboard")
        } else {
            navigate("../authentication")
        }

    }, [navigate,loggedIn])
}

export  default useAuthWatcher;