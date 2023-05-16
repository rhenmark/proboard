import Image from "next/image"
import React from "react"

interface CardCollectionProp {
    logo?: string | React.ReactNode
    project: {
        developer: string
        title: string
        description: string
        links?: [unknown]
        imageUrl?: string
    },
    categories?: [string]
}

const RoundedLogo = (props: Pick<CardCollectionProp, "logo">) => {
    const logo = typeof props.logo === "string" ? props.logo.charAt(0) : props.logo

    return (
        <div className="rounded-full bg-black text-white h-10 w-10 grid place-items-center">
            {logo}
        </div>
    )
}

const mockImg = "https://images.unsplash.com/photo-1551650975-87deedd944c3"

const CardCollection = (props: CardCollectionProp) => (
    <div className="rounded-[20px] h-[450px] w-full bg-slate-200 flex shadow-sm hover:shadow-md hover:cursor-pointer relative">
        <div className="h-[95%] w-full relative">
            <Image src={props.project?.imageUrl || mockImg} fill alt={""} className="rounded-[20px] object-cover" />
        </div>
        <div className="bg-white rounded-[20px] self-end align-bottom h-48 py-6 px-8 flex-col w-full overflow-hidden absolute">
            <div className="w-full">
                <h2>{props.project.title}</h2>
                <hr className="w-full my-2 border-slate-200" />
            </div>
            <div className="grid grid-cols-[auto_1fr] gap-4 items-center pb-4">
                <RoundedLogo logo={props.logo} />
                <span>{props.project.developer}</span>
            </div>
            <div className="box-border overflow-hidden line-clamp-2">
                <span className="text-sm font-light" title={props.project.description}>{props.project.description}</span>
            </div>
        </div>
    </div>

)

export default CardCollection