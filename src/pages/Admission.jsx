import { Rating } from "@mui/material";
import useColleges from "../hooks/useColleges";
import { Link } from "react-router-dom";

const Admission = () => {
  const colleges = useColleges();
  
  return (
    <div className="container mx-auto my-20">
      <h1 className="text-center text-5xl font-bold text-blue-950 mb-20" >Get your admission done !</h1>
      <div className="admission-container grid-cols-1 md:grid-cols-3 ">
        {colleges.map((college, index) => (
          <div
            key={index}
            className="card bg-base-100 shadow-xl image-full"
          >
            <figure>
              <img  src={college.college_image} alt="College Image" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{college.name}</h2>
              <h3>{college.admission_process}</h3>
              <p>Last Date :{college.admission_dates}</p>
              <Rating
                name="half-rating-read"
                defaultValue={college.college_rating}
                precision={0.5}
                value={college.college_rating}
                readOnly
              />
              
              <div className="card-actions justify-end bottom-5 absolute right-5">
                <Link
                 to={`/application/${college._id}`}
                  className="bg-cyan-700 hover:bg-red-400 text-white font-semibold rounded-xl text-lg px-5 py-2 transition-all hover:scale-105"
                >
                 Application
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    
    </div>
  );
};

export default Admission;
