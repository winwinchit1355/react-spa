import { createContext,useState,useContext, useEffect } from "react";

const LoginContext = createContext();
export const useLoginContext = () => useContext(LoginContext);

function LoginContextProvider(props){
    const [loggedIn,setLoggedIn] = useState(()=>{
        const saveLoggedIn = localStorage.getItem('loggedIn');
        return saveLoggedIn === 'true' || false;
    });
    
    useEffect(()=>{
        localStorage.setItem('loggedIn',loggedIn);
    },[loggedIn]);
    const value = {loggedIn,setLoggedIn};
    return (
        <LoginContext.Provider value={value}>
            {props.children}
        </LoginContext.Provider>
    )
    
}
export default LoginContextProvider;