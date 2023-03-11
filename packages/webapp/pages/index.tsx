import { Button } from '@proboard/ui';
import React from 'react';
import { CardCollection } from '../components/Cards';
import { PageBanner } from '../components/PageBanner';

export function Index() {
  return (
    <>
      <PageBanner />
      <ProjectsSection />
    </>
  );
}

const mockData = {
  logo: "A",
  project: {
    author: "Rhen",
    name: "Nike Clone",
    description: "Nike mobile clone app. You can view listing of your nike info here. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
  }
}

const ProjectsSection = () => {
  return (
    <section className="w-full py-10 md:px-10 md:py-20 min-h-[400px] relative z-10">
      <div className="max-w-7xl m-auto px-4 md:px-0">
        <div className="grid grid-flow-rows md:grid-flow-col justify-between items-center overflow-hidden gap-4">
          <h4 className="text-4xl">Collections</h4>
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

        <div className="mt-8 grid md:grid-cols-3 lg:grid-cols-3 gap-8">
          {
            Array(8).fill("").map((_, index: number) => (
              <CardCollection {...mockData} key={`${index}`} />
            ))
          }
        </div>
      </div>
    </section>
  );
};

export default Index;
