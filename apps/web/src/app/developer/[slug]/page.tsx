import React from 'react';
import Link from 'next/link';
import { GET_DEVELOPER_INFO } from '../../../query/developer';
import client from '../../../utils/apollo-client';
import { ProfileAvatar } from '../../../components/profile-avatar/ProfileAvatar';
import Wrapper from '../../../components/wrapper/Wrapper';
import Certificates, { DownloadResume, SectionList, StudiesList, WorkExperiences } from './certificates';

export default async function DeveloperPage({ params: { slug } }: { params: { slug: string } }) {
    const data = await getData(slug);

    return (
        <Wrapper>
            {data?.loading || data?.error || !data?.developer ? (
                <div>loading</div>
            ) : (
                <div className="min-h-screen h-auto pb-20 relative w-full px-4 md:max-w-[1280px] md:container mx-auto ">
                    <div className="h-full">
                        <div className=" grid grid-flow-rows md:grid-cols-[30%_1fr] columns-2 gap-10 items-center overflow-x-hidden py-4">
                            <ProfileAvatar url={data?.developer?.profileImage?.url} className="!h-60 !w-60" />
                            <div className="h-full w-full px-4 flex flex-col justify-between">
                                <div className="flex flex-col">
                                    <h2 className="text-3xl text-center md:text-left mb-4">@{data?.developer?.username}</h2>
                                    <p className="text-md text-slate-800 mb-2 font-thin text-center md:text-left">
                                        {data?.developer.currentPosition}
                                    </p>
                                    <SocialMedia items={data?.developer?.socialMedia?.items} />
                                    <DownloadResume />
                                    <div className="mt-12 w-fit">
                                        <WorkExperiences items={data?.developer?.certificates?.items} />
                                        <Certificates items={data?.developer?.certificates?.items} />
                                        <StudiesList />
                                        <SectionList title="Tech Skills & Interest" items={[...data?.developer?.skills?.list, ...data?.developer?.interests?.list]} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </Wrapper>
    );
}


const getData = async (developer: string) => {
    const {
        data,
        loading,
        error = null,
    } = await client.query({
        query: GET_DEVELOPER_INFO,
        variables: {
            username: developer,
        },
        fetchPolicy: 'network-only',
        context: {
            fetchOptions: {
              next: { revalidate: 5 },
            },
        },
    });

    return {
        developer: data?.developerCollection?.items[0] || null,
        loading,
        error,
    };
};

const SocialMedia = (props: any) => {
    return (
        <div className="grid grid-flow-col gap-4 mt-2 justify-center md:justify-start">
            {props?.items.map((item: any, i: number) => (
                <Link href={item.url} key={`${i}`} rel="noopener noreferrer" target="_blank" className='flex items-center flex-row gap-1'>
                    <span className="material-symbols-outlined text-[16px]">
                        link
                    </span>
                    <span className='text-lg'>{item.name}</span>
                </Link>
            ))}
        </div>
    );
};
