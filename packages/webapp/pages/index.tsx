import React from 'react';
import client from '../utils/apollo-client';
import { GET_PROJECTS_LIST } from '../query/home';
import dynamic from 'next/dynamic';
import HeroBanner from '../components/page-banner/PageBanner';

const DeveloperSection = dynamic(
  () => import('../components/developer-section/DeveloperSection')
);
const ProjectSection = dynamic(
  () => import('../components/project-section/ProjectSection'),
);
const DownloadBanner = dynamic(
  () => import('../components/download-banner/'),
);
export function Index({ projects, developers }) {
  return (
    <div>
      <HeroBanner />
      <ProjectSection projects={projects} />
      <DeveloperSection developers={developers} />
      <DownloadBanner />
    </div >
  );
}

Index.getInitialProps = async () => {
  const { data } = await client.query({ query: GET_PROJECTS_LIST });
  return {
    projects: data?.proboardCollection?.items || [],
    developers: data?.developerCollection?.items || [],
  };
};


export default Index;
