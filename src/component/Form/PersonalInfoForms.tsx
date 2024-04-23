import { Formik, Form } from "formik";
import FormField from "./FormField";
import * as Yup from "yup";
import React from "react";
import { Button } from "@mui/material";

const PersonalInfoSchema = Yup.object().shape({
  fullname: Yup.string()
    .min(2, "Invalid full name")
    .matches(/^[a-zA-z]+$/, "Please enter a valid full name.")
    .required("Full name is required!"),
  email: Yup.string()
    .matches(
      /^[\w.-]+@+[a-zA-z+.]+[a-z]{2,6}$/,
      "Please enter a valid email address."
    )
    .required("Email is required!"),
  dob: Yup.date()
    .max(new Date(), "Date cannot be in the future.")
    .required("Date of birth is required!")
    .test(
      "teenage-checker",
      "You must be at least 13 years old to register.",
      function (value) {
        const currentDate = new Date();
        const birthDate = new Date(value);
        const age = currentDate.getFullYear() - birthDate.getFullYear();
        return age >= 13;
      }
    ),
});

interface ButtonProps {
  onSubmit: (value: any) => void;
}

const PersonalInfoForm: React.FC<ButtonProps> = ({ onSubmit }) => {
  const personalInitialValues = {
    fullname: "",
    email: "",
    dob: "",
  };
  const personalInfoFields = [
    {
      textLabel: "Full Name",
      fieldName: "fullname",
      fieldPlaceholder: "Enter your full name e.g. John Doe",
      errorComponent: "div",
    },
    {
      textLabel: "Email",
      fieldName: "email",
      fieldPlaceholder: "Enter your email address",
      errorComponent: "div",
    },
    {
      textLabel: "Date of Birth",
      fieldName: "dob",
      fieldPlaceholder: "",
      errorComponent: "div",
    },
  ];
  return (
    <Formik
      initialValues={personalInitialValues}
      onSubmit={onSubmit}
      validationSchema={PersonalInfoSchema}
    >
      <Form className="space-y-4 w-1/4 md:space-y-6">
        {personalInfoFields.map((field, index) => (
          <FormField
            key={index}
            textLabel={field.textLabel}
            fieldName={field.fieldName}
            fieldPlaceholder={field.fieldPlaceholder}
            errorComponent={field.errorComponent}
          />
        ))}
        <div className="pt-5">
          <Button variant="contained" color="success" type="submit">
            Next
          </Button>
        </div>
      </Form>
    </Formik>
  );
};

export default PersonalInfoForm;
