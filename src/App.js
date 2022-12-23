import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Route, Routes } from "react-router";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

const mainTheme = createTheme({
  palette: {
    background: {
      default: "#222222",
    },
    primary: {
      main: "#0971f1", //this one matters for actually changing the color
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
          {/* <Route path="/tutorials" element={<Tutorials />}/>
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} /> */}
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
