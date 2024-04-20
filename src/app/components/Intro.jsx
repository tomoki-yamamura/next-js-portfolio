import React from "react";
import "../../styles/intro.css";

const Intro = () => {
  return (
    <main className="h-screen overflow-hidden">
    <div className="h-full overflow-hidden bg-[#090a0f] relative">
      <p className="text-[#4ee] absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 text-white sm:text-xl md:text-2xl lg:text-4xl font-extrabold">Hello, I'm Software Engineer...</p>;
      <div
        id="stars"
      ></div>
    </div>
  </main>
  );
};

export default Intro;
