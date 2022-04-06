import React from "react";
import { ContactForm } from "./Form";

export const Contact = () => {
  return (
    <section id="contact" className="bg-black">
      <div className="w-4/5 flex mx-auto py-8 text-white px-8">
        <div className="w-1/2 my-auto">
          <h2 className="text-white text-6xl font-medium my-8">Contact</h2>
          <p className="text-xl">
            If you wish to contact me, the best way is to write to me directly
            via email or contact form.
          </p>
          <p className="text-4xl font-light my-8">
            <span className="font-medium">E-mail: </span>
            linde@ste.fans
          </p>
        </div>
        <div className="w-1/2">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};
