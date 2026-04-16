import { useState } from "react";
import API from "../services/api";
import { TextField, Button, Container, Typography } from "@mui/material";

function Register() {
  const [data, setData] = useState({ username: "", password: "", role: "PATIENT" });

  const handleRegister = async () => {
    await API.post("/users/register", data);
    alert("Registered!");
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4">Register</Typography>

      <TextField
        fullWidth
        label="Username"
        margin="normal"
        onChange={(e) => setData({ ...data, username: e.target.value })}
      />

      <TextField
        fullWidth
        label="Password"
        type="password"
        margin="normal"
        onChange={(e) => setData({ ...data, password: e.target.value })}
      />

      <Button variant="contained" fullWidth onClick={handleRegister}>
        Register
      </Button>
    </Container>
  );
}

export default Register;