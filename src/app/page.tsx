// import Image from "next/image";
// import HeroSection from "./components/HeroSection"
// import AboutSection from "./components/AboutSection"
// import ProjectsSection from "./components/ProjectsSection";
// import Navbar from "./components/Navbar"

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
import Intro from "./components/Intro"
export default function Home() {
  return (
    <main className="h-screen overflow-hidden bg-[#090a0f]">
      <Intro />
    </main>
  );
};
