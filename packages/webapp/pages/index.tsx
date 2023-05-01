import { Button } from '@proboard/ui';
import React from 'react';
import { CardCollection } from '../components/Cards';
import { PageBanner } from '../components/PageBanner';
import client from '../utils/apollo-client';
import { GET_PROJECTS_LIST } from '../query/home';
import Link from 'next/link';
export function Index({ projects }) {
  return (
    <>
      <PageBanner />
      <ProjectsSection projects={projects} />
    </>
  );
}

Index.getInitialProps = async () => {
  const { data } = await client.query({ query: GET_PROJECTS_LIST });

  return {
    projects: data?.proboardCollection?.items || [],
  };
};

const ProjectsSection = ({ projects }) => {
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
          {projects.map((item, index: number) => {
            return (
              <Link
                href={{
                  pathname: '/project/[slug]',
                  query: {
                    slug: item.slug,
                    id: item?.sys?.id,
                  },
                }}
                as={{
                  pathname: `/project/${item.slug}-${item?.sys?.id}`,
                  query: {
                    id: item?.sys?.id,
                  }
                }}
                key={`${index}`}
              >
                <CardCollection
                  project={{
                    developer: item.developer?.username,
                    title: item.title,
                    description: item.shortDescription,
                  }}
                />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Index;
