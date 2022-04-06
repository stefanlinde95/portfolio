import React, { useState } from "react";

import { Card, Text, Badge, CardSection } from "@mantine/core";
import Image from "next/image";
import { data } from "./data";

export const Portfolio = () => {
  return (
    <section id="portfolio">
      <div className="w-4/5 mx-auto pt-14">
        <h2 className="text-5xl font-medium text-center pb-4">Portfolio</h2>
        <ul className="my-8 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.map((item) => {
            const { id, name, image, description, keywords, url, github } =
              item;
            return (
              <li key={id} className="px-4 my-4">
                <Card
                  className="border border-1 rounded-xl"
                  style={{ height: `100%` }}
                >
                  <Card.Section>
                    <a href={url} target="_blank" rel="noopener noreferrer">
                      <Image
                        className="hover:scale-125 transition duration-500"
                        src={image}
                        width="100%"
                        height="50px"
                        layout="responsive"
                        objectFit="cover"
                        alt={name}
                      />
                    </a>
                  </Card.Section>
                  <CardSection className="px-4">
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
                    <Text mt="md" color="dimmed">
                      {description}
                    </Text>
                    <div className="my-4 height-full">
                      {keywords.map((keyword, i) => {
                        return (
                          <Badge key={++i} className="mx-1 my-2" color="orange">
                            {keyword}
                          </Badge>
                        );
                      })}
                    </div>
                  </CardSection>
                </Card>
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
