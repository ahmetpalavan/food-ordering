import { Button, Grid } from "@mui/material";
import { useFormik } from "formik";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import React, { useEffect } from "react";
import Input from "../../components/form/Input";
import Title from "../../components/ui/Title";
import loginSchema from "../../schema/loginSchema";
import { useRouter } from "next/router";

const login = () => {
  const { push } = useRouter();
  const { data: session } = useSession();
  const onSubmit = async (values, actions) => {
    const { email, password } = values;
    const options = {
      redirect: false,
      email,
      password,
    };
    const res = await signIn("credentials", options);
    push("/profile");
    actions.resetForm();
    console.log(res, "res");
  };

  useEffect(() => {
    if (session) {
      push("/profile");
    }
  }, [session, push]);

  console.log(session, "session");

  const { handleChange, handleSubmit, values, errors, touched, handleBlur } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit,
    validationSchema: loginSchema,
  });
  const inputs = [
    {
      id: 1,
      type: "email",
      placeholder: "Your Email",
      name: "email",
      value: values.email,
      errorMessage: errors.email,
      touched: touched.email,
    },
    {
      id: 2,
      type: "password",
      placeholder: "Your Password",
      name: "password",
      value: values.password,
      errorMessage: errors.password,
      touched: touched.password,
    },
  ];
  return (
    <div className="container mx-auto">
      <form onSubmit={handleSubmit} className="flex flex-col items-center my-20 w-1/2 mx-auto">
        <Title addClass="text-[40px] text-center md:w-1/2 w-full">Login</Title>
        <Grid mt={3} className="flex flex-col gap-y-3 w-full">
          {inputs.map((input) => (
            <Input key={input.id} {...input} onChange={handleChange} onBlur={handleBlur} />
          ))}
          <Grid className="flex flex-col w-full gap-y-4 mt-6">
            <Button type="submit" className="btn-primary" onClick={handleSubmit}>
              Login
            </Button>
            <Button onClick={() => signIn("github")} type="button" className="btn-primary !bg-secondary">
              Github
            </Button>
            <Link href="/auth/register">
              Don't have an account? <span className="text-primary">Register</span>
            </Link>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default login;
