import { useState } from "react";
import API from "../services/api";
import { TextField, Button, Container, Typography } from "@mui/material";

function Appointment() {
  const [data, setData] = useState({
    patientName: "",
    doctorName: "",
    date: ""
  });

  const bookAppointment = async () => {
    await API.post("/appointments", data);
    alert("Appointment booked");
  };

  return (
    <Container>
      <Typography variant="h4">Book Appointment</Typography>

      <TextField
        fullWidth
        label="Patient Name"
        margin="normal"
        onChange={(e) => setData({ ...data, patientName: e.target.value })}
      />

      <TextField
        fullWidth
        label="Doctor Name"
        margin="normal"
        onChange={(e) => setData({ ...data, doctorName: e.target.value })}
      />

      <TextField
        fullWidth
        label="Date"
        margin="normal"
        onChange={(e) => setData({ ...data, date: e.target.value })}
      />

      <Button variant="contained" onClick={bookAppointment}>
        Book
      </Button>
    </Container>
  );
}

export default Appointment;