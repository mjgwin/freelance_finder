import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Route, Routes } from "react-router";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Browse from "./components/Browse";
import Create from "./components/Create";
import Login from "./components/Login";
import Signup from "./components/Signup";

const mainTheme = createTheme({
  palette: {
    background: {
      default: "#ffffff",
    },
    primary: {
      main: "#ecb3ff", //this one matters for actually changing the color
    },
  },
});

function App() {
  return (
    <div>
      <ThemeProvider theme={mainTheme}>
        <CssBaseline />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Browse" element={<Browse />}/>
          <Route path="/Create" element={<Create />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
