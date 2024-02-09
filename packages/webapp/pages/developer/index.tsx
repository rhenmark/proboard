import React from "react"
import { ContentWrapper } from "../../components/wrapper/Wrapper";

const Developers = () => {
    return (
        <div>
            <div className="py-4 bg-[#C3D1BB]">
                <ContentWrapper>
                    <h4 className="text-2xl font-bold text-[#666666]">Developers</h4>
                </ContentWrapper>
            </div>
            <ContentWrapper>
                <div className="mt-8 grid grid-cols-4 gap-8">
                    {Array(8).fill("").map((item, index) => (
                        <div key={index} className="p-4 rounded-md bg-[#BAC9DC] min-h-[240px] box-border w-full overflow-hidden">
                            <div className="h-[120px] w-[120px] rounded-full bg-[#4e5b6b]"></div>
                            <span className="whitespace-normal mt-4 block whitespace-break-spaces font-bold text-[#666666]">Software Developer</span>
                            <span className="whitespace-normal overflow-hidden text-xs line-clamp-2 pt-2 text-[#666666]">Hi, my name is John Doe and Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
                            <div className="flex gap-2 mt-2">
                                {Array(3).fill("").map(((item, key) => (
                                    <div className="h-[32px] w-[32px] rounded-full bg-[#A4B0C0]" key={key}></div>
                                )))}
                            </div>
                        </div>
                    ))}
                </div>
            </ContentWrapper>
        </div>
    )
}

export default Developers;