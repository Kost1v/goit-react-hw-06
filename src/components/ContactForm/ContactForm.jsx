import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import css from "./ContactForm.module.css"

const phoneNumberRegex =
  /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;

const AddProfileSchema = Yup.object({
  name: Yup.string()
    .min(3, "Name must be at least 2 characters")
    .max(50, "Name must be less than 20 characters")
    .required("Name is required"),
  number: Yup.string()
    .required("Phone is required")
    .matches(
      phoneNumberRegex,
      "Invalid phone number. Phone must be +380XXXXXXXXX"
    ),
});

const INITIAL_VALUES = {
  name: "",
  number: "",
  id: "",
};

const ContactForm = ({onAddProfile}) => {

  const handleSubmit = (values, actions) => {    
    onAddProfile(values)
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={INITIAL_VALUES}
      validationSchema={AddProfileSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <label className={css.label}>
          <span>Name:</span>
          <Field
            type="text"
            name="name"
            className={css.input}
            placeholder="Ivan Ivanov"
          />
          <ErrorMessage
            className={css.errorMessage}
            name="name"
            component="span"
          />
        </label>
        <label className={css.label}>
          <span>Number:</span>
          <Field
            className={css.input}
            type="text"
            name="number"
            placeholder="+38xxxxxxxxxx"
          />
          <ErrorMessage
            name="number"
            component="span"
            className={css.errorMessage}
          />
        </label>
        <button type="submit">🤷‍♂️ Add Profile</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
