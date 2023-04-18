import { Button, Grid } from "@mui/material";
import { useFormik } from "formik";
import Link from "next/link";
import React from "react";
import Input from "../../components/form/Input";
import Title from "../../components/ui/Title";
import { adminSchema } from "../../schema/admin";

const login = () => {
  const onSubmit = async (values, actions) => {
    await new Promise((r) => setTimeout(r, 3000));
    actions.resetForm();
  };

  const { handleChange, handleSubmit, values, errors, touched, handleBlur } = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit,
    validationSchema: adminSchema,
  });
  const inputs = [
    {
      id: 1,
      type: "text",
      placeholder: "Your Name",
      name: "username",
      value: values.username,
      errorMessage: errors.username,
      touched: touched.username,
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
    <div className="container mx-auto py-2">
      <form onSubmit={handleSubmit} className="flex flex-col items-center my-20 w-1/2 mx-auto">
        <Title addClass="text-[40px] text-center md:w-1/2 w-full">Admin Login</Title>
        <Grid className="flex flex-col gap-y-3 w-full">
          {inputs.map((input) => (
            <Input key={input.id} {...input} onChange={handleChange} onBlur={handleBlur} />
          ))}
          <Grid className="flex flex-col w-full gap-y-4 mt-6">
            <Button className="btn-primary" onClick={handleSubmit}>
              Login
            </Button>
            <Link href="/auth/register">
              <span className="text-primary underline">Home Page</span>
            </Link>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default login;
