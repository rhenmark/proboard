'use client';

import Image from 'next/image';
import { ContentWrapper } from '../wrapper/Wrapper';
import {
  Hits,
  SearchBox,
  useHits,
} from 'react-instantsearch';
import { InstantSearchNext } from 'react-instantsearch-nextjs';
import Link from 'next/link';
import { searchClient } from '../../config/algolia';

const PageBanner = () => {



  return (
    <div className="w-screen h-[400px] bg-[#163121] relative px-[12px] md:px-[60px] flex flex-col justify-center gap-[40px] box-border">
      <ContentWrapper className="flex flex-col justify-center gap-[40px]">
        <div className="overflow-hidden">
          <h2 className="text-white text-[42px] md:pb-4 md:text-[48px] md:w-[450px] font-bold leading-[50px]">
            Your project board collection
          </h2>
          <Image
            src="/images/banner-line.svg"
            height={400}
            width={300}
            alt=""
          />
        </div>
        <Search />
      </ContentWrapper>
    </div>
  );
};



const Search = () => {
  return (
    <div className="relative">
      <InstantSearchNext searchClient={searchClient} indexName="proboard">
        <SearchBox
          classNames={{
            root: 'w-full bg-white h-[80px] md:w-[580px] px-[16px] py-[6px] grid grid-cols-[1fr_max-content] box-border absolute rounded-sm',
            form: 'grid grid-cols-[1fr_auto] gap-2',
            input:
              'h-full outline-none placeholder:text-dark box-border w-[90%] [&::-webkit-search-cancel-button]:hidden bg-white',
            submitIcon: 'h-4 w-4',
            reset: 'absolute right-[10%] md:right-[8%] top-0 bottom-0',
          }}
          placeholder="Search here"
        />
        <HitContainer />
      </InstantSearchNext>
    </div>
  );
};

const HitContainer = () => {
  const { results } = useHits();
  if (results?.query && results?.hits?.length)
    return (
      <Hits
        hitComponent={Hit}
        classNames={{
          root: 'w-full md:w-[580px] absolute top-[82px] bg-white rounded-sm shadow-md  z-50',
          list: 'list-none',
        }}
      />
    );
  return null;
};

function Hit({ hit }: Record<string, any>) {
  return (
    <Link href={`/project/${hit?.url}`} className='w-full '>
      <div className="w-full p-4 hover:bg-slate-100">{hit?.title}</div>
    </Link>
  );
}

export default PageBanner;
