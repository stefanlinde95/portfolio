import React from "react";
import Image from "next/image";
import githubIcon from "../images/github.svg";
import linkIcon from "../images/link.svg";
import authorImg from "../images/stefanLinde.jpg";

export const About = () => {
  return (
    <section id="about" className="bg-white py-8">
      <div className="lg:w-4/5 sm:w-full mx-auto py-8 sm:block md:flex">
        <div className="w-full lg:w-1/2 pb-8 px-16 lg:px-0">
          <h2 className="text-5xl font-medium py-8">About</h2>
          <p className="my-4">
            Hi! My name is Stefan Linde and I am a developer from Tallinn,
            Estonia. I built my very first static website back in{" "}
            <strong>2020</strong>. Today I use mainly{" "}
            <strong>React (NextJS)</strong> and Wordpress although I have also used
            Laravel Blade in my projects.
          </p>
          <p className="my-4">
            Although I am a freelance web developer today I have done
            basically all the work that one agency can offer. From branding and
            setting up Google AdWords to developing web solutions. I also
            consider the above to be one of my strengths, because I can see the
            project from different perspectives.
          </p>
          <p>
            Since I create websites with good SEO in mind I can say that most of
            my clients customers come from search engines (organic traffic).
          </p>
        </div>
        <div className="w-full lg:w-1/2 text-center mt-8">
          <Image
            className="rounded-full mt-16"
            src={authorImg}
            width={300}
            height={300}
            alt="Stefan Linde"
          />
        </div>
      </div>
    </section>
  );
};
