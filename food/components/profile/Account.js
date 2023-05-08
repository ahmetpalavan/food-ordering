import { useFormik } from "formik";
import React from "react";
import profilSchema from "../../schema/profile";
import Title from "../ui/Title";
import Input from "../form/Input";
import axios from "axios";

const Account = ({ user }) => {
  const onSubmit = async (values, actions) => {
    try {
      const res = await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/users/${user._id}`, values);
      console.log(res, "res123");
    } catch (error) {
      console.log(error, "error123123");
    }
  };

  const { handleChange, handleSubmit, values, errors, touched, handleBlur } = useFormik({
    enableReinitialize: true,
    initialValues: {
      fullName: user?.fullName,
      phoneNumber: user?.phoneNumber,
      email: user?.email,
      address: user?.address,
      job: user?.job,
      bio: user?.bio,
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
      placeholder: "Your Job",
      name: "job",
      value: values.job,
      errorMessage: errors.job,
      touched: touched.job,
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
    <form onSubmit={handleSubmit} className="lg:p-8 lg:mt-0 mt-5 flex-1">
      <Title addClass="text-[40px]">Account Settings</Title>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 mt-4">
        {inputs.map((input) => (
          <div key={input.id}>
            <Input {...input} onChange={handleChange} onBlur={handleBlur} />
          </div>
        ))}
      </div>
      <button type="submit" className="btn-primary w-36 mt-3" onClick={handleSubmit}>
        Update
      </button>
    </form>
  );
};

export default Account;
