import React from "react"
import { ContentWrapper } from "../../components/wrapper/Wrapper";
import client from '../../utils/apollo-client';
import { GET_DEVELOPER_LIST } from "../../query/developer";
import Image from "next/image"
import Link from "next/link";


const Developers = async () => {
    const { loading, developers } = await getData()

    return (
        <div>
            <div className="py-4 bg-[#C3D1BB]">
                <ContentWrapper>
                    <h4 className="text-2xl text-black font-[500]">Developers</h4>
                </ContentWrapper>
            </div>
            <ContentWrapper>
                <div className="mt-8 grid grid-cols-4 gap-8">
                    {loading ? <LoadingPreview /> : developers?.map((item: any, index: any) => (
                        <Link href={`developer/${item.username}`} key={index} >
                            <div className="p-4 rounded-md bg-[#68c491] min-h-[240px] box-border w-full overflow-hidden">
                                <div className="h-[120px] w-[120px] rounded-full bg-[#4e5b6b] relative">
                                    <Image src={item?.profileImage?.url} fill alt={""} className="w-full h-full rounded-full object-cover" />
                                </div>
                                <span className="whitespace-normal mt-4 block font-bold text-white ">{item?.username}</span>
                                <span className="whitespace-normal overflow-hidden text-xs line-clamp-2 pt-2 text-white w-full">{item?.currentPosition}</span>
                                {/* <div className="flex gap-2 mt-2">
                                    {Array(3).fill("").map(((item, key) => (
                                        <div className="h-[32px] w-[32px] rounded-full bg-[#A4B0C0]" key={key}></div>
                                    )))}
                                </div> */}
                            </div>
                        </Link>
                    ))}
                </div>
            </ContentWrapper >
        </div >
    )
}

const LoadingPreview = () => {
    return Array(4).fill("").map((item, key) => {
        return (
            <div className="p-4 rounded-md bg-[#BAC9DC] min-h-[240px] box-border w-full overflow-hidden" key={key}>
                <div className="h-[120px] w-[120px] rounded-full bg-[#4e5b6b] animate-pulse"></div>
                <span className="whitespace-normal mt-4 block font-bold text-[#666666]  w-1/3 h-4 bg-gray-400 mb-2"></span>
                <span className="whitespace-normal overflow-hidden text-xs line-clamp-2 pt-2 text-[#666666] w-full h-4 bg-gray-400 animate-pulse"></span>
                <div className="flex gap-2 mt-2">
                    {Array(3).fill("").map(((item, key) => (
                        <div className="h-[32px] w-[32px] rounded-full bg-[#A4B0C0]" key={key}></div>
                    )))}
                </div>
            </div>
        )
    })
}

async function getData() {
    const { data, loading } = await client.query({ query: GET_DEVELOPER_LIST, fetchPolicy: 'network-only', });
    return {
        loading,
        developers: data?.developerCollection?.items || [],
    };
}


export default Developers;