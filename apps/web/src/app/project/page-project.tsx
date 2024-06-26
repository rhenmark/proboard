'use client';

import { useRouter } from 'next/navigation'
import { CardCollection } from "../../components/cards";

const PageProject = ({item}: any) => {
    const router = useRouter()

    const handleClick = (slug: string) => {
        router.push(`/project/${slug}`)
    }

    return (
        <div role='button' onClick={() => handleClick(item.slug)} key={item.slug}>
            <CardCollection
                project={{
                    developer: item.developer,
                    title: item.title,
                    description: item.shortDescription,
                    imageUrl: item?.imagePreview?.url,
                }}
            />
        </div>
    );
}

export default PageProject