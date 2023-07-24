import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { Bars } from  'react-loader-spinner'



// eslint-disable-next-line react/prop-types
const PrivateRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation();
    if (loading) {
        return <div className='flex justify-center items-center' style={{ height: '100vh' }}>
 <Bars
  height="80"
  width="80"
  color="#4fa94d"
  ariaLabel="bars-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
/>
        </div>
    }
    if (user) {
        return children
    }

    return <Navigate state={{ from: location }} to="/login" replace></Navigate>
};

export default PrivateRoute;