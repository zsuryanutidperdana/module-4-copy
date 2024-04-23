import { Formik, Form } from "formik"
import FormField from "./FormField"
import * as Yup from "yup"
import React from "react"

const UserInfoSchema = Yup.object().shape({
  username: Yup.string().required("Username is required!"),
  password: Yup.string().matches(/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&\-_])[A-Za-z\d@$!%*#?&\-_]{8,}$/, "Please enter at least 1 upper case character, 1 special character, and 1 number. Password must contain at least 8 characters.").required("Password is required!"),
 })


interface ButtonProps {
  onSubmit: (value: any) => void;
  prevPage: () => void;
}

const UserInfoForm:React.FC<ButtonProps> = ({ onSubmit, prevPage }) =>{
    const userInitialValues = {
      username: "",
      password: "",
    }
    const userInfoFields = [{
        textLabel: "Username",
        fieldName: "username",
        fieldPlaceholder: "Enter your Username",
        errorComponent: "div",
    }, {
        textLabel: "Password",
        fieldName: "password",
        fieldPlaceholder: "Enter your password",
        errorComponent: "div",
    }]
    return (
        <Formik 
        initialValues={userInitialValues}
        onSubmit= {onSubmit}
        validationSchema={UserInfoSchema}>
          <Form>
            {userInfoFields.map((field, index) => (
              <FormField
                key={index}
                textLabel={field.textLabel}
                fieldName={field.fieldName}
                fieldPlaceholder={field.fieldPlaceholder}
                errorComponent={field.errorComponent}
              />
            ))}
            <button onClick={prevPage}>Back</button>
            <button type="submit">Next</button>
          </Form>
        </Formik>
      );
    };

export default UserInfoForm