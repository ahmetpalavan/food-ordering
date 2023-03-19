/** @format */

import React from "react";
import * as Yup from "yup";

const reservationSchema = Yup.object({
  fullName: Yup.string().required("Full name is required").min(3, "Full name must be at least 3 characters"),
  phoneNumber: Yup.number().required("Phone number is required").min(10, "Phone number must be at least 10 characters"),
  email: Yup.string().required("Email is required").email("Email is invalid"),
  person: Yup.number().required("Person is required").min(1, "Person must be at least 1 characters"),
  date: Yup.date().required("Date is required").min(new Date(), "Date must be greater than today"),
});

export default reservationSchema;
