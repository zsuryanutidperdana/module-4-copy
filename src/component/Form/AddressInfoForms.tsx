import { Formik, Form } from "formik";
import FormField from "./FormField";
import * as Yup from "yup";
import React from "react";
import { Button } from "@mui/material";

const AddressInfoSchema = Yup.object().shape({
  address: Yup.string()
    .min(5, "Invalid address")
    .max(50, "Address is too long!")
    .required("Address is required!"),
  city: Yup.string()
    .matches(/^[a-zA-z\s]{2,20}$/, "Please enter a valid city.")
    .required("City is required!"),
  state: Yup.string()
    .matches(/^[a-zA-z\s]{2,20}$/, "Please enter a valid state.")
    .required("State is required!"),
  zipcode: Yup.string()
    .matches(/^[\d+]{5}$/, "Invalid Zipcode")
    .required("Zipcode is required!"),
});

interface ButtonProps {
  onSubmit: (value: any) => void;
  prevPage: () => void;
}

const AddressInfoForm: React.FC<ButtonProps> = ({ onSubmit, prevPage }) => {
  const addressInitialValues = {
    address: "",
    city: "",
    state: "",
    zipcode: "",
  };
  const addressInfoFields = [
    {
      textLabel: "Address",
      fieldName: "address",
      fieldPlaceholder: "Enter your current address.",
      errorComponent: "div",
    },
    {
      textLabel: "City",
      fieldName: "city",
      fieldPlaceholder: "Enter your current city",
      errorComponent: "div",
    },
    {
      textLabel: "State",
      fieldName: "state",
      fieldPlaceholder: "Enter your current state",
      errorComponent: "div",
    },
    {
      textLabel: "Zipcode",
      fieldName: "zipcode",
      fieldPlaceholder: "Enter your current address zipcode (5 numbers)",
      errorComponent: "div",
    },
  ];
  return (
    <Formik
      initialValues={addressInitialValues}
      onSubmit={onSubmit}
      validationSchema={AddressInfoSchema}
    >
      <Form className="space-y-4 w-1/4 md:space-y-6">
        {addressInfoFields.map((field, index) => (
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

export default AddressInfoForm;
