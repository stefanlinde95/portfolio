import React from "react";
import { Formik, Form } from "formik";
import { TextField } from "./TextField";
import * as Yup from "yup";

export const ContactForm = () => {
  const validate = Yup.object({
    firstName: Yup.string()
      .max(15, "Name field can`t be longer than 15 chars")
      .required("Email is required"),
    email: Yup.string().email("Email is invalid").required("Email is required"),
    firstName: Yup.string().max(15, "Name field can`t be longer than 15 chars"),
  });
  return (
    <Formik
      initialValues={{
        firstName: "",
        email: "",
        textarea: "",
      }}
      validationSchema={validate}
    >
      {(formik) => (
        <div className="my-8 px-4 mx-auto">
          <Form className="py-4">
            <TextField label="Name" name="firstName" type="text" />
            <TextField label="Email" name="email" type="email" />
            <div className="my-4">
              <label
                htmlFor="message"
                className="block mb-4 text-2xl font-light"
              >
                Message
              </label>
              <textarea
                id="message"
                className="borded block text-xl p-2 w-full text-black"
                label="Message"
                name="textarea"
                type="text"
                rows={5}
              />
            </div>

            <button
              type="submit"
              className="mt-8 text-xl border bg-white text-black px-4 py-2 rounded hover:bg-black hover:text-white hover:border transition duration-500"
            >
              Send
            </button>
          </Form>
        </div>
      )}
    </Formik>
  );
};
