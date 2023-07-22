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
  const college = {
    name: "Sample College 1",
    admission_dates: "2023-08-15- 2023-08-23",
    admission_process: "Online application and entrance exam",
    events: [
      {
        name: "Freshers' Welcome Party",
        details: "Date: 2023-09-20, Time: 6:00 PM, Venue: Auditorium",
      },
      {
        name: "Tech Fest",
        details: "Date: 2023-11-05 to 2023-11-07, Venue: Campus Grounds",
      },
    ],
    research_works: {
      number: 120,
      details: [
        {
          title: "Advancements in Renewable Energy Sources",
          faculty: "Dr. Sarah Johnson",
          description:
            "This research explores the latest innovations in renewable energy technologies, focusing on solar and wind power integration.",
          publication_date: "2023-03-10",
          file_link: "https://example.com/research1.pdf",
        },
        {
          title: "Understanding Climate Change Patterns",
          faculty: "Prof. Michael Smith",
          description:
            "The study analyzes climate change patterns over the last century and the potential impact on different regions of the world.",
          publication_date: "2023-05-22",
          file_link: "https://example.com/research2.pdf",
        },
        {
          title: "Exploring Artificial Intelligence in Healthcare",
          faculty: "Dr. Emily Williams",
          description:
            "This research investigates the applications of AI in the healthcare sector, such as disease diagnosis and personalized treatment plans.",
          publication_date: "2023-07-15",
          file_link: "https://example.com/research3.pdf",
        },
      ],
    },
    sports_categories: ["Football", "Basketball", "Swimming", "Badminton"],
    college_image:
      "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=886&q=80",
    college_rating: 4.5,
    college_review:
      "Sample College 1 provides an excellent learning environment and has a supportive faculty.",
  };

  return (
    <div className="my-10">
      <h1 className="text-center text-5xl text-blue-950 font-bold border-y py-5 border-b-teal-600">
        You can find all available college here :{" "}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 justify-center items-stretch place-items-center gap-5 my-10 ">
        <div className="border mx-auto border-emerald-600 bg-neutral-100 p-5">
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
        {/* {colleges.map((item) => {
          <div key={item.name}>
            <div>
              <img src={item.college_image} alt="college Image" />
            </div>
            <div>
              <h4>College Name : {item.name}</h4>
              <Rating style={{ maxWidth: 250 }} value={item.college_rating} />
            </div>
          </div>;
        })} */}
      </div>
    </div>
  );
};

export default Colleges;
