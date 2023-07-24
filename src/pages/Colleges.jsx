import {

  Rating,

} from "@mui/material";
import useColleges from "../hooks/useColleges";

import { Link } from "react-router-dom";

const Colleges = () => {

  const colleges = useColleges();


  return (
    <div className="my-10">
      <h1 className="text-center text-5xl text-blue-950 font-bold py-5">
        You can find all available college here :{" "}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 justify-center items-stretch place-items-center gap-5 my-10 ">
        {colleges.map((college,index) => (
          <div
            key={index}
            className="border mx-auto border-emerald-600 bg-neutral-100 p-5"
          >
            <div className="mx-auto w-full">
              <img
                className="w-full h-60"
                src={college.college_image}
                alt="College Image "
              />
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-blue-950 mt-5 mb-2">
                {college.name}
              </h3>
              <Rating
                name="half-rating-read"
                defaultValue={college.college_rating}
                precision={0.5}
                value={college.college_rating}
                readOnly
              />
              <p className="text-lg  text-gray-600">
                Admission Date :{" "}
                <span className=" font-semibold text-red-500">
                  {college.admission_dates}
                </span>
              </p>
              <p className="text-lg  mt-2 mb-5 font-semibold ">
                Number of research : {college.research_works.number}
              </p>
              <Link to={`/college-details/${college._id}`} className="bg-stone-800 text-white font-semibold w-full text-center text-xl py-2 px-5 rounded-xl my-5 hover:bg-white hover:text-stone-800 transition-all hover:scale-105 border hover:border-black">
                 Details
               </Link>
           
            
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Colleges;
