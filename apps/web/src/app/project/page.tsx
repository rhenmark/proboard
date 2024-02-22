import React from "react"
import { ContentWrapper } from "../../components/wrapper/Wrapper";


const listing = ["Web", "Mobile", "Hybrid", "ReactNative", "Flutter", "UI/UX"]
const Project = () => {
    return (
        <div>
            <div className="py-4 bg-[#C3D1BB]">
                <ContentWrapper>
                    <h4 className="text-2xl font-bold text-[#666666]">Projects</h4>
                </ContentWrapper>
            </div>
            <ContentWrapper>
                <div className="min-h-screen p-4">
                    <div className="grid grid-cols-[30%_1fr] gap-4 py-8 items-center">
                        <div>Popular</div>
                        <div className="overflow-x-auto">
                            <ul className="list-none gap-2 flex justify-end">
                                {
                                    listing.map((item) => (
                                        <li key={item} className="p-[10px_24px] inline-flex rounded-full border border-slate-100 cursor-pointer hover:bg-slate-100">
                                            <span>{item}</span>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 gap-8">
                        {
                            Array(12).fill("").map((item, index) =>
                                <div className="h-[280px] shadow-sm bg-gray-100 rounded-sm" key={index}>Cards</div>
                            )
                        }
                    </div>
                </div>
            </ContentWrapper>
        </div>

    )
}

export default Project;