import React from "react";
import {
  Typography,
  Card,
  CardContent,
  TextField,
  Button,
} from "@mui/material";
import { Box, Stack } from "@mui/system";
import { useState } from "react";

const Signup = ({ currUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  function handleFormInput(e) {
    if (e.target.id === "email-input") {
      setEmail(e.target.value);
    } else if (e.target.id === "password-input") {
      setPassword(e.target.value);
    }
  }

  async function handleSubmit() {
    try {
      //Attempt to signup user with credentials here
      console.log(
        "Sign up with email: " + email + " and password: " + password
      );
    } catch (e) {
      console.error("Error signing up: ", e);
    }

    setEmail("");
    setPassword("");
    setFormSubmitted(true);
  }

  return (
    <div>
      <Box display="flex" justifyContent="center" alignItems="center">
        <Stack spacing={4} sx={{ mt: 3 }}>
          <Typography variant="h4" align="center">
            Use the form below to sign up for a new Freelance Finder account!
          </Typography>
          {currUser === null ? (
            <Card>
              <CardContent>
                <Stack spacing={4} sx={{ mt: 3 }}>
                  <TextField
                    required
                    id="email-input"
                    label="Email"
                    variant="filled"
                    onChange={handleFormInput}
                    value={email}
                  />
                  <TextField
                    required
                    type="password"
                    id="password-input"
                    label="Password"
                    variant="filled"
                    onChange={handleFormInput}
                    value={password}
                  />
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleSubmit}
                  >
                    Signup
                  </Button>
                </Stack>
              </CardContent>
            </Card>
          ) : (
            <Stack spacing={4} sx={{ mt: 3 }} justifyContent="center">
              <Typography sx={{ mt: 3 }} variant="h4" align="center">
                Currently signed in with email: {currUser.email}
              </Typography>
              <Button
                variant="contained"
                color="primary"
                //onClick={() => signout_user()}
              >
                Sign Out
              </Button>
            </Stack>
          )}
        </Stack>
      </Box>
    </div>
  );
};

export default Signup;
