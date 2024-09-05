import { ContentWrapper } from '../../components/wrapper/Wrapper';
import client from '../../utils/apollo-client';
import { GET_PROJECTS_LIST } from '../../query/home';
import PageProject from './page-project';

const listing = ['Web', 'Mobile', 'Hybrid', 'ReactNative', 'Flutter', 'UI/UX'];
const Project = async () => {
    const { loading, projects } = await getData();

    return (
        <div>
            <ContentWrapper>
                <div className="min-h-screen p-4 w-full">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4  w-full py-4 mb-8">
                        <div>
                            <h2 className="text-2xl font-semibold">Popular</h2>
                        </div>
                        <div className=" gap-2 w-full flex items-end justify-start md:justify-end overflow-auto">
                            {listing.map((item) => (
                                <div
                                    key={item}
                                    className="p-[10px_24px] inline-flex rounded-full border-2 bg-white border-black cursor-pointer hover:bg-slate-100 ml-2 mb-2"
                                >
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
                        {loading ? (
                            <LoadingPreview />
                        ) : (
                            projects.map((item: any) => {
                                return (
                                    <PageProject item={item} key={item.slug} />
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
