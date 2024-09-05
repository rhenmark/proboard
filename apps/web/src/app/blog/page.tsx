import React from "react"
import Filter from "./filter";
import { ContentWrapper } from "../../components/wrapper/Wrapper";
import client from "../../utils/apollo-client";
import { GET_BLOGS_LIST } from "../../query/blogs";
import Image from "next/image";
import Link from "next/link";

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

const BlogList = async () => {
    const {blogs, loading} = await getData();

    return (<div className="grid grid-cols-1 md:grid-cols-3 px-4 md:px-0 gap-4 mt-14">
        {loading ?
         <div  className="w-full mb-4">
            <div className="w-full h-60 bg-gray-100 animate-pulse"></div>
            <div className="mt-4 grid">
                <span></span>
                <span className="text-sm font-light block whitespace-normal line-clamp-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
            </div>
            <div className="flex gap-2 mt-2 text-sm">
                <span></span>
                <span>•</span>
                <span></span>
            </div>
        </div>
         : 
            blogs?.map((blog: any, index: string) => (
                <div key={index} className="w-full mb-4 relative">
                    <Link href={`blog/${blog.slug}`} className="absolute z-10 left-0 right-0 top-0 bottom-0" />
                    <div className="w-full h-60 bg-gray-100 relative">
                        <Image alt="" fill src={blog.mediaCollection.items[0]?.url}/>
                    </div>
                    <div className="mt-4 flex flex-wrap flex-col gap-2">
                        <h4 className="inline-block w-full font-medium">{blog.title}</h4>
                        <span className="text-sm font-light block whitespace-normal line-clamp-2">{blog.metaDescription}</span>
                    </div>
                    <div className="flex gap-2 mt-2 text-sm">
                        <span>{blog.author.username}</span>
                        <span>•</span>
                        <span>{index} min read</span>
                    </div>
                </div>
            ))
        }
    </div>)
}

async function getData() {
    const { data, loading } = await client.query({
      query: GET_BLOGS_LIST,
      fetchPolicy: 'no-cache',
    });

  
    return {
      loading,
      blogs: data?.blogCollection?.items || [],
    };
  }
  

export default Blog;