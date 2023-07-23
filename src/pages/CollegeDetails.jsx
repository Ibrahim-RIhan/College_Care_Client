import { useParams } from "react-router-dom";


const CollegeDetails = () => {
    const college  = useParams();
    console.log(college);
    return (
        <div>
            Details
        </div>
    );
};

export default CollegeDetails;