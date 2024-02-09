import React from "react"

const techBlogCategories = [
    "All",
    "Artificial Intelligence",
    "Machine Learning",
    "Web Development",
    "Mobile App Development",
    "Data Science",
    "Cybersecurity",
    "Internet of Things (IoT)",
    "Tech Industry News",
    "Gadgets and Devices",
    "Software Development",
    "Tech Reviews",
    "Blockchain Technology",
    "Tech Careers and Skills",
    "Open Source",
    "UX/UI Design",
    "E-commerce Technology",
    "Networking",
    "Tech Events and Conferences",
    "Coding Tips and Tricks",
    "Startups and Entrepreneurship in Tech",
    "Geek Culture",
];
const Blog = () => {
    return (
        <div className="min-h-screen container mx-auto overflow-hidden my-8">
            <div className="flex flex-row flex-nowrap w-full pb-4 overflow-x-scroll gap-4">
                {
                    techBlogCategories.map((item) => (
                        <div key={item} className="border py-2 flex items-center cursor-pointer hover:border-primary hover:bg-primary hover:text-white">
                            <span className="text-sm inline-block px-4 whitespace-nowrap">{item}</span>
                        </div>
                    ))
                }
            </div>
            <hr />
            <Latest />
        </div >
    )
}

const Latest = () => {
    return (
        <div className="latest mt-8 mb-4">
            <div className="m-2">
                <span className="font-bold text-xl">Latest Blog</span>
            </div>
            <div className="grid grid-cols-4 gap-4">
                {
                    Array(12).fill("").map((item, index) => (
                        <div key={index} className="w-full mb-4">
                            <div className="w-full h-60 bg-gray-100"></div>
                            <div className="mt-4 grid">
                                <span>Title</span>
                                <span className="text-sm font-light block whitespace-normal line-clamp-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
                            </div>
                            <div className="flex gap-2 mt-2 text-sm">
                                <span>Author Name</span>
                                <span>•</span>
                                <span>{index} min read</span>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Blog;