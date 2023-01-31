import React from 'react'
import { Typography, Card, CardContent, TextField, Button } from '@mui/material'
import { Box, Stack } from '@mui/system'
import { useState } from 'react'

const Signup = () => {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [formSubmitted, setFormSubmitted] = useState(false)

  function handleFormInput(e){
    if(e.target.id === "username-input"){
      setUsername(e.target.value)
    }else if(e.target.id === "password-input"){
      setPassword(e.target.value)
    }   
}

async function handleSubmit(){

    try{
      //Attempt to signup user with credentials here
      console.log("Fake sign up with username: " + username + " and password: " + password)
    } catch(e) {
      console.error("Error signing up: ", e)
    }

    setUsername("")
    setPassword("")
    setFormSubmitted(true)
  }

  return (
    <div>
        <Box display="flex" justifyContent="center" alignItems="center">
            <Stack spacing={4} sx={{ mt: 3 }}>
                <Typography variant="h4" align="center">Use the form below to sign up for a new Freelance Finder account!</Typography>

            <Card>
            <CardContent>
              <Stack spacing={4} sx={{ mt: 3 }}>
                <TextField required id="username-input" label="Username" variant="filled" onChange={handleFormInput} value={username} />
                <TextField required type="password" id="password-input" label="Password" variant="filled" onChange={handleFormInput} value={password} />
                <Button variant="contained" color="primary" onClick={handleSubmit}>Signup</Button>
              </Stack>
            </CardContent>
            </Card>
            </Stack>
        </Box>
    </div>
  )
}

export default Signup