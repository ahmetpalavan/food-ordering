import * as Yup from "yup";

export const adminSchema = Yup.object({
    username: Yup.string().required("Username is required").min(6, "Username must be at least 6 characters"),
    password: Yup.string().required("Password is required").min(8, "Password must be at least 6 characters").min(8, "Password must be at most 20 characters")
    .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    ),
});