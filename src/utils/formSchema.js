import * as Yup from "yup";

export const formSchema = Yup.object({
  name: Yup.string()
    .min(3, "A name must contain at least 3 letters")
    .required("A name must contain at least 3 letters"),
  email: Yup.string()
    .email("Please enter a valid e-mail")
    .required("Please enter a valid e-mail"),
  bookingDate: Yup.date().required("Choose a booking date"),
  comment: Yup.string(),
});
