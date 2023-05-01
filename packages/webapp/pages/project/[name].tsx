import React, { useEffect, useState } from 'react';
import { Wrapper } from '../../components/Wrapper';
import client from '../../utils/apollo-client';
import { GET_PROJECT_INFO } from '../../query/project';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import _JSXStyle from 'styled-jsx/style'

const Project = ({ project, loading, error }) => {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    console.log("error ==>", error, loading, project)

    if (typeof window === "undefined" || !mounted || loading || !project) {
        return <div>Loading...</div>
    }

    return (
        <Wrapper>
            <div className="h-full w-screen grid grid-flow-row md:grid-flow-col md:grid-cols-[40%_1fr] px-4 pt-8 lg:container mx-auto">
                <div className="w-full grid place-items-center">
                    <div className="h-[440px] w-full mb-8 md:mb-0 md:w-[80%] lg:w-[60%] bg-slate-400"></div>
                </div>
                <div className="w-full h-full grid items-center gap-4 px-8 md:px-0">
                    <h2 className="text-3xl font-bold">{project.title}</h2>
                    <p className="text-xl">by: {project.developer?.username}</p>
                    <div className="w-full md:w-[75%] description">
                        {documentToReactComponents(project.description?.json)}
                    </div>
                </div>
                <_JSXStyle jsx>
                    {`
                    ol {
                        list-style-type: disc;
                        padding-inline-start: 20px;
                    }
                    .description > p {
                        margin-top: 14px;
                        margin-bottom: 14px;
                    }
                `}
                </_JSXStyle>
            </div>
        </Wrapper>
    );
};

export const getServerSideProps = async (context) => {
    const { data, loading, error = null } = await client.query({
        query: GET_PROJECT_INFO,
        variables: {
            id: `${context?.req?.query?.id}`,
        },
    });

    return {
        props: {
            project: data?.proboard,
            loading,
            error
        },
    };
};

export default Project;
