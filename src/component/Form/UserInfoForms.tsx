import { Formik, Form } from "formik";
import FormField from "./FormField";
import * as Yup from "yup";
import React from "react";
import { Button } from "@mui/material";

const UserInfoSchema = Yup.object().shape({
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
  password: Yup.string()
    .matches(
      /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&\-_])[A-Za-z\d@$!%*#?&\-_]{8,}$/,
      "Please enter at least 1 upper case character, 1 special character, and 1 number. Password must contain at least 8 characters."
    )
    .required("Password is required!"),
});

interface ButtonProps {
  onSubmit: (value: any) => void;
}

const UserInfoForm: React.FC<ButtonProps> = ({ onSubmit }) => {
  const userInitialValues = {
    fullname: "",
    email: "",
    password: "",
  };
  const userInfoFields = [
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
      textLabel: "Password",
      fieldName: "password",
      fieldPlaceholder: "Enter your password",
      errorComponent: "div",
    },
  ];
  return (
    <Formik
      initialValues={userInitialValues}
      onSubmit={onSubmit}
      validationSchema={UserInfoSchema}
    >
      <Form className="space-y-4 w-1/4 md:space-y-6">
        {userInfoFields.map((field, index) => (
          <FormField
            key={index}
            textLabel={field.textLabel}
            fieldName={field.fieldName}
            fieldPlaceholder={field.fieldPlaceholder}
            errorComponent={field.errorComponent}
          />
        ))}
        <div className="flex pt-5 space-x-5 justify-center">
          <Button variant="contained" size="large" color="success" type="submit">
            Register
          </Button>
        </div>
      </Form>
    </Formik>
  );
};

export default UserInfoForm;
