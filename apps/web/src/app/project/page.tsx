import { ContentWrapper } from '../../components/wrapper/Wrapper';
import client from '../../utils/apollo-client';
import { GET_PROJECTS_LIST } from '../../query/home';
import CardCollection from '../../components/cards/CardCollection';
import Link from 'next/link';

const listing = ['Web', 'Mobile', 'Hybrid', 'ReactNative', 'Flutter', 'UI/UX'];
const Project = async () => {
    const { loading, projects } = await getData();

    return (
        <div>
            <div className="py-4 bg-[#C3D1BB]">
                <ContentWrapper>
                    {/* <h4 className="text-2xl text-black font-[500] px-4 md:px-0">Projects</h4> */}
                </ContentWrapper>
            </div>
            <ContentWrapper>
                <div className="min-h-screen p-4">
                    <div className="grid grid-rows-1 md:grid-cols-[30%_1fr] md:gap-4 py-4 md:py-8 items-center w-full">
                        <div>
                            <h2 className="text-2xl font-semibold">Popular</h2>
                        </div>
                        <div className="flex justify-end w-full overflow-x-scroll pb-4 md:pb-0 gap-2  ">
                            <ul className="list-item gap-2 w-full md:flex items-end justify-end overflow-auto">
                                {listing.map((item) => (
                                    <li
                                        key={item}
                                        className="p-[10px_24px] inline-flex rounded-full border border-slate-100 cursor-pointer hover:bg-slate-100 ml-2 mb-2"
                                    >
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {loading ? (
                            <LoadingPreview />
                        ) : (
                            projects.map((item: any) => {
                                return (
                                    <Link href={`/project/${item.slug}`} key={item.slug}>
                                        <CardCollection
                                            project={{
                                                developer: item.developer,
                                                title: item.title,
                                                description: item.shortDescription,
                                                imageUrl: item?.imagePreview?.url,
                                            }}
                                        />
                                    </Link>
                                );
                            })
                        )}
                    </div>
                </div>
            </ContentWrapper>
        </div>
    );
};

const LoadingPreview = () => {
    return Array(6)
        .fill('')
        .map((item, index) => (
            <div className="h-[280px] shadow-sm bg-gray-100 rounded-sm" key={index}>
                Cards
            </div>
        ));
};

async function getData() {
    const { data, loading } = await client.query({ query: GET_PROJECTS_LIST });
    return {
        loading,
        projects: data?.proboardCollection?.items || [],
    };
}

export default Project;
