"use client"

import Image from "next/image";
import { useRouter } from 'next/navigation'


const mockCategory = Array(8).fill("");
const categories = [
    {
        name: "Home Services",
        icon: "/icons/home-services.png"
    },
    {
        name: "Automotive Services",
        icon: "/icons/automotive-service.png"
    },
    {
        name: "Construction and Renovation",
        icon: "/icons/construction-and-renovation.png"
    },
    {
        name: "Professional Services",
        icon: "/icons/professiona-services.png"
    },
    {
        name: "Health and Wellness",
        icon: "/icons/health-and-wellness.png"
    },
    {
        name: "Education and Tutoring",
        icon: "/icons/education-and-tutoring.png"
    },
    {
        name: "Technology Services",
        icon: "/icons/technology-services.png"
    },
    {
        name: "Creative and Media Services",
        icon: "/icons/creative-and-media.png"
    },
    {
        name: "Business and Office Support",
        icon: "/icons/business-and-office.png"
    }
]

const ServicesCategory = () => {
     const router = useRouter()

    const handleClick = () => {
        router.push(`/categories/`)
    }

    return (
        <div className="container m-auto px-4 mt-4">
        <div className="grid grid-flow-col gap-3 overflow-x-scroll w-full">
            {
               categories.map((category, index) => (
                <div onClick={handleClick} role="anchor" key={index} className={`w-28 grid place-items-center`}>
                    <div className="bg-gray-100 h-16 w-16 rounded-full grid place-items-center pb-2">
                        <Image src={category.icon} height={40} width={40} alt={category.name}  />
                    </div>
                    <div className="min-h-14 w-full text-center pt-4">
                        <span className="text-center">
                            {category.name}
                        </span>
                    </div>
                </div>
               ))
            }
        </div>
        </div>
    )
}

export default ServicesCategory