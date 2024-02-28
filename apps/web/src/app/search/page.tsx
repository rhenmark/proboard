'use client';

import { Button } from '@core-ui';
import { ContentWrapper } from '../../components/wrapper/Wrapper';
import { useRouter, useSearchParams } from 'next/navigation';

const SearchQuery = () => {
    const router = useRouter()
    const searchParams = useSearchParams();
    const search = searchParams.get('query');

    const handleClick = () => {
        router.replace("/")
    }

    return (
        <ContentWrapper>
            <div className="py-10 min-h-[60vh]  grid place-items-center px-4 md:px-0">
                <div>
                    <span className='text-xl'>
                        Search results: <span className="font-bold text-4xl">{search}</span>
                    </span>
                    <div className='mt-8 w-full'>
                        <span className='text-4xl block pb-4'>Uh-oh! Give another try, maybe?</span>
                        <span className='text-sm block'>Keep trying different keywords, and who knows, you might uncover the digital pot of gold!</span>
                    </div>
                    <Button className='bg-primary text-white mt-8 !px-8 !py-4' onClick={handleClick}>
                        Back to home
                    </Button>
                </div>
            </div>
        </ContentWrapper>
    );
};

export default SearchQuery;
