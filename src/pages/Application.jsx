import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import useColleges from "../hooks/useColleges";

const Application = () => {
  const { id } = useParams();
  const colleges = useColleges();
  const selectedCollege = colleges.find((item) => item._id === id);
  const navigate = useNavigate();
  const handleApplication = (event) => {
    event.preventDefault();
    const form = event.target;
    const application = {
      collegeName: selectedCollege.name,
      college_image: selectedCollege.college_image,
      college_rating: selectedCollege.college_rating,
      college_review: selectedCollege.college_review,
      name: form.name.value,
      email: form.email.value,
      address: form.address.value,
      subject: form.subject.value,
      phone: form.phone_number.value,
      birthDate: form.birthDate.value,
      photo: form.photo.value,
    };
    fetch("http://localhost:5000/my-college", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(application),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire(
            "Good job!",
            "Application successfully submitted",
            "success"
          );
          navigate("/admission");
        }
      });
  };
  return (
    <div className="my-10">
      <div className="flex flex-col justify-center items-center h-[80vh] ">
        <form
          onSubmit={handleApplication}
          className="border rounded border-gray-600 p-7"
        >
          <h1 className="text-center font-bold text-3xl mb-5">
            Make your application !
          </h1>
          <div className="flex flex-col md:flex-row  gap-5">
            {/* Name */}
            <div>
              <label
                className="text-lg font-semibold text-cyan-700"
                htmlFor="Application Form"
              >
                Your Name
              </label>
              <input
                className="border w-full rounded py-2 px-2 border-gray-600 transition-all block hover:scale-105  focus:outline-none placeholder:px-2 placeholder:text-gray-500 mt-2  mb-2"
                type="text"
                name="name"
              />
            </div>
            {/* Email */}
            <div>
              <label
                className="text-lg font-semibold text-cyan-700"
                htmlFor="Application Form"
              >
                Your Email
              </label>
              <input
                className="border w-full rounded py-2 px-2 border-gray-600 transition-all block hover:scale-105  focus:outline-none placeholder:px-2 placeholder:text-gray-500 mb-2 mt-2"
                type="email"
                name="email"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-5">
            {/* Phone Number  */}
            <div>
              <label
                className="text-lg font-semibold text-cyan-700"
                htmlFor="Application Form"
              >
                Your Phone Number
              </label>
              <input
                className="border w-full rounded py-2 px-2 border-gray-600 transition-all block hover:scale-105  focus:outline-none placeholder:px-2 placeholder:text-gray-500 mb-2 mt-2"
                type="text"
                name="phone_number"
              />
            </div>
            {/* Subject  */}
            <div>
              <label
                className="text-lg font-semibold text-cyan-700"
                htmlFor="Application Form"
              >
                Your Subject
              </label>
              <input
                className="border w-full rounded py-2 px-2 border-gray-600 transition-all block hover:scale-105  focus:outline-none placeholder:px-2 placeholder:text-gray-500 mb-2 mt-2"
                type="text"
                name="subject"
              />
            </div>
          </div>
          {/* Address */}
          <div>
            <label
              className="text-lg font-semibold text-cyan-700"
              htmlFor="Application Form"
            >
              Your Address
            </label>
            <input
              className="border w-full rounded py-2  border-gray-600 transition-all block hover:scale-105  focus:outline-none placeholder:px-2 placeholder:text-gray-500 mb-2 mt-2"
              type="text"
              name="address"
            />
          </div>
          {/* Date of Birth  */}
          <div>
            <label
              className="text-lg font-semibold text-cyan-700"
              htmlFor="Application Form"
            >
              Date of Birth
            </label>
            <input
              className="border w-full rounded py-2 border-gray-600 transition-all block hover:scale-105  focus:outline-none placeholder:px-5 px-4 placeholder:text-gray-500 mb-3 mt-2"
              type="date"
              name="birthDate"
            />
          </div>
          {/* File Photo  */}
          <div>
            <label
              className="text-lg mb-2 font-semibold text-cyan-700"
              htmlFor="Application Form"
            >
              Photo
            </label>
            <input
              type="file"
              className="file-input w-full file-input-bordered border-b border-gray-600 transition-all block hover:scale-105 focus:outline-none placeholder:px-2 placeholder:text-gray-500 mb-5"
              name="photo"
            />
          </div>
          <input
            className="bg-cyan-700 w-full hover:bg-red-400 text-white font-semibold rounded-xl text-lg px-5 py-2 transition-all hover:scale-105"
            type="submit"
            value="Submit"
          />
        </form>
      </div>
    </div>
  );
};

export default Application;
