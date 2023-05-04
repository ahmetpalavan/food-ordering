import * as Yup from "yup";

const loginSchema = Yup.object({
  email: Yup.string().required("Email is required").email("Email is invalid").min(6, "Email must be at least 6 characters"),
  password: Yup.string().required("Password is required").min(8, "Password must be at least 6 characters").min(8, "Password must be at most 20 characters")
  .matches(/[0-9]/, 'Password requires a number')
  .matches(/[a-z]/, 'Password requires a lowercase letter')
  .matches(/[A-Z]/, 'Password requires an uppercase letter')
  .matches(/[^\w]/, 'Password requires a symbol'),
});

export default loginSchema;
