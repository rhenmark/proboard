import Image from "next/image"
import React from "react"
import { Button } from "@core-ui"
import { ContentWrapper } from "../wrapper/Wrapper"


const PageBanner = () => (
    <div className="w-screen h-[400px] bg-[#163121] relative px-[24px] md:px-[60px] flex flex-col justify-center gap-[40px] box-border">
        <ContentWrapper className="flex flex-col justify-center gap-[40px]">
            <div className="overflow-hidden">
                <h2 className="text-white text-[48px] md:w-[450px] font-bold leading-[50px]">Your project board collection</h2>
                <Image src="/images/banner-line.svg" height={400} width={300} alt="" />
            </div>
            <div className="bg-white h-[80px] md:w-[580px] px-[16px] py-[6px] pr-0 grid grid-cols-[1fr_max-content] box-border relative">
                <input placeholder="Looking for something?" className="h-full outline-none placeholder:text-dark box-border" />
                <Button className="hover:shadow-none">
                    <Image src="/images/icon-search.svg" height={47} width={47} alt="" className="" />
                </Button>
            </div>
            {/* <Image src="/images/banner-img.svg" height={400} width={300} alt="" className="absolute right-0 top-10 hidden md:block" /> */}
        </ContentWrapper>
    </div>
)

export default PageBanner