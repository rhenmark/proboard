'use client';

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Button } from '@core-ui';
import Image from 'next/image';
import CardCollection from '../cards/CardCollection';

enum FilterType {
    ALL = 0,
    MOBILE = 1,
    WEB = 2,
    BOTH = 3,
}

const filterOptions = [
    { label: 'All', value: FilterType.ALL },
    { label: 'Mobile', value: FilterType.MOBILE },
    { label: 'Web', value: FilterType.WEB },
];

export const ProjectsSection = ({ projects }: any) => {
    const [filter, setFilter] = useState<FilterType>(FilterType.ALL);
    const [mounted, setMounted] = useState<boolean>(false)

    useEffect(() => {
        setMounted(true);
    }, []);


    const handleTap = (type: FilterType) => {
        setFilter(type);
    };

    return (
        <div className="w-full py-10 md:px-10 md:py-20 min-h-[400px] relative z-10">
            <div className="max-w-7xl m-auto px-4 md:px-0">
                <div className="grid grid-flow-rows md:grid-flow-col justify-between items-center overflow-hidden gap-4">
                    <div>
                        <h4 className="text-4xl font-medium">PROJECTS</h4>
                        <Image
                            src="/images/project-line.svg"
                            height={8}
                            width={150}
                            alt=""
                        />
                    </div>
                    <div className="grid grid-flow-col justify-end gap-2 md:gap-4">
                        {filterOptions.map((item) => (
                            <Button
                                key={item.label}
                                onClick={() => handleTap(item.value)}
                                className={`rounded-full p-2 px-8 text-white hover:bg-black !hover:text-white transition-colors ${item.value === filter
                                    ? 'bg-black'
                                    : 'border-black border !text-black'
                                    }`}
                            >
                                {item.label}
                            </Button>
                        ))}
                    </div>
                </div>

                <div className="mt-8 grid md:grid-cols-3 gap-6">
                    {projects?.length && mounted ? projects
                        ?.filter((item: { type: FilterType }) => {
                            return filter === 0 ? item.type : item.type === filter;
                        })
                        .map(
                            (
                                item: {
                                    slug: string;
                                    developer: Record<string, unknown>;
                                    title: string;
                                    shortDescription: string;
                                    imagePreview: { url: string };
                                },
                                index: number
                            ) => {
                                return (
                                    <Link href={`/project/${item.slug}`} key={`${index}`}>
                                        <CardCollection
                                            project={{
                                                developer: item.developer,
                                                title: item.title,
                                                description: item.shortDescription,
                                                imageUrl: item?.imagePreview?.url,
                                            }}
                                        />
                                    </Link>
                                );
                            }
                        ) :
                        Array(6).fill("").map((_: any, index: any) => (
                            <div key={index} className="rounded-[20px] h-[450px] w-full bg-slate-200 flex hover:shadow-md animate-pulse relative border"></div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default ProjectsSection;
