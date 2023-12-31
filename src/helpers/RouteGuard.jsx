import { Navigate } from "react-router-dom"
import { useLoginContext } from "../components/store/LoginContextApi"
export const RouteGuard = ({children}) => {

    const {loggedIn} = useLoginContext();
    if(loggedIn) return children;
    else return <Navigate to="/" replace />
}