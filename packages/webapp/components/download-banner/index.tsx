import Image from "next/image";
import React from "react";
import { ContentWrapper } from "../wrapper/Wrapper";

const DownloadBanner = () => {
    return (
        <div className="relative w-full bg-[#4A8A64] h-[500px] px-[60px] py-10">
            <ContentWrapper>
                <div className="w-auto flex flex-col justify-center h-full">
                    <span className="block text-[60px] font-bold text-[#F9F9F9]">Get the App</span>
                    <span className="block text-lg text-[#F9F9F9]">Download the app and see new updates</span>
                    <div className="flex mt-10 gap-4">
                        <Image src="/images/google-play-store.svg" width="100" height="124" alt="playstore" />
                        <Image src="/images/apple-store.svg" width="100" height="124" alt="playstore" />
                    </div>
                </div>
                <Image src="/images/phone-download.svg" width="640" height="610" alt="app" className="absolute right-0 top-0" />
            </ContentWrapper>

        </div>
    )
}

export default DownloadBanner;