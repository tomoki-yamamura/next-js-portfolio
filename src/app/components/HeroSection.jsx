import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-7 place-self-center">
          <h1 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold">
            I'm Tomoki
          </h1>
          <p className="text-[#ADB7BE] text-lg lg:text-xl">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        <div className="col-span-5">
          <div className="rounded-full bg-[#181818] w-500 h-400 relative">
            <Image
              src="/images/hero-image.jpeg"
              alt="hero image"
              width={300}
              height={300}
              className="absolute transform -translate-x-1/2"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
