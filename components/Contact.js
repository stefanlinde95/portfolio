import React from "react";
import { ContactForm } from "./Form";

export const Contact = () => {
  return (
    <section id="contact" className="bg-black">
      <div className="sm:w-full md:w-4/5 sm:block md:flex mx-auto py-8 text-white px-8">
        <div className="sm:w-full md:w-1/2 my-auto">
          <h2 className="text-white text-6xl font-medium my-8">Contact</h2>
          <p className="text-xl lg:pr-8">
            If you wish to contact me, the best way is to write to me via email
            or contact form.
          </p>
          <p className="text-4xl font-light my-8">
            <span className="font-medium">E-mail: </span>
            linde@ste.fans
          </p>
        </div>
        <div className="sm:w-full md:w-1/2">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};
