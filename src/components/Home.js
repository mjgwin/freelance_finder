import React from "react";
import { Box, Stack } from "@mui/system";
import { Typography } from "@mui/material";
import ImageCard from "./ImageCard";
import UsingComputerImage from "./assets/stock_computer_user.png";
const Home = () => {
  return (<div>
    <Box display="flex" justifyContent="center" alignItems="center">
      <Stack spacing={4} sx={{mt: 3}}>
        <Typography variant="h3" align="center">
          Welcome to Freelance Finder!
        </Typography>

        <Typography variant="h5" align="center">
          The premier service for finding freelance employment and job postings.
        </Typography>

        <ImageCard title="Start searching for job postings today!" image={UsingComputerImage} image_title="chad" 
        content="Use our Browse and Create features to simplify the process of finding 
        freelance workers to complete projects, or look for job postings and make good money!"/>
      </Stack>
    </Box>



  </div>);
};

export default Home;
