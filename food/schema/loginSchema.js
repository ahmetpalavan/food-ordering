import * as Yup from "yup";

const loginSchema = Yup.object({
  email: Yup.string().required("Email is required").email("Email is invalid").min(6, "Email must be at least 6 characters"),
  password: Yup.string().required("Password is required").min(6, "Password must be at least 6 characters").min(20, "Password must be at most 20 characters"),
});

export default loginSchema;
