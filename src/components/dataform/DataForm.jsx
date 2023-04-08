import { AccountCircle } from '@mui/icons-material';
import { useState,useEffect } from "react";
import { Avatar, Grid, Paper, collapseClasses } from '@mui/material';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
import {Courses} from "../data/Courses";
import {Gender} from "../data/Gender";



export const DataForm = () => {

    
    const [stuId,setStuId] = useState("");
   const [firstName,setFirstName] = useState("");
   const [lastName,setLastName] = useState("");
   const [email,setStuEmail] = useState("");
   const [address,setStuAddress] = useState("");
   const [gender,setGender] = useState("");
   const [course,setCourse] = useState("");

   const [formDetails,setFormDetails] = useState([]);



    const handleonsubmit =(e) =>{
        e.preventDefault();

        const formData = {
            stuId,
            firstName,
            lastName,
            email,
            address,
            gender,
            course
        }

        console.log(formData);
        setFormDetails([...formDetails,formData])
        // FormDataHandler(formData);

        setStuId("");
        setFirstName("");
        setLastName("");
        setStuEmail("");
        setStuAddress(""); 
        setGender("");
        setCourse(""); 

    }

    //save data in local storage
    useEffect(()=>{
        localStorage.setItem('formDetails',JSON.stringify(formDetails));
    },[formDetails]);


    return (
        <div>
           {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" />  */}

           <Grid>
            <form
            onSubmit={handleonsubmit}
            >
            <Paper elevation={10}
            //    style={PaperStyle}
                className='stu-detail-form'
                >
            <h1>Fill the data to register</h1>
            <div>
                <Avatar></Avatar>
            </div>
                <TextField 
                label="Student Id"
                variant="outlined"
                type="text"
                value={stuId}
                onChange={e => setStuId(e.target.value)}
                required
                />

                <TextField 
                label="Student FirstName"
                variant="outlined"
                type="text"
                value={firstName}
                onChange={e => setFirstName(e.target.value)}
                required
                />
                
                <TextField 
                label="Student LastName"
                variant="outlined"
                type="text"
                value={lastName}
                onChange={e => setLastName(e.target.value)}
                required
                />

                <TextField 
                label="Email"
                variant="outlined"
                type="email"
                value={email}
                onChange={e => setStuEmail(e.target.value)}
                required
                />

                <TextField 
                label="Address"
                variant="outlined"
                type="text"
                value={address}
                onChange={e => setStuAddress(e.target.value)}
                required
                />

       <Select
        labelId="demo-select-small"
        id="demo-select-small"
        className="input-data"
        value={gender}
        label="Gender"
        onChange={e => setGender(e.target.value)}
        required
      >
        <MenuItem
          value="Gender"
        >
          <em>None</em>
        </MenuItem>
        <MenuItem value={Gender.Gender1}>Male</MenuItem>
        <MenuItem value={Gender.Gender2}>Female</MenuItem>
      </Select>


      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        className="input-data"
        value={course}
        label="Course"
        onChange={e => setCourse(e.target.value)}
        required
      >
        <MenuItem 
        value="Course"
        >
          <em>None</em>
        </MenuItem>
        <MenuItem value={Courses.Course1}>CMJD</MenuItem>
        <MenuItem value={Courses.Course2}>GDSE</MenuItem>
        <MenuItem value={Courses.Course3}>DEP</MenuItem>
      </Select>

      <Stack spacing={2} direction="row">
      <Button variant="outlined" color='success' type='submit'>Save</Button>
      <Button variant="outlined" color='error' type='reset'>Reset</Button>
    </Stack>

    {/* <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer> */}

            </Paper>
            </form>
           </Grid>

        </div>
    )
}