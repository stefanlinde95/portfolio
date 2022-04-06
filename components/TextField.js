import React from "react";
import { ErrorMessage, useField } from "formik";

export const TextField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="mt-4">
      <label htmlFor={field.name} className="block mb-4 text-2xl font-light">
        {label}
      </label>
      <input
        className={`borded block text-xl p-2 w-full text-black ${
          meta.touched &&
          meta.error &&
          "invalid:border-pink-500 invalid:text-pink-600"
        }`}
        {...field}
        {...props}
      />
      <ErrorMessage component="div" name={field.name} className="mt-2 error" />
    </div>
  );
};
