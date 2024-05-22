import Image from "next/image"
import React from "react"
import { ProfileAvatar } from "../profile-avatar/ProfileAvatar"
import Developer from "../developer/Developer"

interface CardCollectionProp {
    logo?: string | React.ReactNode
    project: {
        developer?: {
            username?: string
            profileImage?: {
                url?: string
            }
        }
        title: string
        description: string
        links?: [unknown]
        imageUrl?: string
    },
    categories?: [string]
    onClick?: () => void
}


const mockImg = "https://images.unsplash.com/photo-1551650975-87deedd944c3"

const CardCollection = (props: CardCollectionProp) => (
    <div className="rounded-md h-[450px] w-full bg-slate-200 flex hover:cursor-pointer hover:shadow-md relative " onClick={props?.onClick} role="button">
        <div className="rounded-t-md h-[95%] w-full relative">
            <Image src={props.project?.imageUrl || mockImg} fill alt={""} className="object-cover rounded-t-md" />
        </div>
        <div className="bg-white self-end align-bottom h-48 py-6 px-8 flex-col w-full overflow-hidden absolute">
            <div className="w-full">
                <h2 className="line-clamp-1">{props.project.title}</h2>
                <hr className="w-full my-2 border-slate-200" />
            </div>
            <div className="grid grid-cols-[auto_1fr] gap-4 items-center pb-4">
                <ProfileAvatar url={props.project?.developer?.profileImage?.url} small />
                <Developer developer={props.project.developer} />
            </div>
            <div className="box-border overflow-hidden pb-2 h-auto">
                <span className="text-sm font-light line-clamp-2 whitespace-normal" title={props.project.description}>{props.project.description}</span>
            </div>
        </div>
    </div>
)

export default CardCollection