import { useState } from "react";
import API from "../services/api";
import { TextField, Button, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
function Login() {
    const navigate = useNavigate();
  const [data, setData] = useState({ username: "", password: "" });

  const handleLogin = async () => {
  const res = await API.post("/users/login", data);

  localStorage.setItem("token", res.data.token);
  localStorage.setItem("role", res.data.role);

  const role = res.data.role;   // 👈 YE LINE ADD KARO

  if (role === "ADMIN") {
    alert("Welcome Admin");
  } else {
    alert("Welcome Patient");
  }

  navigate("/dashboard");
};

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Login
      </Typography>

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

      <Button variant="contained" fullWidth onClick={handleLogin}>
        Login
      </Button>
    </Container>
  );
}

export default Login;