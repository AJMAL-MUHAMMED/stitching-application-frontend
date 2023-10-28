import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import CircularProgress from "@mui/material/CircularProgress";
import { ToastContainer, toast } from "react-toastify";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logo.png";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { adminLogin } from "../services/admin";
import { loginSchema } from "../schemas/schema";
const { makeStyles } = require("@mui/styles");

const useStyles = makeStyles((theme) => ({
  main: {
    height: "100vh",
    width: "100%",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridTemplateAreas: `
    'leftPart rightPart'
  `,
  },
  leftPart: {
    gridArea: "leftPart",
    background: "#191919",
  },
  rightPart: {
    gridArea: "rightPart",
  },
  leftImage: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  rightElem: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  error_msg: {
    color: "red",
    fontSize: "1rem",
    margin: 0,
    fontFamily: "poppins",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    pb: "2rem",
  },
}));
const customTheme = createTheme({
  palette: {
    primary: {
      main: "#FFFFFF",
    },
  },
});
function Login() {
  const classes = useStyles();
  const [isLogin, setIsLogin] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      mobile: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: async (values, action) => {
      setIsLogin(true);
      const data = await adminLogin(values);
      if (data.status === "success") {
        dispatch({ type: "LOGIN", payload: data });
        localStorage.setItem("admin", JSON.stringify(data));
        navigate("/");
        action.resetForm();
      } else {
        setIsLogin(false);
        toast.error(data.message);
      }
    },
  });
  return (
    <ThemeProvider theme={customTheme}>
      <>
        <ToastContainer />
        <Box className={classes.main}>
          <Box className={classes.leftPart}>
            <Box className={classes.leftImage}>
              <img
                src={logo}
                alt=""
                style={{ height: "200px", width: "500px" }}
              />
            </Box>
          </Box>
          <Box className={classes.rightPart}>
            <Box className={classes.rightElem}>
              <Box>
                <Box sx={{ pb: "2rem" }}>
                  <Typography
                    sx={{
                      fontSize: "2rem",
                      fontWeight: "bold",
                      color: "#FFFFFF",
                    }}
                  >
                    LOGIN
                  </Typography>
                </Box>
                <Box component="form" onSubmit={formik.handleSubmit} noValidate>
                  <Box sx={{ pb: "1rem", width: "30vw" }}>
                    <Box
                      sx={{
                        border: "1px solid #EEEEEE",
                        width: "100%",
                        height: "60px",
                        borderRadius: "10px",
                        display: "flex",
                        alignItems: "center",
                        boxSizing: "border-box",
                        px: "1.5rem",
                        bgcolor: "#F5F5F5",
                      }}
                    >
                      <PersonIcon
                        sx={{ fontSize: "1.7rem", color: "#92929B" }}
                      />
                      <TextField
                        inputProps={{
                          autoComplete: "off",
                          color: "hotpink",
                        }}
                        variant="outlined"
                        placeholder="123456789"
                        sx={{
                          "& input::placeholder": {
                            fontFamily: "poppins",
                          },
                          "& fieldset": { border: "none" },
                          width: "100%",
                        }}
                        name="mobile"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.mobile}
                      />
                    </Box>
                  </Box>
                  <Box sx={{ pb: "1rem" }}>
                    <Box
                      sx={{
                        border: "1px solid #EEEEEE",
                        width: "100%",
                        height: "60px",
                        borderRadius: "10px",
                        display: "flex",
                        alignItems: "center",
                        boxSizing: "border-box",
                        px: "1.5rem",
                        bgcolor: "#F5F5F5",
                      }}
                    >
                      <LockIcon sx={{ fontSize: "1.7rem", color: "#92929B" }} />
                      <TextField
                        inputProps={{
                          autoComplete: "off",
                        }}
                        variant="outlined"
                        type="password"
                        placeholder="At least 6 character"
                        sx={{
                          "& input::placeholder": {
                            fontFamily: "poppins",
                          },
                          "& fieldset": { border: "none" },
                          width: "100%",
                        }}
                        name="password"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.password}
                      />
                    </Box>
                  </Box>
                  {formik.touched.email && formik.errors.email && (
                    <p className={classes.error_msg}>{formik.errors.email}</p>
                  )}
                  {formik.touched.password && formik.errors.password && (
                    <p className={classes.error_msg}>
                      {formik.errors.password}
                    </p>
                  )}
                  <Box sx={{ pb: "1.5rem", pt: "1.1rem" }}>
                    <Button
                      type="submit"
                      disabled={isLogin}
                      sx={{
                        background: "#4069F9",
                        width: "100%",
                        height: "60px",
                        borderRadius: "10px",
                        display: "flex",
                        alignItems: "center",
                        boxSizing: "border-box",
                        px: "1.5rem",
                        color: "white",
                        "&:hover": {
                          color: "white",
                          background: "#4069F9",
                        },
                      }}
                    >
                      {isLogin ? (
                        <ThemeProvider theme={customTheme}>
                          <CircularProgress color="primary" />
                        </ThemeProvider>
                      ) : (
                        <Typography
                          sx={{
                            color: "white",
                            fontSize: "1rem",
                            fontFamily: "poppins",
                          }}
                        >
                          Login
                        </Typography>
                      )}
                    </Button>
                  </Box>
                  <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <Typography
                      sx={{
                        color: "#FFFFFF",
                        fontSize: ".9rem",
                        fontFamily: "poppins",
                        cursor: "pointer",
                      }}
                    >
                      Forgot Password
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </>
    </ThemeProvider>
  );
}
export default Login;
