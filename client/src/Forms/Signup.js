import React,{useState} from 'react';
import { Grid, Paper, Avatar, Typography, TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Validations from './SignupValidation';
import { PostStudent } from '../service/api';

const Signup = () => {
    const [data, setData] = useState({
        name: "",
    phone: "",
    email: "",
    password: "",
    secretPhrase: "",
    })
    const [error, setError] = useState('')
  const paperStyle = { padding: 20, width: 300, margin: "0 auto" };
  const headerStyle = { margin: 0 };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
    const ChangeEvent=(e)=>{
//   const{name}=e.target.name;
//   const{value}=e.target.value;
const{name,value}=e.target;
  setData((preValue)=>{
      return{
          ...preValue,
          [name]:value
      }
  }
  )

    }



    const handleSubmit=async(e)=>{
      e.preventDefault();
      const error=Validations(data)
      setError(error)
      if(!error.hasErrors){
         const element=await PostStudent(data);
         console.log(element);
      }
      

    }

    return (
        <Grid>
        <Paper style={paperStyle}>
          <Grid align="center">
            <Avatar style={avatarStyle}></Avatar>
            <h2 style={headerStyle}>Sign Up</h2>
            <Typography variant="caption" gutterBottom>
              Please fill the form to create the account
            </Typography>
          </Grid>
          <form >  
            <TextField
              fullWidth
              label="Name"
              onChange={ChangeEvent}
              name="name"
              value={data.name}
            />
             {error.name && (
            <p style={{ fontSize: "13px", fontWeight: "bold", color: "red" }}>
              {error.name}
            </p>
          )}
           
  
            <TextField
              fullWidth
              label="Email"
              type="email"
              onChange={ChangeEvent}
              name="email"
              value={data.email}
            />
             {error.email && (
            <p style={{ fontSize: "13px", fontWeight: "bold", color: "red" }}>
              {error.email}
            </p>
          )}
           
          
  
            <TextField
              fullWidth
              label="Mobile No"
              onChange={ChangeEvent}
              name="phone"
              value={data.phone}
            />
              {error.phone && (
            <p style={{ fontSize: "13px", fontWeight: "bold", color: "red" }}>
              {error.phone}
            </p>
          )}
          
  
            <TextField
              fullWidth
              label="Password"
              type="password"
              onChange={ChangeEvent}
              name="password"
              value={data.password}
            />
             {error.password && (
            <p style={{ fontSize: "13px", fontWeight: "bold", color: "red" }}>
              {error.password}
            </p>
          )}
            
  
            <TextField
              fullWidth
              label="SecretPhrase"
              type="password"
              onChange={ChangeEvent}
              name="secretPhrase"
              value={data.secretPhrase}
              gutterBottom
            />
            {error.secretPhrase && (
            <p style={{ fontSize: "13px", fontWeight: "bold", color: "red" }}>
              {error.secretPhrase}
            </p>
          )}
         
  
          
            <Grid align="center">
            <br/>
              <Button type="submit" variant="contained" color="primary" onClick={handleSubmit} >
                Signup
              </Button>
            </Grid>
          </form>
        </Paper>
      </Grid>
    )
}

export default Signup
