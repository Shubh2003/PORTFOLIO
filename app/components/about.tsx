import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@nextui-org/react";
export default function About() {
  return (
    <section id="about" style={{ zIndex: 10 }}>
      <h1 className="text-6xl text-center font-extrabold my-16">About </h1>
      <div className="grid grid-cols-1 lg:grid-cols-12  my-4 lg:my-16 ">
        <div className="col-span-6 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative ">
            <Image
              src="/images/about.png"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-lg"
              alt="Intro Image"
              width={300}
              height={200}
            />
          </div>
        </div>
        <div className="col-span-6 place-self-center  my-8 lg-mt-0">
          <p className="text-justify">
            An enthusiastic and results-driven with a strong passion for Full Stack Development
             and Flutter development.I also bring versatility with front-end skills
            in ReactJS, JavaScript, TypeScript, and Node.js. With a strong foundation in C++, Typescript, and
            various developer tools, I am passionate about Full Stack and
            Android Development.
          </p>
          <div className="text-center">
            <Button color="secondary" className="mt-4 text-l ">
              <Link
                href="/data/Shubham_resume.pdf"
                target="_blank"
                download
              >
                Download Resume
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
