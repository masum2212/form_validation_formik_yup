import * as Yup from "yup";
export const singUpSchema = Yup.object({
  name: Yup.string().min(3).max(18).required("Please Enter Your name!"),
  email: Yup.string().required("Please Enter Your Email!"),
  password: Yup.string()
    .required("Please enter your password")
    .matches(
      /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      "Password must contain at least 8 characters, one uppercase, one number and one special case character"
    ),
  confirmPassword: Yup.string()
    .required("Please confirm your password")
    .oneOf([Yup.ref("password"), null], "Passwords don't match."),
});
