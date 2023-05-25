import React from "react"
import { Wrapper } from "../../components/Wrapper"
import client from '../../utils/apollo-client';
import { GET_PAGES_INFO } from "../../query/pages";
import Image from "next/image";
import { Button } from '@proboard/ui';
import Link from "next/link";

const Auth = (props) => {
    return (
        <Wrapper>
            <div className="auth_container w-full h-[calc(100%_-_80px) overflow-hidden">
                <div className="h-full w-full bg-slate-300 p-4 flex flex-col items-center justify-center gap-4">
                    {
                        props?.pages?.isDown && (
                            <>
                                <Image src={props?.pages?.downtimeCover?.url} alt="downtime-cover" height={500} width={500} />
                                <Link href="/" className="w-full md:w-auto">
                                    <Button className="bg-black p-4 px-8 text-lg text-white rounded-sm w-full md:w-auto">
                                        Back to home
                                    </Button>
                                </Link>
                            </>
                        )
                    }
                </div>
            </div>
        </Wrapper>
    )
}


export const getServerSideProps = async (context) => {
    const {
        data,
        loading,
        error = null,
    } = await client.query({
        query: GET_PAGES_INFO,
        variables: {
            name: context?.resolvedUrl,
        },
    });

    return {
        props: {
            pages: data?.pagesCollection?.items[0] || null,
            loading,
            error,
        },
    };
};

export default Auth