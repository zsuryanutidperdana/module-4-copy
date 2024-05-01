import FormField from "./Form/FormField";
import { Formik, Form } from "formik";
import { Button } from "@mui/material";
import Navbar from "./Navbar/Navbar";
import { handleLogin } from "../utils/handleUser";
import React, { useContext } from "react";
import { UserContext } from "../schema/UserContext";

const LoginForm = () => {
  const user = useContext(UserContext);
  const loginInitialValues = {
    email: "",
    password: "",
  };

  const loginFields = [
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
  function onSubmit(values: any) {
    user.setUser(values);
    handleLogin(values);
  }
  return (
    <>
      <Navbar />
      <h1 className="block text-xl text-white mt-20 mb-10">
        Enter your Credentials to Login
      </h1>
      <Formik initialValues={loginInitialValues} onSubmit={onSubmit}>
        <Form className="space-y-4 w-1/4 md:space-y-6">
          {loginFields.map((field, index) => (
            <FormField
              key={index}
              textLabel={field.textLabel}
              fieldName={field.fieldName}
              fieldPlaceholder={field.fieldPlaceholder}
              errorComponent={field.errorComponent}
            />
          ))}
          <div className="flex pt-5 space-x-5 justify-center">
            <Button
              variant="contained"
              size="large"
              color="success"
              type="submit"
            >
              Login
            </Button>
          </div>
        </Form>
      </Formik>
    </>
  );
};

export default LoginForm;
