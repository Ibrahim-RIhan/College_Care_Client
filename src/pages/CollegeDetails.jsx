import { Rating } from "@mui/material";
import { Link, useLoaderData } from "react-router-dom";

const CollegeDetails = () => {
  const college = useLoaderData();

  return (
    <div>
      <div
        style={{
          "background-image": `url(${college.college_image})`,
          "background-color": "rgba(0, 0, 0, 0.8)",
        }}
        className="h-[50vh] bg-fixed bg-no-repeat px-4 flex flex-col justify-center items-center bg-cover bg-center bg-blend-multiply  "
      >
        <h1 className="text-white text-center text-5xl font-bold">{college.name}</h1>
        <p className="text-gray-400 text-center  font-semibold my-3 text-lg">
          {college.college_review}
        </p>
        <Rating
          name="half-rating-read"
          defaultValue={college.college_rating}
          precision={0.5}
          value={college.college_rating}
          readOnly
        />
      </div>
      <div className="my-20 container mx-auto">
        <div>
          <h4  className="text-5xl font-bold text-center md:text-start mx-auto container mb-20">
            Events
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center place-items-center">
            {college.events.map((event, index) => (
              <div className="text-center my-3 md:text-start px-2" key={index}>
                <li className="text-2xl font-semibold">{event.name}</li>
                <p className="text-lg text-gray-600">{event.details}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="my-20">
          <h4  className="text-5xl font-bold text-center md:text-start mx-auto container mb-20">
            Research Works: {college.research_works.number}
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-3 justify-center items-center place-items-center">
            {college.research_works.details.map((item, index) => (
              <div key={index} className="card w-96 my-5 bg-success text-white">
                <div className="card-body">
                  <h2 className="card-title">{item.title}</h2>
                  <h5>
                    By :{"   "}
                    {item.faculty}
                  </h5>
                  <p>Date : {item.publication_date}</p>
                  <p>{item.description}</p>
                  <div className="card-actions justify-end">
                    <a
                      href={item.file_link}
                      target="blank"
                      className="btn btn-link"
                    >
                      See more
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="my-20">
          <h4 className="text-5xl font-bold text-center md:text-start mx-auto container mb-20">
            Sports
          </h4>
          <div className="flex justify-evenly items-center  flex-col md:flex-row">
            {college.sports_categories.map((item, index) => (
              <li className="text-xl font-semibold" key={index}>
                {item}
              </li>
            ))}
          </div>
        </div>
        <h4 className="text-5xl font-bold text-center md:text-start mx-auto container mb-20">
          Admission
        </h4>
        <p className="text-2xl text-center md:text-start font-semibold text-green-600">
          Admission Process : {college.admission_process}
        </p>
        <p className="text-xl  text-center md:text-start text-red-500 font-semibold my-5">
          Last Date : {college.admission_dates}
        </p>
    <div className="flex justify-center md:justify-start">
    <Link
          to={`/application/${college._id}`}
          className="bg-cyan-700  hover:bg-red-400 text-white font-semibold rounded-xl text-lg px-10 py-2 transition-all hover:scale-105"
        >
          Application
        </Link>
    </div>
      </div>
    </div>
  );
};

export default CollegeDetails;
