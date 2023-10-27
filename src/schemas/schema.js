import * as Yup from "yup";

export const loginSchema = Yup.object({
  mobile: Yup.string().required("Number is required"),
  password: Yup.string().required("Password is required"),
});

export const addShopSchema = Yup.object({
  shopName: Yup.string().required("required"),
  areaId: Yup.string().required("required"),
  shopPlace: Yup.string().required("required"),
  shopMobileNo: Yup.string().required("required"),
  shopWhatsappNo: Yup.string().required("required"),
  shopEmail: Yup.string().required("required"),
  shopDescription: Yup.string().required("required"),
  shopWebsite: Yup.string().required("required"),
  shopStartDate: Yup.string().required("required"),
  shopImages: Yup.string().required("required"),
  shopLogo: Yup.string().required("required"),
  shopLatitude: Yup.string().required("required"),
  shopLongitude: Yup.string().required("required"),
});

