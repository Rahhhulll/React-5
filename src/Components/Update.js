import { useState, useContext, useEffect } from "react";
import { StudentContext } from "./StudentContext";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./OldComponents/Background.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { toast } from "react-toastify";
function Update() {

  const { id } = useParams();
  const navigate = useNavigate();

  const [students, setStudents] = useContext(StudentContext);

  const [stu, setStu] = useState({ name: "", age: "", batch: "", course: "" });

  const handelInput = (e) => {
    setStu({ ...stu, [e.target.name]: e.target.value });
    // console.log(e.target.value);
  };

  //! Importing the Existing Student Data From Context...

  useEffect(() => {
    students.forEach((student) => {
      if (student.id === id) {
        console.log("Id Matched :", student.id, "=", id);

        setStu({
          name: student.name,
          age: student.age,
          batch: student.batch,
          course: student.course,
        });
      }
    });
  }, [id, students]);

  const handleSubmit = () => {
    // console.log("Update Clicked");
    if (stu.name ===''|| stu.age==='' || stu.course==='' || stu.batch==='') {
    return toast.warning("Please Fill All the Data");
      
    }else{
    setStudents((student)=>
    students.map((value, index)=>
      value.id===id ? {
              id: id,
              name: stu.name,
              age: stu.age,
              course: stu.course,
              batch: stu.batch,
            }
          : value
    ))
    // console.log("Condition is Satisfied");
    navigate("/students");
    // console.log(students);
    return toast.success("Student Details Updated Sucessfully");
    }
  };

  return (
    <div className="inputfleids">

      <Box className="flex2" component="form" sx={{ "& > :not(style)": { m: 2, width: "40ch" } }} noValidate autoComplete="off" >
        <TextField className="in1" id="outlined-basic" name="name" value={stu.name} onChange={handelInput} label="Name" variant="outlined"/>
        <TextField className="in2" id="outlined-basic" name="age" value={stu.age} onChange={handelInput} label="Age" variant="outlined" />
        <TextField className="in3" id="outlined-basic" name="course" value={stu.course} onChange={handelInput} label="Course" variant="outlined"/>
        <TextField  className="in4"  id="outlined-basic" name="batch" value={stu.batch} onChange={handelInput} label="Batch" variant="outlined"/>
      </Box>

      <button className="close"> <Link to="/students" style={{ textDecoration: "none", color: "black" }}> Close </Link> </button>
      <button className="update" onClick={handleSubmit}> Update </button>
    </div>
  );
}

export default Update;
