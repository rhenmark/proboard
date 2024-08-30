
"use client"

import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Page = () => {
    const router = useRouter();
    useEffect(() => {
        router.push(`/dashboard/messages/1`)
    }, [])
    return (
        <div></div>
    )
}
export default Page;

