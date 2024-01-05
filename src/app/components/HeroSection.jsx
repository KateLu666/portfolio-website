"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

function HeroSection() {
  return (
    <section className="md:mb-40 md:pt-24">
      <div className="grid grid-cols-1 sm:grid-cols-12 mt-16 lg:mt-20 md:mt-20">
        <div className="col-span-7 lg:mt-20 mt-3 place-self-center text-center lg:text-left">
          <h1 className="text-white mb-6 text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#756AB6] via-[#AC87C5] to-[#E0AED0]  ">
              Hello, I&apos;m{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Kate Lu",
                2000,
                "Software Engineer",
                2000,
                "Full-Stack Developer",
                2000,
              ]}
              wrapper="span"
              speed={150}
              style={{ fontSize: "6xl", display: "inline-block" }}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-lg lg:text-xl mb-6">
            A full stack web developer specializing in modern, responsive web
            applications. With a strong blend of design and coding skills, I
            bring ideas to life through innovative and efficient solutions.
          </p>
          <div>
            <button className="w-full sm:w-fit px-6 py-3 rounded-full mr-4 bg-gradient-to-br from-[#AC87C5] via-[#E0AED0] to-[#FFE5E5] text-white font-bold">
              <a href="#contact">Hire Me</a>
            </button>
            <a
              href="/Kate_Lu_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-fit mt-5"
            >
              <button className="px-1 py-1 rounded-full mr-4 bg-gradient-to-br from-[#AC87C5] via-[#E0AED0] to-[#FFE5E5] text-white font-bold">
                <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                  Download CV
                </span>
              </button>
            </a>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-8">
          <Image
            src="/images/hero-image.png"
            alt="Portfolio Image"
            width={400}
            height={400}
            priority
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
