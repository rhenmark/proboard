import React from "react"
import { Wrapper } from "../../components/Wrapper"
import client from '../../utils/apollo-client';
import { GET_PAGES_INFO } from "../../query/pages";
import { Button } from '@proboard/ui';
import Link from "next/link";
import Image from "next/image"

const Auth = (props) => {
    return (
        <Wrapper>
            <div className="auth_container w-full h-[calc(100%_-_80px) overflow-hidden">
                <div className="h-full w-full p-4 flex flex-col items-center justify-center gap-4">
                    {
                        props?.pages?.isDown && (
                            <>
                                <Image src="/images/in-progress.png" height={800} width={800} alt="" />
                                <div className="grid grid-flow-row md:grid-flow-col gap-2 w-full md:justify-center md:items-center">
                                    <Link href="/" className="w-full md:w-auto">
                                        <Button className="bg-black p-4 px-8 text-lg text-white rounded-sm w-full md:w-[240px]">
                                            Back to home
                                        </Button>
                                    </Link>
                                    <Link href="https://www.linkedin.com/in/rhenmarkcallado/" className="w-full md:w-auto" passHref legacyBehavior>
                                        <a href="https://www.linkedin.com/in/rhenmarkcallado/" target="_blank">
                                            <Button className="bg-black text-white p-4 px-8 text-lg rounded-sm w-full md:w-[240px]">
                                                Contact Me
                                            </Button>
                                        </a>
                                    </Link>
                                </div>
                            </>
                        )
                    }
                </div>
            </div>
        </Wrapper>
    )
}


export const getServerSideProps = async (context) => {
    try {
        const {
            data,
            loading,
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
            },
        };
    } catch (error) {
        return {
            props: {
                pages: null,
                loading: false,
                error: error.message,
            },
        };
    }
};

export default Auth