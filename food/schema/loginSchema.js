import * as Yup from "yup";

const loginSchema = Yup.object({
  email: Yup.string().required("Email is required").email("Email is invalid").min(6, "Email must be at least 6 characters"),
  password: Yup.string().required("Password is required").min(8, "Password must be at least 6 characters").min(8, "Password must be at most 20 characters")
  .matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
    "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
  ),
});

export default loginSchema;
