import { useFormik } from "formik";
import React from "react";
import profilSchema from "../../schema/profile";
import Title from "../ui/Title";
import Input from "../form/Input";

const Account = () => {

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
    <form onSubmit={handleSubmit} className="lg:p-8 lg:mt-0 mt-5 flex-1">
      <Title addClass="text-[40px]">Account Settings</Title>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 mt-4">
        {inputs.map((input) => (
          <div key={input.id}>
            <Input {...input} onChange={handleChange} onBlur={handleBlur} />
          </div>
        ))}
      </div>
      <button className="btn-primary w-36 mt-3" onClick={handleSubmit}>
        Update
      </button>
    </form>
  );
};

export default Account;
