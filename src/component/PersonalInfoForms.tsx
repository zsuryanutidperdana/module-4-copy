import { Formik, Form } from "formik"
import FormField from "./FormField"
import * as Yup from "yup"

const PersonalInfoSchema = Yup.object().shape({
  fullname: Yup.string().min(2, "Invalid full name").matches(/^[a-zA-z]+$/, "Please enter a valid full name.").required("Full name is required!"),
  email: Yup.string().matches(/^[\w.-]+@+[a-zA-z+.]+[a-z]{2,6}$/, "Please enter a valid email address.").required("Email is required!"),
  dob: Yup.date().max(new Date(), "Date cannot be in the future.").required("Date of birth is required!").test("teenage-checker", "You must be at least 13 years old to register.", function(value){
    const currentDate = new Date();
    const birthDate = new Date(value)
    const age = currentDate.getFullYear() - birthDate.getFullYear()
    return age >= 13
  })
})

const PersonalInfoForm = () =>{
    const personalInitialValues = {
      fullName: "",
      email: "",
      dob: "",
    }
    const PersonalInfoFields = [{
        textLabel: "Full Name",
        fieldName: "fullname",
        fieldPlaceholder: "Enter your full name e.g. John Doe",
        errorComponent: "div",
    }, {
        textLabel: "Email",
        fieldName: "email",
        fieldPlaceholder: "Enter your email address",
        errorComponent: "div",
    }, {
        textLabel: "Date of Birth",
        fieldName: "dob",
        fieldPlaceholder: "",
        errorComponent: "div",
    }]
    return (
        <Formik 
        initialValues={personalInitialValues}
        onSubmit={(values, actions) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              actions.setSubmitting(false);
            }, 1000);
          }
        }
        validationSchema={PersonalInfoSchema}>
          <Form>
            {PersonalInfoFields.map((field, index) => (
              <FormField
                key={index}
                textLabel={field.textLabel}
                fieldName={field.fieldName}
                fieldPlaceholder={field.fieldPlaceholder}
                errorComponent={field.errorComponent}
              />
            ))}
            <button type="submit">Next</button>
          </Form>
        </Formik>
      );
    };

export default PersonalInfoForm