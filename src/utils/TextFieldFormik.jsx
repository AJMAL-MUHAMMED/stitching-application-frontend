import { Box, InputLabel, TextField } from "@mui/material";
export default function TextFieldFormik({
  placeholder,
  label,
  formik,
  name,
  title,
  type = "text",
  isRequied,
}) {
  return (
    <Box sx={{ width: "100%", my: 0.5 }}>
      <InputLabel sx={{ my: 0 }}>
        {title}
        {isRequied ? " *" : ""}
      </InputLabel>
      <TextField
        placeholder={placeholder}
        sx={{ width: "100%", my: 0.5 }}
        id={name}
        name={name}
        type={type}
        label={label}
        margin="normal"
        inputProps={{ style: { color: "white" } }}
        value={formik.values[name]}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={!!formik.touched[name] && !!formik.errors[name]}
        helperText={formik.touched[name] && formik.errors[name]}
      />
    </Box>
  );
}
