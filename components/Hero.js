import Image from "next/image";
import React from "react";
import heroImg from "../images/hero_person.jpg";

export const Hero = () => {
  return (
    <div id="hero" className="w-full bg-black text-white -mt-16">
      <div className="w-4/5 sm:block md:flex mx-auto pt-16">
        <div className="sm:w-full md:w-1/2 flex">
          <div className="block w-3/5 my-auto">
            <h1 className="sm:text-2xl md:text-4xl lg:text-6xl font-bold my-8">
              Developer and SEO specialist
            </h1>
            <p className="text-2xl font-medium  mb-4">
              I develop and optimize websites.
            </p>
            <p className="font-thin mb-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio molestias, assumenda ipsum itaque ipsam magni.
            </p>
            <div className="flex md:mb-8">
              <a
                href="#portfolio"
                className="btn btn-portfolio px-4 py-2 text-black bg-white rounded-3xl sm:text-sm md:text-md lg:text-lg"
              >
                Portfolio
              </a>
              <a
                href="#contact"
                className="btn btn-contact px-4 py-2 ml-4 border border-white rounded-3xl sm:text-sm md:text-md lg:text-lg"
              >
                Contact me
              </a>
            </div>
          </div>
        </div>
        <div className="sm:w-full md:w-1/2 text-center pt-8">
          <Image src={heroImg} alt="Stefan Linde" className="mx-auto" />
        </div>
      </div>
    </div>
  );
};
