import { Box, Button, Grid, Typography } from "@mui/material";
import { useFormik } from "formik";
import TextFieldFormik from "../utils/TextFieldFormik";
import ImageSelectFormik from "../utils/ImageSelectFormik";
import { addShopSchema } from "../schemas/schema";

export default function AddShop({ onClose }) {
  const initialValues = {
    shopName: "",
    areaId: "",
    shopPlace: "",
    shopMobileNo: "",
    shopWhatsappNo: "",
    shopEmail: "",
    shopDescription: "",
    shopWebsite: "",
    shopStartDate: "",
    shopImages: "",
    shopLogo: "",
    shopLatitude: "",
    shopLongitude: "",
  };
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: addShopSchema,
    onSubmit: async (values, action) => {
      console.log(values);
    },
  });
  return (
    <Box sx={{ ml: 1 }} component="form" onSubmit={formik.handleSubmit}>
      <Typography
        sx={{
          textAlign: "center",
          my: 1,
          fontSize: "23px",
          mb: 3,
        }}
      >
        Add Shop
      </Typography>
      <Grid container xs={12} spacing={1}>
        <Grid item md={6}>
          <TextFieldFormik
            isRequied={true}
            name={"shopName"}
            title={"Shop Name"}
            formik={formik}
          />
        </Grid>
        <Grid item md={6}>
          <TextFieldFormik
            isRequied={true}
            name={"areaId"}
            formik={formik}
            title={"area Id"}
          />
        </Grid>
        <Grid item md={6}>
          <TextFieldFormik
            isRequied={true}
            name={"shopPlace"}
            formik={formik}
            title={"Shop Place"}
          />
        </Grid>
        <Grid item md={6}>
          <TextFieldFormik
            isRequied={true}
            name={"shopEmail"}
            formik={formik}
            title={"Shop Email"}
          />
        </Grid>
        <Grid item md={6}>
          <TextFieldFormik
            isRequied={true}
            name={"shopMobileNo"}
            formik={formik}
            title={"Shop Mobile No"}
          />
        </Grid>
        <Grid item md={6}>
          <TextFieldFormik
            isRequied={true}
            name={"shopWhatsappNo"}
            formik={formik}
            title={"Shop Whatsapp No"}
          />
        </Grid>
        <Grid item md={6}>
          <TextFieldFormik
            isRequied={true}
            name={"shopWebsite"}
            formik={formik}
            title={"Shop Website"}
          />
        </Grid>
        <Grid item md={6}>
          <TextFieldFormik
            isRequied={true}
            name={"shopStartDate"}
            formik={formik}
            type={"date"}
            title={"Shop Start Date"}
          />
        </Grid>
        <Grid item xs={6}>
          <ImageSelectFormik
            title={"Shop Images"}
            name={"shopImages"}
            type="file"
            formik={formik}
          />
        </Grid>
        <Grid item xs={6}>
          <ImageSelectFormik
            title={"Shop Logo"}
            name={"shopLogo"}
            type="file"
            formik={formik}
          />
        </Grid>
        <Grid item md={6}>
          <TextFieldFormik
            isRequied={true}
            name={"shopLatitude"}
            formik={formik}
            title={"Shop Latitude"}
          />
        </Grid>
        <Grid item md={6}>
          <TextFieldFormik
            isRequied={true}
            name={"shopLongitude"}
            formik={formik}
            title={"Shop Longitude"}
          />
        </Grid>
      </Grid>
      <Box
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          marginTop: "30px",
        }}
      >
        <Button
          type="submit"
          style={{
            backgroundColor: "#4069F9",
            width: "120px",
            height: "50px",
            borderRadius: "7px",
            marginRight: "20px",
            color: "white",
          }}
          variant="contained"
        >
          Submit
        </Button>
        <Button
          style={{
            border: "1px solid #6D7590",
            borderRadius: "7px",
            width: "120px",
            height: "50px",
          }}
          variant="outlined"
          onClick={() => onClose()}
        >
          Cancel
        </Button>
      </Box>
    </Box>
  );
}
