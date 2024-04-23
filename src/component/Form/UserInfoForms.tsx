import { Formik, Form } from "formik";
import FormField from "./FormField";
import * as Yup from "yup";
import React from "react";
import { Button } from "@mui/material";

const UserInfoSchema = Yup.object().shape({
  username: Yup.string().required("Username is required!"),
  password: Yup.string()
    .matches(
      /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&\-_])[A-Za-z\d@$!%*#?&\-_]{8,}$/,
      "Please enter at least 1 upper case character, 1 special character, and 1 number. Password must contain at least 8 characters."
    )
    .required("Password is required!"),
});

interface ButtonProps {
  onSubmit: (value: any) => void;
  prevPage: () => void;
}

const UserInfoForm: React.FC<ButtonProps> = ({ onSubmit, prevPage }) => {
  const userInitialValues = {
    username: "",
    password: "",
  };
  const userInfoFields = [
    {
      textLabel: "Username",
      fieldName: "username",
      fieldPlaceholder: "Enter your Username",
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
        <div className="flex pt-5 space-x-5">
          <Button onClick={prevPage}>Back</Button>
          <Button variant="contained" color="success" type="submit">
            Next
          </Button>
        </div>
      </Form>
    </Formik>
  );
};

export default UserInfoForm;
