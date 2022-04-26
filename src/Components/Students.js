import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { StudentContext } from "./StudentContext";

//! Display Students List....Component

const Students = () => {
  const [students, ] = useContext(StudentContext);
  // console.log("Students:",students);
  
  return (
    <div id="studentDetails">
      <div className="flex1">
        <h1>Students Details</h1>
        <h1>Total Students : {students.length}</h1> 
        <button className="addbtn"><NavLink to="/students-desc" style={{textDecoration: "none", color: "black"}}> Add new student</NavLink></button>
      </div>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">

          <TableHead>
                <TableRow >
                <TableCell><strong>Name</strong></TableCell>
                <TableCell align="right"><strong>Age</strong></TableCell>
                <TableCell align="right"><strong>Course</strong></TableCell>
                <TableCell align="right"><strong>Batch</strong></TableCell>
                <TableCell align="right"><strong>Change</strong></TableCell>
                </TableRow>
          </TableHead>

          <TableBody>
            {students.map((student) => (
              <TableRow key={student.id}>
                <TableCell component="th" scope="row">{student.name}</TableCell>
                <TableCell align="right">{student.age}</TableCell>
                <TableCell align="right">{student.course}</TableCell>
                <TableCell align="right">{student.batch}</TableCell>
                <TableCell align="right"><NavLink to={`/students-desc/${student.id}`}>Edit</NavLink></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Students;
