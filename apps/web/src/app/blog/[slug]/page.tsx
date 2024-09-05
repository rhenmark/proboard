import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import {
  blogContentOptions,
  contentOptions,
} from 'apps/web/src/common/content-utils';
import { GET_BLOGS_ITEM } from 'apps/web/src/query/blogs';
import client from 'apps/web/src/utils/apollo-client';
import Link from 'next/link';

const BlogItem = async ({ params: { slug } }: any) => {
  const { blog, loading, error } = await getData({ slug });
  return (
    <div className="container mx-auto">
      <div className="mx-auto my-8 bg-white w-full  rounded-lg overflow-hidden">
        <div className="p-6 flex flex-col gap-2 w-full overflow-hidden">
          <div className="w-fit">
            <Link
              href={'./'}
              className="mb-4 flex flex-row gap-2 items-center w-40"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#000"
              >
                <path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z" />
              </svg>
              Back
            </Link>
          </div>
          <h1 className="text-3xl font-bold mb-2">{blog.title}</h1>
          <p className="text-sm text-gray-600 mb-4">
            <span>By {blog.author.username}</span> | <span>{}</span>
          </p>
          <div>
            <img
              src={blog.mediaCollection.items[0].url}
              alt={blog.title}
              className="w-full h-[400px] object-contain"
            />
          </div>
          {documentToReactComponents(blog.content?.json, blogContentOptions)}
        </div>
      </div>
    </div>
  );
};

const getData = async ({ slug }: { slug: string }) => {
  const {
    data,
    loading,
    error = null,
  } = await client.query({
    query: GET_BLOGS_ITEM,
    variables: {
      slug: slug,
    },
  });

  return {
    blog: data?.blogCollection?.items[0] || null,
    loading,
    error,
  };
};

export default BlogItem;
