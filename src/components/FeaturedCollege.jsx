import useColleges from "../hooks/useColleges"


const FeaturedCollege = () => {
const colleges = useColleges()
  return (
    <div className="my-16">
      <h1 className="text-center text-cyan-700 text-5xl mb-5 font-bold ">
        Featured College
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 justify-center items-stretch place-items-center gap-5 ">
        {colleges.map(college => {
            <div key={college.name}>
                {college.name}
            </div>
        })}
      </div>
    </div>
  );
};

export default FeaturedCollege;
