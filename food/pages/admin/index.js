import { Button, Grid } from "@mui/material";
import axios from "axios";
import { useFormik } from "formik";
import Link from "next/link";
import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Input from "../../components/form/Input";
import Title from "../../components/ui/Title";
import { adminSchema } from "../../schema/admin";
import { useRouter } from "next/router";
import { getSession } from "next-auth/react";

const login = () => {
  const { push } = useRouter();
  const onSubmit = async (values, actions) => {
    try {
      const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/admin`, values);
      if (res.status === 200) {
        console.log(res.data, "res");
        actions.resetForm();
        toast.success("Login Success");
        push("/admin/profile");
      }
    } catch (error) {
      console.log(error, "error");
    }
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

export async function getServerSideProps(context) {
  const myCookie = context.req?.cookies;
  if (myCookie.token === process.env.ADMIN_TOKEN) {
    return {
      redirect: {
        destination: "/admin/profile",
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
}

export default login;
