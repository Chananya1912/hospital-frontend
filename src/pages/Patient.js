import { useState } from "react";
import API from "../services/api";
import { TextField, Button, Container, Typography } from "@mui/material";

function Patient() {
  const [data, setData] = useState({ name: "", age: "", disease: "" });

  const addPatient = async () => {
    await API.post("/patients", data);
    alert("Patient Added");
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4">Add Patient</Typography>

      <TextField
        fullWidth
        label="Name"
        margin="normal"
        onChange={(e) => setData({ ...data, name: e.target.value })}
      />

      <TextField
        fullWidth
        label="Age"
        margin="normal"
        onChange={(e) => setData({ ...data, age: e.target.value })}
      />

      <TextField
        fullWidth
        label="Disease"
        margin="normal"
        onChange={(e) => setData({ ...data, disease: e.target.value })}
      />

      <Button variant="contained" fullWidth onClick={addPatient}>
        Add Patient
      </Button>
    </Container>
  );
}

export default Patient;