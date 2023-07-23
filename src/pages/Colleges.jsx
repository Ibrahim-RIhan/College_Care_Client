import {
  Backdrop,
  Box,
  Button,
  Fade,
  Modal,
  Rating,
  Typography,
} from "@mui/material";
import useColleges from "../hooks/useColleges";
import { useState } from "react";

const Colleges = () => {
  // const style = {
  //   position: "absolute",
  //   top: "50%",
  //   left: "50%",
  //   transform: "translate(-50%, -50%)",
  //   width: 400,
  //   bgcolor: "background.paper",
  //   border: "2px solid #000",
  //   boxShadow: 24,
  //   p: 4,
  // };
  // const [open, setOpen] = useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);
  const colleges = useColleges();
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="my-10">
      <h1 className="text-center text-5xl text-blue-950 font-bold border-y py-5 border-b-teal-600">
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
              <p className="text-lg  my-2 font-semibold ">
                Number of research : {college.research_works.number}
              </p>
              <Button onClick={openModal} variant="contained">
                Details
              </Button>
              {showModal && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                  <form
                    
                    className="bg-orange-300 rounded-lg py-10  px-20"
                  >
                    <h2 className="text-5xl font-bold mb-4">{college.name}</h2>
                {console.log(college)}
                    <div className="my-5">
                      <button
                        className="btn btn-sm btn-accent "
                        onClick={closeModal}
                      >
                        Close
                      </button>
                      <input
                        className="btn ml-5 btn-success btn-sm "
                        type="submit"
                        value="Send Feedback"
                      />
                    </div>
                  </form>
                </div>
              )}
            
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Colleges;
