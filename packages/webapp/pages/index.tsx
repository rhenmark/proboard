import { LightModeIcon, DarkModeIcon, GithubIcon, Button, HorizontalDots, Image } from '@proboard/ui';
import Link from 'next/link';
import { externalLink } from '../common/AppLinks';
import Particles from 'react-particles';
import React, { useCallback } from 'react';
import { loadFull } from 'tsparticles';

const ParticleBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <Particles
      id="tsparticles"
      url="/particles/bg-1.json"
      init={particlesInit}
      loaded={particlesLoaded}
      height={"100vh"}
      width={"100%"}
      className="!w-screen !h-screen"
      canvasClassName="!w-screen !h-screen"
    />
  );
};

const roundedClassName =
  'p-2 h-[48px] w-[48px] rounded grid place-items-center hover:bg-slate-500';
const Header = () => {
  return (
    <header className="grid grid-flow-col justify-end items-center md:px-10 gap-2 relative z-10">
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
    </header>
  );
};

export function Index() {
  return (
    <>
      <div className="w-screen h-screen bg-black relative">
        <div
          className="h-full grid grid-rows-[80px_1fr]"
          style={{ background: 'url(/images/header-background.svg)' }}
        >
          <Header />
          <main className="h-full grid place-items-center">
            <div className="mb-[5%]">
              <h4 className="text-8xl text-slate-300">ProBoard</h4>
              <span className="text-amber-600 text-xl border-l-8 pl-2 w-80 block">
                Rhen's project collection
              </span>
            </div>
          </main>
        </div>
        <ParticleBackground />
      </div>
      <ProjectsSection />
    </>
  );
}

const ProjectsSection = () => {
  const today = new Date()
  return (
    <section className="w-full py-10 md:px-10 md:py-20 min-h-[400px] relative z-10">
      <div className="max-w-7xl m-auto px-4 md:px-0">
        <div className="grid grid-flow-rows md:grid-flow-col justify-between items-center overflow-hidden gap-4">
          <h4 className="text-4xl">Projects</h4>
          <div className="grid grid-flow-col justify-end gap-2 md:gap-4">
            <Button className="rounded-full p-2 px-8 bg-black text-white hover:bg-black hover:text-white transition-colors">
              All
            </Button>
            <Button className="rounded-full p-2 px-8 border-2 border-black hover:bg-black hover:text-white transition-colors">
              Mobile
            </Button>
            <Button className="rounded-full p-2 px-8 border-2 border-black hover:bg-black hover:text-white transition-colors">
              Web
            </Button>
          </div>
        </div>

        <div className="mt-8 grid md:grid-cols-3 lg:grid-cols-4 gap-4">
          {Array(6)
            .fill('e')
            .map((_, index) => (
              <Link href={`/project/${index}`} key={index}>
                <div
                  className="w-full h-[220px] md:h-[320px] rounded-sm shadow-sm bg-slate-200 grid p-4"
                >
                  <div className='grid grid-flow-col justify-between w-full items-start'>
                    <div className='h-12 w-12 shadow-sm rounded-md p-2 bg-white grid place-items-center'>
                      <span className='text-3xl text-bold'>A</span>
                    </div>
                    <div className='grid items-start'>
                      <HorizontalDots width={24} />
                    </div>
                  </div>
                  <div>
                    <h4 className='text-lg'>Project Name</h4>
                    <ul className='text-sm list-disc pl-4 opacity-90'>
                      <li>Description 1</li>
                      <li>Description 2</li>
                    </ul>
                  </div>
                  <div className='grid place-items-center'>
                    <div className="relative pt-1 w-full">
                      <div className="overflow-hidden h-1 mb-4 text-xs flex rounded bg-slate-400">
                        <div style={{ width: "30%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-slate-500"></div>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-[auto_auto] justify-between items-center">
                    <div>
                      {today.toLocaleDateString()}
                    </div>
                    <div>
                      <Image />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Index;
