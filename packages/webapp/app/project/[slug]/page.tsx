

import React, { useEffect, useState } from 'react';
import Wrapper from '../../../components/wrapper/Wrapper';
import client from '../../../utils/apollo-client';
import { GET_PROJECT_INFO } from '../../../query/project';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Developer from '../../../components/developer/Developer';
import Image from 'next/image';
import Link from 'next/link';
import { contentOptions } from '../../../common/content-utils';

const Project = async ({ params: { slug } }) => {
    const data = await getData({ slug })
    const project = data?.project;
    const asset = project?.assetsCollection?.items[0]
    // const [mounted, setMounted] = useState(false);
    // // workaround
    // const [asset, setAsset] = useState(undefined);

    // useEffect(() => {
    //     setMounted(true);
    // }, []);

    // useEffect(() => {
    //     setAsset(project?.assetsCollection?.items[0]);
    // }, [project]);

    // if (typeof window === 'undefined' || !mounted || loading || !project) {
    //     return <div>Loading...</div>;
    // }

    console.log("project.description?.json ==>", project.description?.json)

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
                    <div className="w-full h-full md:px-0">
                        <div className="w-full md:w-[75%] description font-light">
                            {documentToReactComponents(project.description?.json, contentOptions)}
                        </div>
                    </div>
                    <div className="w-full">
                        <div className="w-full mb-8 md:mb-0 sticky top-36 ">
                            {asset?.contentType.includes('video') && (
                                <video
                                    controls
                                    muted
                                    autoPlay
                                    className="w-full h-[500px] object-cover object-left"
                                >
                                    <source src={asset?.url} type="video/mp4" />
                                    <source src={asset?.url} type="video/webm" />
                                    Your browser does not support the video tag.
                                </video>
                            )}
                            {asset?.contentType.includes('image') && (
                                <Image width={800} height={400} alt={''} src={asset?.url} />
                            )}
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
                                                    </span>{' '}
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
                                                    Github{' '}
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

const getData = async ({ slug }) => {
    console.log("slug ==>", slug)
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
