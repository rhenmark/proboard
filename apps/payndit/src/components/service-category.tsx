"use client"


const mockCategory = Array(8).fill("");

const ServicesCategory = () => {
    return (
        <div className="container m-auto px-4 mt-4">
        <div className="grid grid-flow-col gap-3 overflow-x-scroll w-full">
            {
               mockCategory.map((_, index) => (
                <div key={index} className={`bg-gray-300 h-20 w-18 animate-pulse delay-[${75 + (Number(index) * 20)}ms]`} />
               ))
            }
        </div>
        </div>
    )
}

export default ServicesCategory