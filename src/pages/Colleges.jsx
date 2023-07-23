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
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const colleges = useColleges();
 

  return (
    <div className="my-10">
      <h1 className="text-center text-5xl text-blue-950 font-bold border-y py-5 border-b-teal-600">
        You can find all available college here :{" "}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 justify-center items-stretch place-items-center gap-5 my-10 ">
      {colleges.map((college) => (
          <div key={college.name} className="border mx-auto border-emerald-600 bg-neutral-100 p-5">
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
              <Button onClick={handleOpen} variant="contained">
                Details
              </Button>
              <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                  backdrop: {
                    timeout: 500,
                  },
                }}
              >
                <Fade in={open}>
                  <Box sx={style}>
                    <Typography
                      className="text-center"
                      id="transition-modal-title"
                      variant="h5"
                      component="h2"
                    >
                      {college.name}
                    </Typography>
                    <p className="text-center">{college.college_review}</p>
                    <h5 className="font-bold ">Events</h5>
                    {college.events.map((event) => (
                      <div key={`${event.name}1`}>
                        <h5>{event.name}</h5>
                        <p>{event.details}</p>
                      </div>
                    ))}
                    <h5 className="font-bold">Sports</h5>
                    {college.sports_categories.map((item) => (
                      <ul key={item}>
                        <li>{item}</li>
                      </ul>
                    ))}
                  </Box>
                </Fade>
              </Modal>
            </div>
          </div>
        ))}
        {/* {colleges.map((college) => {
          console.log(college);
           <div  key={college.name} className="border mx-auto border-emerald-600 bg-neutral-100 p-5">
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
             <Button onClick={handleOpen} variant="contained">
               Details
             </Button>
             <Modal
               aria-labelledby="transition-modal-title"
               aria-describedby="transition-modal-description"
               open={open}
               onClose={handleClose}
               closeAfterTransition
               slots={{ backdrop: Backdrop }}
               slotProps={{
                 backdrop: {
                   timeout: 500,
                 },
               }}
             >
               <Fade in={open}>
                 <Box sx={style}>
                   <Typography
                     className="text-center"
                     id="transition-modal-title"
                     variant="h5"
                     component="h2"
                   >
                     {college.name}
                   </Typography>
                   <p className="text-center">{college.college_review}</p>
 
                   <h5 className="font-bold ">Events</h5>
                   {college.events.map((event) => {
                     console.log(event);
                     <div key={`${event.name}1`}>
                       <h5>{event.name}</h5>
                       <p>{event.details}</p>
                     </div>;
                   })}
                   <h5 className="font-bold">Sports</h5>
                   {college.sports_categories.map((item) => {
                     console.log(item);
                     <ul>
                       <li>{item}</li>
                     </ul>;
                   })}
                 </Box>
               </Fade>
             </Modal>
           </div>
         </div>
        })} */}
      </div>
    </div>
  );
};

export default Colleges;
