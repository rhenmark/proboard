import React from "react"
import Filter from "./filter";
import { ContentWrapper } from "../../components/wrapper/Wrapper";

const Blog = () => {
    return (
        <ContentWrapper>
        <div className="min-h-screen container mx-auto overflow-hidden my-8">
            <Filter />
            <hr />
            <Latest />
            <BlogList />
        </div >
        </ContentWrapper>
    )
}

const Latest = () => {
    return (
        <div className="latest mt-8 mb-4">
            <div className="m-2">
                <span className="font-bold text-xl">Blogs</span>
            </div>
            <div className="h-max w-full grid place-items-center">
                {/* <span>Articles coming soon...</span> */}
            </div>
        </div>
    )
}

const BlogList = () => {
    return (<div className="grid grid-cols-1 md:grid-cols-3 px-4 md:px-0 gap-4 mt-14">
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
    </div>)
}

export default Blog;