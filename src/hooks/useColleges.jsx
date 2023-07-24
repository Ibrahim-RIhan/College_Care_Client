import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";


const useColleges = () => {
  const {setLoading} =useContext(AuthContext)
    const [colleges, setColleges] = useState([]);
    useEffect(() => {
      fetch("http://localhost:5000/colleges")
        .then((res) => res.json())
        .then((data) => {
          setColleges(data)
          setLoading(false)
        });
    }, []);
    return colleges
};

export default useColleges;