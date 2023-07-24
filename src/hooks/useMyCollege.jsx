import  { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";

const useMyCollege = () => {
  const { user } = useContext(AuthContext);
  const email = user?.email;
  const [myCollege, SetMyCollege] = useState([]);
  useEffect(() => {
    fetch(`https://college-care-server.vercel.app/my-college/${email}`)
      .then((response) => response.json())
      .then((data) => {
        SetMyCollege(data);
      });
  }, [email]);
  return myCollege;
};

export default useMyCollege;
