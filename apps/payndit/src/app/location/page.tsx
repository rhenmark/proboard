'use client';

import { withHeader } from "../../components/page-wrapper"

const mockItems = new Array(24).fill("")
const Location = () => {
    return (
        <div className="h-[calc(100dvh-90px)] bg-black/90">
            <div className="grid grid-flow-col grid-cols-[60%_1fr] h-full grid-rows-1 relative">
                <div className="bg-white h-full p-4">
                    <div className="py-4"><h4>Find by Location</h4></div>
                    <div className="grid grid-cols-3 gap-4 w-full ">
                        {
                            mockItems.map((item, i) => {
                                return (
                                    <div className="h-64 w-full bg-gray-300 rounded-md" key={i}></div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="h-full bg-red-100 sticky top-0">Right</div>
            </div>
        </div>
    )
}

export default withHeader(Location)