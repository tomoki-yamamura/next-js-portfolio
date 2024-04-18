"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>Express</li>
        <li>PostgreSQL</li>
        <li>Sequelize</li>
        <li>JavaScript</li>
        <li>React</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Fullstack Academy of Code</li>
        <li>University of California, Santa Cruz</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>AWS Cloud Practitioner</li>
        <li>Google Professional Cloud Developer</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const selectTab = (nextTab) => {
    startTransition(() => {
      setTab(nextTab);
    });
  };

  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src={"/images/about-image.png"} width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I was involved in the development of electronic tickets as a backend
            engineer. We built a system using gRPC for fast communication,
            enabling entry even in locations with poor network bandwidth like
            the Tokyo Dome. The service handles around 40,000 accesses per day,
            with entry rates peaking at about 40 requests per second.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selecctTab={() => selectTab("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selecctTab={() => selectTab("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selecctTab={() => selectTab("certifications")}
              active={tab === "certifications"}
            >
              Experience
            </TabButton>
          </div>
          <div className="mt-8">{TAB_DATA.find(t => t.id === tab).content}</div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
