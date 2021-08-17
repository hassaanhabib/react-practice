import React, { useState, useEffect } from "react";
import "../components/SignUpForm.css";
import { Button } from "./Button";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function SignUpForm() {
  const initialValues = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  // const [signUpFormValues, setFormValues] = useState(initialValues);
  // const [formErrors, setFormErrors] = useState({});
  // const [isSubmitting, setIsSubmitting] = useState(false);

  const submitForm = (signUpFormValues) => {
    console.log(signUpFormValues);
  };

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormValues({ ...signUpFormValues, [name]: value });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setFormErrors(validate(signUpFormValues));
  //   setIsSubmitting(true);
  // };

  // const validate = (values) => {
  //   let errors = {};
  //   if (!values.username) {
  //     errors.username = "Cannot be blank";
  //   }
  //   const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  //   if (!values.email) {
  //     errors.email = "Cannot be blank";
  //   } else if (!regex.test(values.email)) {
  //     errors.email = "Invalid email format";
  //   }
  //   if (!values.password) {
  //     errors.password = "Cannot be blank";
  //   } else if (values.password.length < 4) {
  //     errors.password = "Password must be more than 4 characters";
  //   }
  //   if (!values.confirmPassword) {
  //     errors.confirmPassword = "Cannot be blank";
  //   } else if (values.confirmPassword.length < 4) {
  //     errors.confirmPassword = "Password must be more than 4 characters";
  //   } else if (values.password != values.confirmPassword) {
  //     errors.confirmPassword = "Passwords didn't match";
  //   }
  //   return errors;
  // };

  const SignUpSchema = Yup.object().shape({
    username: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Username is required"),
    email: Yup.string().email().required("Email is required"),

    password: Yup.string()
      .required("Password is required")
      .min(6, "Password is too short - should be 6 chars minimum"),

    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), ""], "Password must match")
      .required("Required"),
  });

  // useEffect(() => {
  //   if (Object.keys(formErrors).length === 0 && isSubmitting) {
  //     submitForm();
  //   }
  // }, [formErrors]);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={SignUpSchema}
      onSubmit={submitForm}
    >
      {(formik) => {
        return (
          <Form className="signUpForm">
            <h1>Sign Up</h1>
            <div className="form-group">
              <label>Username</label>
              <Field
                type="text"
                name="username"
                className="form-control"
                placeholder="First name"
              />
              <ErrorMessage name="username" component="div" />
            </div>

            <div className="form-group">
              <label>Email address</label>
              <Field
                type="email"
                name="email"
                className="form-control"
                placeholder="Enter email"
              />
              <ErrorMessage name="email" component="div" />
            </div>

            <div className="form-group">
              <label>Password</label>
              <Field
                type="password"
                name="password"
                className="form-control"
                placeholder="Enter password"
              />
              <ErrorMessage name="password" component="div" />
            </div>

            <div className="form-group">
              <label>Confirm Password</label>
              <Field
                type="password"
                name="confirmPassword"
                className="form-control"
                placeholder="Confirm password"
              />
              <ErrorMessage name="confirmPassword" component="div" />
            </div>

            <Button buttonStyle="btn--custom" type="submit">
              Sign Up
            </Button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default SignUpForm;
