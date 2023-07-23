import { useLoaderData} from "react-router-dom";


const CollegeDetails = () => {
const college = useLoaderData()
console.log(college);
    return (
        <div>
            Details
        </div>
    );
};

export default CollegeDetails;