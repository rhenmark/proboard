'use client';

import { useState } from 'react';

const techBlogCategories = [
    'All',
    'Artificial Intelligence',
    'Machine Learning',
    'Web Development',
    'Mobile App Development',
    'Data Science',
    'Cybersecurity',
    'Internet of Things (IoT)',
    'Tech Industry News',
    'Gadgets and Devices',
    'Software Development',
    'Tech Reviews',
    'Blockchain Technology',
    'Tech Careers and Skills',
    'Open Source',
    'UX/UI Design',
    'E-commerce Technology',
    'Networking',
    'Tech Events and Conferences',
    'Coding Tips and Tricks',
    'Startups and Entrepreneurship in Tech',
    'Geek Culture',
];

const Filter = () => {
    const [activeFilter, setActiveFilter] = useState(techBlogCategories[0]);
    return (
        <div className="flex flex-row flex-nowrap w-full pb-4 overflow-x-scroll gap-4 px-4 md:px-0">
            {techBlogCategories.map((item) => (
                <div
                    key={item}
                    className={`border-2 px-2 border-black py-2 flex items-center cursor-pointer hover:border-primary rounded-full hover:bg-primary hover:text-white ${activeFilter === item ? 'bg-primary text-white' : ''
                        }`}
                    role="button"
                    onClick={() => setActiveFilter(item)}
                >
                    <span className="inline-block px-4 whitespace-nowrap ">
                        {item}
                    </span>
                </div>
            ))}
        </div>
    );
};
export default Filter;
