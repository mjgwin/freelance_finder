import React from 'react'
import {useState} from 'react'
import { Box, Stack } from "@mui/system";
import { Card, CardContent, TextField, Typography, Button ,
Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@mui/material";


const Create = () => {

  //setup state stuff
  const [name, setName] = useState("")
  const [postingName, setPostingName] = useState("")
  const [postingDescription, setPostingDescription] = useState("")
  const [formSubmitted, setFormSubmitted] = useState(false)


  function handleFormInput(e){
    if(e.target.id === "name-input"){
      setName(e.target.value)
    }else if(e.target.id === "posting-name-input"){
      setPostingName(e.target.value)
    }else if(e.target.id === "posting-description-input"){
      setPostingDescription(e.target.value)
    }
    
  }

  async function handleSubmit(){
    //figure out how to make create posting api call here
    console.log({
      "userName": name,
      "postingName": postingName,
      "postingDescription": postingDescription 
    })

    try{
      //post doc to db here
      console.log("Document written with id: ", docRef.id)
    } catch(e) {
      console.error("Error adding doc: ", e)
    }

    setName("")
    setPostingName("")
    setPostingDescription("")
    setFormSubmitted(true)
  }

  return (
    <div>
      <Dialog open={formSubmitted}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'>
          <DialogTitle id='alert-dialog-title'>
            {"Thank You For Submitting!"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id='alert-dialog-description'>
              Your posting will now be available to all freelance workers using the Browse function.
              Thank you for using Freelance Finder!
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button color="primary" variant="contained" onClick={()=>setFormSubmitted(false)}>Close</Button>
          </DialogActions>
        

      </Dialog>
      <Box display="flex" justifyContent="center" alignItems="center">
        <Stack spacing={4} sx={{ mt: 3 }}>
          <Typography variant="h3" align="center">
            Create A New Job Posting
          </Typography>

          <Card>
            <CardContent>
              <Stack spacing={4} sx={{ mt: 3 }}>
                <TextField id="name-input" label="Name" variant="filled" onChange={handleFormInput} value={name} />
                <TextField id="posting-name-input" label="Posting Name" variant="filled" onChange={handleFormInput} value={postingName} />
                <TextField id="posting-description-input" label="Posting Description" variant="filled" multiline maxRows={8} minRows={4} onChange={handleFormInput} value={postingDescription} />
                <Button variant="contained" color="primary" onClick={handleSubmit}>Submit</Button>
              </Stack>
            </CardContent>
          </Card>

        </Stack>
      </Box>
    </div>
  )
}

export default Create