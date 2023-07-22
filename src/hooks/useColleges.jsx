import { useEffect, useState } from "react";


const useColleges = () => {
    const [colleges, setColleges] = useState([]);
    useEffect(() => {
      fetch("/data.json")
        .then((res) => res.json())
        .then((data) => setColleges(data));
    }, []);
    return colleges
};

export default useColleges;