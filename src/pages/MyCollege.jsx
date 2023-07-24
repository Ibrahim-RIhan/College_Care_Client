import { useContext, useState } from "react";
import useMyCollege from "../hooks/useMyCollege";
import { AuthContext } from "../provider/AuthProvider";
import { Rating } from "@mui/material";
import Swal from "sweetalert2";

const MyCollege = () => {
  const [value, setValue] = useState(null)
  const myColleges = useMyCollege();
  const { user } = useContext(AuthContext);
  const handleReview = (event) => {
    event.preventDefault();
    const form = event.target;
    const reviewItem = {
      review: form.review.value,
      collegeName: form.collegeName.value,
      reviewedBy: user?.displayName,
      rating : parseFloat(form.rating.value),
      image: user?.photoURL
    };

  fetch('https://college-care-server.vercel.app/reviews', {
    method : 'POST',
    headers : {'content-type': 'application/json'},
    body : JSON.stringify(reviewItem)
  })
  .then((res) => res.json())
  .then((data) => {
    if (data.insertedId) {
      Swal.fire(
        "Good job!",
        "Review Successfully Added",
        "success"
      );
      form.reset();

    }
  })
    
  };
  return (
    <div className="container mx-auto my-16">
      <h1 className="text-center text-5xl text-blue-950 font-bold mb-20">
        My applied college
      </h1>
      <div className="grid grid-cols-1 gap-10">
        {myColleges.map((college) => (
          <div
            key={college._id}
            className="card lg:card-side bg-base-100 shadow-xl"
          >
            <figure>
              <img
                className="h-64 rounded"
                src={college.college_image}
                alt="college_image"
              />
            </figure>
            <div className="card-body">
              <h2 className="text-3xl font-bold text-blue-950">{college.collegeName}</h2>
              <p className="text-gray-600 font-semibold">{college.college_review}</p>
              <h4 className="text-red-500 font-semibold">Applied Subject : {college.subject}</h4>
              <form onSubmit={handleReview}>
                <p className="text-lg text-blue-500">Give a rating : </p>
                <Rating
                 name="rating"
                  value={value}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                />
                <input
                  type="hidden"
                  name="collegeName"
                  value={college.collegeName}
                />
                <textarea
                  name="review"
                  placeholder="Give a review"
                  className="textarea textarea-info textarea-bordered textarea-md w-full "
                ></textarea>
                <input
                  className="bg-cyan-700 text-white rounded-lg font-semibold text-lg py-2 transition-all hover:scale-105 hover:bg-red-400 w-full"
                  type="submit"
                  value="Submit"
                />
                <div className="card-actions justify-end"></div>
              </form>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyCollege;
