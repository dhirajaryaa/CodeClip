import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom";

function ProtectedRoute({children}) {

    const {isAuth,isLoading} = useSelector(state=>state.auth);

    if(!isLoading && !isAuth){
        return <Navigate to={"/signin"}/>
    }


  return children
}

export default ProtectedRoute