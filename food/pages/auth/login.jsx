import { Button, Grid } from "@mui/material";
import { useFormik } from "formik";
import { getSession, signIn, useSession } from "next-auth/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Input from "../../components/form/Input";
import Title from "../../components/ui/Title";
import loginSchema from "../../schema/loginSchema";
import { useRouter } from "next/router";
import axios from "axios";

const Login = () => {
  const { data: session } = useSession();
  const { push } = useRouter();
  const [currentUser, setCurrentUser] = useState();
  const onSubmit = async (values, actions) => {
    const { email, password } = values;
    let options = { redirect: false, email, password };
    try {
      const res = await signIn("credentials", options);
      console.log(res, "neden olmuyor");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/users`);
        setCurrentUser(res.data.find((user) => user.email === session?.user?.email));
        session && push("/profile" + currentUser?._id);
      } catch (error) {
        console.log(error, "error31");
      }
    };
    getUser();
  }, [session, push, currentUser]);

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

export async function getServerSideProps({ req }) {
  const session = await getSession({ req });
  console.log(session, "session312");
  const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/users/`);
  const user = res.data?.find((user) => user.email === session?.user?.email);
  console.log(res.data, "res.data");

  if (session && user) {
    return {
      redirect: {
        destination: "/profile/" + user._id,
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}

export default Login;
