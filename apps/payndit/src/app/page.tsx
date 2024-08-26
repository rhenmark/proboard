import Link from 'next/link';
import PageBanner from '../components/page-banner';
import PageFooter from '../components/page-footer';
import PageHeader from '../components/page-header';
import ServicesCategory from '../components/service-category';

export default async function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.css file.
   */
  return (
    <>
      <div className="min-h-screen min-w-screen pb-10">
        <PageHeader />
        <PageBanner />
        <ServicesCategory />
        <ServiceLanding title="Popular find" />
        <ServiceLanding title="Top Providers" />
      </div>
      <PageFooter />
    </>
  );
}

const ServiceLanding = ({ title }: { title: string }) => {
  return (
    <div className="container m-auto px-4">
      <div className="mt-24 w-full overflow-auto">
        <h1 className="text-2xl text-black/80">{title}</h1>
        <div className="flex flex-row gap-4 mt-8 overflow-x-scroll">
          {Array(6)
            .fill('')
            .map((item, index) => (
              <Link key={index} href={`/service/${index}`}>
              <div className="w-[400px] h-[200px] bg-gray-300" />
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};
