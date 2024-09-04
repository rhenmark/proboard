import React from 'react';
import { ContentWrapper } from '../../components/wrapper/Wrapper';
import client from '../../utils/apollo-client';
import { GET_DEVELOPER_LIST } from '../../query/developer';
import Image from 'next/image';
import Link from 'next/link';

const Developers = async () => {
  const { loading, developers } = await getData();

  return (
    <div className="h-screen">
      <div className="py-4">
        <ContentWrapper>
          {/* <h4 className="text-2xl text-black font-[500]">Developers</h4> */}
        </ContentWrapper>
      </div>
      <ContentWrapper>
        {/* <div className="p-4 rounded-md bg-green-700 min-h-[240px] box-border w-full overflow-hidden">
                                <div className="h-[120px] w-[120px] rounded-full bg-[#4e5b6b] relative">
                                    <Image src={item?.profileImage?.url} fill alt={""} className="w-full h-full rounded-full object-cover bg-white" />
                                </div>
                                <span className="whitespace-normal mt-4 block font-bold text-white ">{item?.username}</span>
                                <span className="whitespace-normal overflow-hidden text-xs line-clamp-2 pt-2 text-white w-full">{item?.currentPosition}</span>
                            </div> */}
        <div className="mt-8 p-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          {loading ? (
            <LoadingPreview />
          ) : (
            [...developers, ...new Array(8).fill('')]?.map(
              (developer: any, index: any) => (
                <div
                  className="max-w-sm min-h-40 bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden relative"
                  key={index}
                >
                     <Link href={`developer/${developer.username}`} className='absolute top-0 left-0 right-0 bottom-0' />
                  <div className="h-[120px] w-[120px] rounded-full bg-black relative px-4 m-4" >
                    <Image
                      src={developer?.profileImage?.url}
                      fill
                      alt={''}
                      className="w-full h-full rounded-full object-cover bg-white/40"
                    />
                  </div>
                  <div className="p-5">
                    <h5 className="text-lg font-bold text-gray-900">
                      {developer.username}
                    </h5>
                    <p className="text-gray-700">{developer.currentPosition}</p>
                  </div>
                </div>
              )
            )
          )}
        </div>
      </ContentWrapper>
    </div>
  );
};

const LoadingPreview = () => {
  return Array(4)
    .fill('')
    .map((item, key) => {
      return (
        <div
          className="p-4 rounded-md bg-[#BAC9DC] min-h-[240px] box-border w-full overflow-hidden"
          key={key}
        >
          <div className="h-[120px] w-[120px] rounded-full bg-[#4e5b6b] animate-pulse"></div>
          <span className="whitespace-normal mt-4 block font-bold text-[#666666]  w-1/3 h-4 bg-gray-400 mb-2"></span>
          <span className="whitespace-normal overflow-hidden text-xs line-clamp-2 pt-2 text-[#666666] w-full h-4 bg-gray-400 animate-pulse"></span>
          <div className="flex gap-2 mt-2">
            {Array(3)
              .fill('')
              .map((item, key) => (
                <div
                  className="h-[32px] w-[32px] rounded-full bg-[#A4B0C0]"
                  key={key}
                ></div>
              ))}
          </div>
        </div>
      );
    });
};

async function getData() {
  const { data, loading } = await client.query({
    query: GET_DEVELOPER_LIST,
    fetchPolicy: 'network-only',
  });
  return {
    loading,
    developers: data?.developerCollection?.items || [],
  };
}

export default Developers;
