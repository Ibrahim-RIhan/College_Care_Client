import useColleges from "../hooks/useColleges"
import { Link } from "react-router-dom";


const FeaturedCollege = () => {
const colleges = useColleges()
const firstThreeColleges = colleges.slice(0, 3);
  return (
    <div className="my-16 container mx-auto ">
      <h1 className="text-center text-blue-950 text-5xl mb-20 font-bold ">
        Featured College
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 justify-center items-stretch place-items-center gap-10 ">
        {firstThreeColleges.map(college => (
             <div className="transition-all hover:scale-105 gap-7 border border-black p-5 rounded-xl " key={college.name} >
             <div>
              <img className="w-auto h-64 rounded-lg"
                 src={college.college_image}
                 alt="College Image"  />
               <div>
                 <h3 className="font-bold text-center text-3xl mb-5 text-blue-950" >
                   {college.name}
                 </h3>
                 <h3  >
                   Last Date of Admission : {college.admission_dates}
                 </h3>
                   <h6>Number of research : {college.research_works.number}</h6>
                 <h5 className="text-center font-semibold text-xl text-blue-950 border-y border-black my-2">Events</h5>
                 
                  {
                    college.events.map((event,index) =>(
                      <li className=" list-disc" key={index}>{event.name}</li>
                      ))
                    }
                
                 <h5 className="text-center font-semibold text-xl text-blue-950 border-y border-black my-3">Sports</h5>
              <div className="grid grid-cols-2 place-content-center">
              {
                  college.sports_categories.map((sport, index)=>(
                    <li className="list-disc" key={index}>{sport}</li>
                  ) )
                 }
              </div>
               </div>
             </div>
             <div className="flex mt-3 justify-center">
               <Link to={`/college-details/${college}`} className="bg-stone-800 text-white font-semibold w-full text-center text-xl py-2 rounded-xl hover:bg-white hover:text-stone-800 transition-all hover:scale-105 border hover:border-black">
                 Details
               </Link>
             </div>
           </div>
        ))}
      </div>
   <div className="flex justify-center items-center my-12">   <Link to="/colleges" className="bg-cyan-700 text-white font-semibold rounded-xl text-lg px-5 py-2 transition-all hover:scale-105">See More</Link></div>
    </div>
  );
};

export default FeaturedCollege;
