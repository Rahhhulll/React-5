import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "./OldComponents/Background.css";
import { useState } from "react";
import { useContext } from "react";
import { StudentContext } from "./StudentContext";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AddStudent = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [course, setCourse] = useState("");
  const [batch, setBatch] = useState("");

  const navigate = useNavigate();

  const [students, setStudents] = useContext(StudentContext);

  const handleSubmit = (e) => {
    if (name ===''|| age==='' || course==='' || batch==='') {
        return toast.warning("Please Fill All the Data");
    }else{
    e.preventDefault();
    setStudents([
      ...students,
      {
        name: name,
        age: age,
        course: course,
        batch: batch,
        id: (students.length + 1).toString(),
      },
    ]);
    // console.log("Add Student Button Clicked");
    // console.log(students);
    navigate("/students");
    return toast.success("Student added Sucessfully",);
  };}

  return (
    <div className="inputfleids">

      <Box className="flex2" component="form" sx={{ "& > :not(style)": { m: 2, width: "40ch" } }} noValidate autoComplete="off" >
        <TextField className="in1" id="outlined-basic" value={name} onChange={(e) => setName(e.target.value)} label="Name" variant="outlined"/>
        <TextField className="in2" id="outlined-basic" value={age} onChange={(e) => setAge(e.target.value)} label="Age" variant="outlined"/>
        <TextField className="in3" id="outlined-basic" value={course} onChange={(e) => setCourse(e.target.value)} label="Course" variant="outlined"/>
        <TextField className="in4" id="outlined-basic" value={batch} onChange={(e) => setBatch(e.target.value)} label="Batch" variant="outlined"/>
    </Box>

      <button className="close"><Link to="/students" style={{ textDecoration: "none", color: "black" }}> Close </Link> </button>
      <button className="update" onClick={handleSubmit}> Submit </button>
    </div>
  );
};

export default AddStudent;
