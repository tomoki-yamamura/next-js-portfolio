"use client"
import Image from "next/image";
import { useEffect, useState } from "react";
import HeroSection from "./components/HeroSection"
import AboutSection from "./components/AboutSection"
import ProjectsSection from "./components/ProjectsSection";
import Navbar from "./components/Navbar"
import Intro from "./components/Intro"
import "../styles/home.css"
export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 2 * 1000);
  }, [])

  return (
    isLoading ? (
      <div>
        <Intro />
      </div>
    ) : (
      <main className="fadeIn flex min-h-screen flex-col bg-[#121212]">
        <Navbar />
        <div className="container mx-auto px-12">
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
        </div>
      </main>
    )
  );
};



// export default function Home() {
//   return (
//     <main >
//       <main className="flex min-h-screen flex-col bg-[#121212]">
//         <Navbar />
//         <div className="container mx-auto px-12">
//           <HeroSection />
//           <AboutSection />
//           <ProjectsSection />
//         </div>
//       </main>
//     </main>
//   );
// }