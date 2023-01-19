import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Box } from "@mui/system";
import {Link} from 'react-router-dom'
import React from "react";

const Navbar = () => {
    const pages = ["Home", "Create", "Browse"];

  return(
    <div>
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static" color="primary">
                <Toolbar>
                    <Typography noWrap component="div" sx={{ mr: 2, display: { xs: "none", md: "flex" } }}>
                            {/* <img src={Chad} style={{ width: 60, height: 40 }} alt="CHAD" /> */}
                            Freelance Finder!
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            {pages.map((page) => (
                                <Button
                                    key={page}
                                    component={Link}
                                    to={page === "Home" ? "/" : `/${page}`}
                                    sx={{ my: 2, color: 'black', display: 'block', marginX: 2}}
                                >
                                    {page}
                                </Button>
                            ))}
                    </Box>

                </Toolbar>
            </AppBar>
        </Box>
    </div>
  )
};

export default Navbar;
