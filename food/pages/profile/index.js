import Image from "next/image";
import React, { useState } from "react";
import Button, { ButtonBase } from "@mui/material";
import Home from "@mui/icons-material/Home";
import Key from "@mui/icons-material/Key";
import Moped from "@mui/icons-material/Moped";
import ExitToApp from "@mui/icons-material/ExitToApp";
import Title from "../../components/ui/Title";
import { Form, useFormik } from "formik";
import Input from "../../components/form/Input";
import profilSchema from "../../schema/profile";
import Account from "../../components/profile/Account";
import Password from "../../components/profile/Password";
import Order from "../../components/profile/Order";

const Profile = () => {
  const [tabs, setTabs] = useState(0);

  const onSubmit = async (values, actions) => {
    await new Promise((r) => setTimeout(r, 3000));
    actions.resetForm();
    // console.log(values, actions, "ahmetsdasd");
  };

  const { handleChange, handleSubmit, values, errors, touched, handleBlur } = useFormik({
    initialValues: {
      fullName: "",
      phoneNumber: "",
      email: "",
      person: "",
      date: "",
    },
    onSubmit,
    validationSchema: profilSchema,
  });

  const inputs = [
    {
      id: 1,
      type: "text",
      placeholder: "Your Full Name",
      name: "fullName",
      value: values.fullName,
      errorMessage: errors.fullName,
      touched: touched.fullName,
    },
    {
      id: 2,
      type: "number",
      placeholder: "Your Phone Number",
      name: "phoneNumber",
      value: values.phoneNumber,
      errorMessage: errors.phoneNumber,
      touched: touched.phoneNumber,
    },
    {
      id: 3,
      type: "email",
      placeholder: "Your Email",
      name: "email",
      value: values.email,
      errorMessage: errors.email,
      touched: touched.email,
    },
    {
      id: 4,
      type: "address",
      name: "address",
      placeholder: "Your Address",
      value: values.address,
      errorMessage: errors.address,
      touched: touched.address,
    },
    {
      id: 5,
      type: "text",
      name: "bio",
      value: values.job,
      errorMessage: errors.job,
      touched: touched.job,
      placeholder: "Your Job",
    },
    {
      id: 6,
      type: "text",
      placeholder: "Your Bio",
      name: "bio",
      value: values.bio,
      errorMessage: errors.bio,
      touched: touched.bio,
    },
  ];
  return (
    <div className="flex px-10 min-h-[calc(100vh-_-433px)] lg:flex-row flex-col lg:mb-10">
      <div className="flex-shrink-0 lg:w-80 w-100">
        <div className="relative flex flex-col items-center px-10 py-5 border-2 border-b-0">
          <Image
            className="rounded-full"
            width={100}
            height={100}
            alt=""
            src="https://media.licdn.com/dms/image/C4D03AQGGXdQf0EumZA/profile-displayphoto-shrink_800_800/0/1661527855203?e=2147483647&v=beta&t=LdfdKqeaAj4XctXDgRJQ5JwAAUuRutUcIT2f6Mbr8cQ"
          />
          <b className="mt-1 text-2xl">Ahmet Palavan</b>
        </div>
        <ul className="text-center font-semibold">
          <li
            onClick={() => setTabs(0)}
            className={`border w-full p-3 cursor-pointer hover:bg-primary hover:text-white transition-all ${
              tabs === 0 && "bg-primary text-white"
            }`}
          >
            <Home />
            <button className="ml-1 ">Account</button>
          </li>
          <li
            onClick={() => setTabs(1)}
            cclassName={`border w-full p-3 cursor-pointer hover:bg-primary hover:text-white transition-all ${
              tabs === 1 && "bg-primary text-white"
            }`}
          >
            <Key />
            <button className="ml-1">Password</button>
          </li>
          <li
            onClick={() => setTabs(2)}
            className={`border w-full p-3 cursor-pointer hover:bg-primary hover:text-white transition-all ${
              tabs === 2 && "bg-primary text-white"
            }`}
          >
            <Moped />
            <button className="ml-1">Orders</button>
          </li>
          <li
            onClick={() => setTabs(3)}
            className={`border w-full p-3 cursor-pointer hover:bg-primary hover:text-white transition-all ${
              tabs === 3 && "bg-primary text-white"
            }`}
          >
            <ExitToApp />
            <button className="ml-1">Exit</button>
          </li>
        </ul>
      </div>

      {tabs === 0 && <Account />}
      {tabs === 1 && <Password />}
      {tabs === 2 && <Order />}
    </div>
  );
};

export default Profile;
