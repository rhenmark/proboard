import React from 'react';
import client from '../utils/apollo-client';
import { GET_PROJECTS_LIST } from '../query/home';
import HeroBanner from '../components/page-banner/PageBanner';
import ProjectsSection from '../components/project-section/ProjectSection';
import DeveloperSection from '../components/developer-section/DeveloperSection';

export default async function Index() {
  const data = await getData();

  return (
    <div>
      <HeroBanner />
      <ProjectsSection projects={data?.projects} />
      <DeveloperSection developers={data?.developers} hide={data?.hideDeveloperSection} />
    </div>
  );
}

async function getData() {
  const { data, loading } = await client.query({
    query: GET_PROJECTS_LIST,
    fetchPolicy: 'no-cache',
  });

  return {
    loading,
    projects: data?.proboardCollection?.items || [],
    developers: data?.developerCollection?.items || [],
    hideDeveloperSection: data?.pages?.section?.developer?.hidden
  };
}
