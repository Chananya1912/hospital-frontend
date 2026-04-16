import { Button, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
<Typography variant="h5">Hospital System</Typography>
function Dashboard() {
    const navigate = useNavigate();
  const role = localStorage.getItem("role");

  return (
    <Container>
      <Typography variant="h4">Dashboard</Typography>

      {role === "ADMIN" ? (
        <div>
          <Typography>Admin Panel</Typography>
          <Button variant="contained">Manage Patients</Button>
          <Button variant="contained">Manage Doctors</Button>
          <Button variant="contained">Appointments</Button>
        </div>
      ) : (
        <div>
          <Typography>Patient Panel</Typography>
          <Button variant="contained" onClick={() => navigate("/appointment")}>
  Book Appointment
</Button>
        </div>
      )}
      <Button
  variant="outlined"
  color="error"
  onClick={() => {
    localStorage.clear();
    window.location.href = "/";
  }}
>
  Logout
</Button>
    </Container>
  );
}

export default Dashboard;