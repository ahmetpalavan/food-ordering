import { Button, Grid } from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import reservationSchema from "../schema/reservationSchema";
import Input from "./form/Input";
import Title from "./ui/Title";

const Reservation = (props) => {
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
    validationSchema: reservationSchema,
  });

//   console.log(values);

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
      type: "number",
      name: "person",
      placeholder: "How Many Persons",
      value: values.person,
      errorMessage: errors.person,
      touched: touched.person,
    },
    {
      id: 5,
      type: "date",
      name: "date",
      value: values.date,
      errorMessage: errors.date,
      touched: touched.date,
    },
  ];
//   console.log(errors);
  return (
    <Grid className="container mx-auto py-12">
      <Title addClass="text-[40px] mb-10">Book A Table</Title>
      <Grid className="flex justify-between flex-wrap gap-10">
        <form onSubmit={handleSubmit} className="lg:flex-1 w-full">
          <Grid className="flex flex-col gap-y-3">
            {inputs.map((inputs) => (
              <Input key={inputs.id} {...inputs} onChange={handleChange} onBlur={handleBlur} />
            ))}
          </Grid>
          <Button type="submit" className="btn-primary mt-4">
            BOOK NOW
          </Button>
        </form>
        <Grid className="lg:flex-1 !h-[384px] w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12046.790013648348!2d29.035031335715278!3d40.988104216139384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab876529956f5%3A0x41dde9eb0ea97069!2zWml2ZXJiZXksIEZlbmVyeW9sdSwgMzQ3MjQgS2FkxLFrw7Z5L8Swc3RhbmJ1bA!5e0!3m2!1str!2str!4v1679161482376!5m2!1str!2str"
            className="w-full h-full "
          ></iframe>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Reservation;
