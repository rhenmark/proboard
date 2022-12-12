import { LightModeIcon, DarkModeIcon, GithubIcon, Button } from "@proboard/ui"
import Link from "next/link";
import { externalLink } from "../common/AppLinks";

const roundedClassName = "p-2 h-[48px] w-[48px] rounded grid place-items-center hover:bg-slate-500"
const Header = () => {
  return (
    <div className="grid grid-flow-col justify-end items-center md:px-10 gap-2">
      <Button className={roundedClassName}>
        <LightModeIcon width={28} color="#fff" />
      </Button>
      <Button className={roundedClassName}>
        <DarkModeIcon width={28} color="orange" />
      </Button>
      <Link href={externalLink.github}>
        <Button className={roundedClassName}>
          <GithubIcon width={28} color="#fff" />
        </Button>
      </Link>
    </div>
  )
}

export function Index() {
  return (
    <>
      <div className="w-screen h-screen bg-black">
        <div
          className="h-full grid grid-rows-[80px_1fr]"
          style={{ background: 'url(/images/header-background.svg)' }}
        >
          <Header />
          <main className="h-full grid place-items-center">
            <div className="mb-[5%]">
              <h4 className="text-8xl text-slate-300">ProBoard</h4>
              <span className="text-amber-600 text-xl border-l-8 pl-2 w-80 block">Rhen's project collection</span>
            </div>
          </main>
        </div>
      </div>
      <ProjectsSection />
      <CollaborateSection />
    </>
  );
}

const ProjectsSection = () => {
  return (
    <section className="w-full py-10 md:py-20 min-h-[400px]">
      <div className="max-w-7xl m-auto px-4 md:px-0">
        <h4 className="text-4xl">Projects</h4>
        <div className="mt-8 grid md:grid-cols-3 gap-4">
          {
            Array(6).fill("e").map((_, index) => (
              <div className="w-full h-[220px] md:h-[320px] rounded-sm shadow-sm bg-slate-200" key={index}></div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

const CollaborateSection = () => {
  return (
    <section className="bg-slate-200 h-[300px] relative">
      <video autoPlay loop muted className="object-cover">
        <source src="/videos/bg_lines.mp4" type="video/mp4" />
      </video>
      <div className="fixed top-0 bg-red bottom-0 w-[100%] z-20"></div>
    </section>
  )
}

export default Index;
