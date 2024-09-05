import { Typography, Container, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Page404 = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="sm" style={{ textAlign: "center", marginTop: "20vh" }}>
      <Typography variant="h1" component="h2" gutterBottom>
        404
      </Typography>
      <Typography variant="h5" gutterBottom>
        Oops! Page not found.
      </Typography>
      <Typography variant="body1" gutterBottom>
        We can't seem to find the page you're looking for.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        style={{ marginTop: "2rem" }}
        onClick={() => navigate("/")}
      >
        Go Back Home
      </Button>
    </Container>
  );
};

export default Page404;
