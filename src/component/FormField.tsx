import React from "react";
import { Field, ErrorMessage } from "formik";

interface FormFieldProps {
  textLabel: string;
  fieldName: string;
  fieldPlaceholder: string;
  errorName: string;
  errorComponent: string;
}

const FormField: React.FC<FormFieldProps> = ({ ...props }: FormFieldProps) => {
  return (
    <>
      <label>{props.textLabel}</label>
      {props.fieldName === "email" && (
        <Field name="email" type="email" placeholder={props.fieldPlaceholder} />
      )}
      {props.fieldName === "password" && (
        <Field
          name="password"
          type="password"
          placeholder={props.fieldPlaceholder}
        />
      )}
      {props.fieldName === "dob" && (
        <Field
          name="dob"
          type="dob"
          placeholder={props.fieldPlaceholder}
        />
      )}
      {props.fieldName !== "email" &&
        props.fieldName !== "password" &&
        props.fieldName !== "dob" && (
          <Field
            name={props.fieldName}
            type="text"
            placeholder={props.fieldPlaceholder}
          />
        )}
      <ErrorMessage name={props.errorName} component={props.errorComponent} />
    </>
  );
};

export default FormField;
