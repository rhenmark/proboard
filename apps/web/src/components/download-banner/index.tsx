import Image from "next/image";
import React from "react";
import { ContentWrapper } from "../wrapper/Wrapper";

const DownloadBanner = () => {
    return (
        <div className="relative w-full bg-[#4A8A64] px-[24px] md:px-[60px] py-10">
            <ContentWrapper>
                <div className="w-auto flex flex-col justify-center h-full">
                    <span className="block text-[54px] md:text-[60px] font-bold text-[#F9F9F9] leading-[58px] mb-2">Get the App</span>
                    <span className="block text-lg text-[#F9F9F9]">Download the app and see new updates</span>
                    <div className="flex mt-10 gap-4 justify-start">
                        <Image src="/images/google-play-store.svg" width="80" height="124" alt="playstore" />
                        <Image src="/images/apple-store.svg" width="80" height="124" alt="playstore" />
                    </div>
                </div>
                {/* <Image src="/images/phone-download.svg" width="640" height="610" alt="app" className="absolute right-0 top-0 hidden md:block" /> */}
            </ContentWrapper>

        </div>
    )
}

export default DownloadBanner;