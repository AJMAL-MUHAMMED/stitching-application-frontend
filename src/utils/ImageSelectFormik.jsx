import { Box, InputLabel, TextField } from "@mui/material";
import { withStyles } from "@mui/styles";

const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "white",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "white",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "white",
      },
      "&:hover fieldset": {
        borderColor: "white",
      },
      "&.Mui-focused fieldset": {
        borderColor: "white",
      },
    },
  },
})(TextField);
export default function ImageSelectFormik({ formik, name, title, isRequied }) {
  return (
    <Box sx={{ width: "100%" }}>
      <InputLabel sx={{ my: .5 }}>
        {title}
        {isRequied ? " *" : ""}
      </InputLabel>
      <CssTextField
        sx={{ width: "100%" }}
        id={name}
        name={name}
        type="file"
        accept="image/*"
        // margin="normal"
        inputProps={{ style: { fontFamily: "nunito", color: "white" } }}
        onChange={(e) => formik.setFieldValue(name, e.currentTarget.files[0])}
        onBlur={formik.handleBlur}
        error={!!formik.touched[name] && !!formik.errors[name]}
        helperText={formik.touched[name] && formik.errors[name]}
      />
    </Box>
  );
}
