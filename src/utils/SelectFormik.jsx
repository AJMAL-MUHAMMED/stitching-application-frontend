import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";

export default function SelectFormik({
  formik,
  name,
  title,
  items,
  isRequied,
}) {
  return (
    <Box sx={{ width: "100%" }}>
      <InputLabel sx={{ my: 0 }}>
        {title}
        {isRequied ? " *" : ""}
      </InputLabel>
      <FormControl sx={{ width: "100%" }}>
        <Select
          id={name}
          name={name}
          value={formik.values[name]}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={!!formik.touched[name] && !!formik.errors[name]}
          helperText={formik.touched[name] && formik.errors[name]}
          sx={{
            marginTop: 1,
            border:
              formik.touched[name] && formik.errors[name]
                ? "1.2px solid red"
                : "1px solid #FFFFFF4D",
            color: "white",
            ".MuiOutlinedInput-notchedOutline": { border: 0 },
            "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
              border: "1px solid #484850",
              borderRadius: "5px",
              outline: "none",
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              border: "1px solid #484850",
              borderRadius: "5px 5px 0 0",
            },
            ".MuiSvgIcon-root ": {
              fill:
                formik.touched[name] && formik.errors[name]
                  ? "red !important"
                  : "white !important",
            },
            height: "56px",
          }}
          inputProps={{
            MenuProps: {
              MenuListProps: {
                sx: {
                  backgroundColor: "black",
                },
              },
            },
          }}
        >
          {items.map((item) => (
            <MenuItem value={item.value}> {item.title} </MenuItem>
          ))}
        </Select>
      </FormControl>
      {formik.touched[name] && formik.errors[name] && (
        <p
          style={{
            color: "#d32f2f",
            height: "10px",
            marginLeft: "14px",
            fontSize: "12px",
            marginTop: "2px",
          }}
          className="MuiFormHelperText-root Mui-error MuiFormHelperText-sizeMedium MuiFormHelperText-contained css-1wc848c-MuiFormHelperText-root"
        >
          {formik.errors[name]}
        </p>
      )}
    </Box>
  );
}
