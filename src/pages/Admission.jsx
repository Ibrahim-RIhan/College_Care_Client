import {
  Button,
  Paper,
  Rating,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import useColleges from "../hooks/useColleges";
import { Link } from "react-router-dom";
import Application from "./Application";

const Admission = () => {
  const colleges = useColleges();
  const handleAdmit = (college) => {};
  return (
    <div className="container mx-auto my-20">
      <TableContainer  component={Paper}>
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
      </TableContainer>
    </div>
  );
};

export default Admission;
