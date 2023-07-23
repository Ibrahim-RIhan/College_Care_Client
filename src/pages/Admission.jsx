
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
                  to="/application"
                  className="bg-cyan-700 hover:bg-red-400 text-white font-semibold rounded-xl text-lg px-5 py-2 transition-all hover:scale-105"
                >
                  See More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* <TableContainer  component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell
                className="font-bold text-xl"
                variant="body"
                align="center"
              >
                College Name
              </TableCell>
              <TableCell align="center">Rating</TableCell>
              <TableCell align="center">Admission</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {colleges.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center" component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="center" component="th" scope="row">
                  <Rating
                    name="half-rating-read"
                    defaultValue={row.college_rating}
                    precision={0.5}
                    value={row.college_rating}
                    readOnly
                  />
                </TableCell>
                <TableCell align="center" component="th" scope="row">
                  <Link to={Application} onClick={<Application college={row}></Application>} >
                    Get admitted
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer> */}
    </div>
  );
};

export default Admission;
