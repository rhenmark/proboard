import React from 'react';
import Link from 'next/link';
import { GET_DEVELOPER_INFO } from '../../query/developer';
import client from '../../utils/apollo-client';
import Image from 'next/image';
import { Button, OpenIcon } from '@proboard/ui';
import dynamic from 'next/dynamic';

const Wrapper = dynamic(() => import("../../components/Wrapper/Wrapper"), {
    ssr: false
})

export default function DeveloperPage(props) {
    const { developer, loading, error } = props;

    return (
        <Wrapper>
            {loading || error ? (
                <div>loading</div>
            ) : (
                <div className="h-full w-full px-4 pt-8 md:max-w-[1280px] md:container mx-auto ">
                    <div className="">
                        <div className=" grid grid-flow-rows md:grid-cols-[30%_70%] columns-2 gap-10 items-center overflow-x-hidden py-4">
                            <ProfileAvatar url={developer?.profileImage?.url} className="!h-60 !w-60" />
                            <div className="h-full w-full px-4 flex flex-col justify-between">
                                <div className="flex flex-col">
                                    <h2 className="text-3xl text-center md:text-left">@{developer.username}</h2>
                                    <p className="text-md text-slate-800 font-thin mb-2 text-center md:text-left">
                                        {developer.currentPosition}
                                    </p>
                                    <SocialMedia items={developer?.socialMedia?.items} />
                                    <Certificates items={developer?.certificates?.items} />
                                    <SectionList title="Skills" items={developer?.skills?.list} />
                                    <SectionList title="Interests" items={developer?.interests?.list} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </Wrapper>
    );
}

export const ProfileAvatar = (props) => {
    let classNames = `h-32 w-32 rounded-full bg-black grid place-self-center md:place-self-end md:self-start relative  ${props?.className}`
    if (props.small) {
        classNames = `!h-10 !w-10 ${classNames}`
    }

    if (!props?.url) {
        return <div className={classNames} />;
    }

    return (
        <div className={classNames}>
            <Image
                src={props?.url}
                alt="avatar"
                className="object-cover rounded-full overflow-hidden absolute"
                fill
            />
        </div>
    );
};

export const getServerSideProps = async (context) => {
    const {
        data,
        loading,
        error = null,
    } = await client.query({
        query: GET_DEVELOPER_INFO,
        variables: {
            username: context?.query?.developer,
        },
    });

    return {
        props: {
            developer: data?.developerCollection?.items[0] || null,
            loading,
            error,
        },
    };
};

const SocialMedia = (props) => {
    return (
        <div className="grid grid-flow-col gap-4 mt-2 justify-center md:justify-start">
            {props?.items.map((item, i) => (
                <Link href={item.url} key={i} rel="noopener noreferrer" target="_blank" className='flex items-center flex-row gap-1'>
                    <span className="material-symbols-outlined text-[16px]">
                        link
                    </span>
                    <span className='text-lg'>{item.name}</span>
                </Link>
            ))}
        </div>
    );
};

const SectionList = (props) => {
    if (!props?.items) {
        return null;
    }
    return (
        <div className="mt-12 w-fill ">
            <h2 className="mb-4">{props.title}</h2>
            <div className="flex flex-row flex-wrap">
                {props?.items.map((item) => (
                    <span
                        key={item}
                        className="rounded-full mr-2 mb-2 p-1 px-4 bg-slate-300 text-sm"
                    >
                        {item}
                    </span>
                ))}
            </div>
        </div>
    );
};

const Certificates = (props) => {
    if (!props?.items) {
        return null;
    }

    return (
        <div className="mt-12 w-fill ">
            <h2 className="mb-4">Certifications</h2>
            <div className="grid grid-flow-row gap-4">
                {props?.items.map((item) => (
                    <div className='grid grid-flow-row border-b-[1px] border-slate-200 pb-4' key={item?.name}>
                        <span className="font-medium text-lg">{item?.name}</span>
                        <span>By: {item?.issuing_organization}</span>
                        <span>Issued: {item?.issue_date}</span>
                        <Link href={item?.credential_url} rel="noopener noreferrer" target="_blank" className='mt-2 w-auto inline-block'>
                            <Button className='bg-slate-800 text-white p-1 px-2 rounded-full grid grid-flow-col gap-2'>Show credential
                                <OpenIcon color="white" width={24} />
                            </Button>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};
