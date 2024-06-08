import algoliasearch from 'algoliasearch/lite';

const ALGO_APP_ID: string = process.env.NEXT_PUBLIC_ALGO_APP_ID as string;
const ALGO_API_KEY: string = process.env.NEXT_PUBLIC_ALGO_API_KEY as string;

const searchClient = algoliasearch(ALGO_APP_ID, ALGO_API_KEY);

export { searchClient };
