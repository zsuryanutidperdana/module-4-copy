import FormField from "./Form/FormField";
import { Formik, Form } from "formik";
import { Button } from "@mui/material";

const LoginForm = () => {
  const loginInitialValues = {
    username: "",
    password: "",
  };
  const loginFields = [
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
  function onSubmit() {}
  return (
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
        <div className="flex pt-5 space-x-5">
          <Button variant="contained" color="secondary" type="submit">
            Login
          </Button>
        </div>
      </Form>
    </Formik>
  );
};

export default LoginForm;