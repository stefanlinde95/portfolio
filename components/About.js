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
          <h2 className="text-5xl font-medium py-8 mt-8">About</h2>
          <p className="my-4">
            Kuigi täna olen veebiarendaja, siis vabakutselise teenusepakkujana
            olen teinud põhimõtteliselt kõik töid, mida üks agentuur saab
            pakkuda. Alates disainimisest ja Google AdWordsi seadistamisest
            lõpetadest Custom disain lahenduste väljatöötamisega ja
            arendamisega. Just eelnevat pean ka üheks omaks tugevuseks, sest
            suudan näha projekti erinevatest vaatenurkadest.
          </p>
          <a href="#" className="underline text-grey">
            Curriculum vitae
          </a>
        </div>
        <div className="sm:w-full lg:w-1/2 text-center mt-8">
          <Image
            className="rounded-full"
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
