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
"use client"
import { useEffect, useState } from "react";
import Intro from "./components/Intro"
export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 2 * 1000);
  }, [])

  return(
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      {isLoading ?
      <div>
         //Load中の処理
      </div>
      : <div>
         //Load後の処理
      </div>
      }
    </Layout>
  )

  return (
    {isLoading ?
      <Intro />
    }
  )
};
