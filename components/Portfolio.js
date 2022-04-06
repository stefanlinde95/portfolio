import React from "react";
import Image from "next/image";
import { data } from "./data";

export const Portfolio = () => {
  return (
    <section id="portfolio" className="bg-white pb-8">
      <div className="w-4/5 mx-auto pt-14">
        <h2 className="text-5xl font-medium text-center pb-4">Portfolio</h2>
        <ul className="my-8 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.map((item) => {
            const { id, name, image, description, keywords, url, github } =
              item;
            return (
              <li key={id} className="my-4">
                <div
                  className="border border-1 rounded-xl overflow-hidden"
                  style={{ height: `100%` }}
                >
                  <>
                    <a href={url} target="_blank" rel="noopener noreferrer">
                      <Image
                        className="hover:scale-125 hover:rounded-t-lg transition duration-500 rounded-t-xl"
                        src={image}
                        width="100%"
                        height="50px"
                        layout="responsive"
                        objectFit="cover"
                        alt={name}
                      />
                    </a>
                  </>
                  <div className="px-4 portfolio-links">
                    <h3 className="text-xl font-medium pt-4">{name}</h3>
                    <a
                      href={url}
                      className="underline text-grey"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visit website
                    </a>
                    {github && (
                      <>
                        {" /"}
                        <a
                          href={github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-grey ml-2 underline"
                        >
                          GitHub
                        </a>
                      </>
                    )}
                    <p className="text-grey">{description}</p>
                    <div className="my-4 height-full">
                      {keywords.map((keyword, i) => {
                        return (
                          <div
                            key={++i}
                            className="mx-1 my-2 badge rounded-xl font-medium px-3 py-2"
                          >
                            {keyword}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
          <div className="px-4 m-auto">
            <h2 className="text-4xl text-grey font-bold">And many more ...</h2>
            <p className="text-grey text-xl mt-2">
              If you have a specific question or want to see another project,
              you can contact me
            </p>
          </div>
        </ul>
      </div>
    </section>
  );
};
