import React, { Key } from 'react';
import Wrapper from '../../../components/wrapper/Wrapper';
import client from '../../../utils/apollo-client';
import { GET_PROJECT_INFO } from '../../../query/project';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Developer from '../../../components/developer/Developer';
import Link from 'next/link';
import { contentOptions } from '../../../common/content-utils';
import AssetSlider from '../../../components/asset-slider/AssetSlider';


const Project = async ({ params: { slug } }: any) => {
  const data = await getData({ slug });
  const project = data?.project;
  const asset = project?.assetsCollection?.items;

  return (
    <Wrapper>
      <div className="max-w-[1280px] m-auto pt-8 pb-32">
        <div className="mb-4 px-4 md:px-0">
          <h2 className="text-3xl font-bold">{project.title}</h2>
          <p className="text-md">
            <Developer developer={project.developer} />
          </p>
        </div>
        <div className="h-full w-screen grid grid-flow-row md:grid-flow-col md:grid-cols-[1fr_45%] md:gap-10 px-4 md:px-0 lg:container mx-auto">
          <div className="w-full h-full md:px-0 order-last md:order-first">
            <div className="w-full md:w-[75%] description font-light">
              {documentToReactComponents(
                project.description?.json,
                contentOptions
              )}
            </div>
          </div>
          <div className="w-full">
            <div className="w-full mb-8 md:mb-0 sticky top-36 ">
              <AssetSlider assets={asset} />
              <div className="mt-4">
                <ul className="list-none flex flex-row gap-4">
                  {project?.links?.website && (
                    <li>
                      <Link
                        href={project?.links?.website}
                        passHref
                        legacyBehavior
                      >
                        <a
                          href={project?.links?.website}
                          target="_blank"
                          className="flex items-center gap-2"
                        >
                          <span className="material-symbols-outlined">
                            globe
                          </span>
                          Website
                        </a>
                      </Link>
                    </li>
                  )}
                  {project?.links?.github && (
                    <li>
                      <Link
                        href={project?.links?.github}
                        passHref
                        legacyBehavior
                      >
                        <a
                          href={project?.links?.github}
                          target="_blank"
                          className="flex items-center gap-2 hover:opacity-50 hover:scale-[1.1]"
                        >
                          <span className="material-symbols-outlined">
                            code
                          </span>
                          Github
                        </a>
                      </Link>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const getData = async ({ slug }: { slug: string }) => {
  const {
    data,
    loading,
    error = null,
  } = await client.query({
    query: GET_PROJECT_INFO,
    variables: {
      slug: slug,
    },
  });

  return {
    project: data?.proboardCollection?.items[0] || null,
    loading,
    error,
  };
};

export default Project;
