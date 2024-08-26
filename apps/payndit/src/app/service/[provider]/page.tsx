import Link from 'next/link';
import { withHeader } from '../../../components/page-wrapper';
import GoogleIcon from 'apps/payndit/src/components/google-icon';


const plumbingServices = [
    "Emergency Plumbing Repairs",
    "Leak Detection and Repair",
    "Drain Cleaning and Unclogging",
    "Water Heater Installation and Repair",
    "Pipe Installation and Replacement",
    "Bathroom and Kitchen Remodeling",
    "Faucet and Fixture Installation",
    "Sewer Line Inspection and Repair",
    "Sump Pump Installation and Maintenance",
    "Water Softener Installation",
    "Garbage Disposal Repair and Installation",
    "Backflow Prevention and Testing"
  ];

const Provider = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <div>
        <h4 className="text-3xl">Plumbing Services</h4>
      </div>
      <div className="mt-10">
        <div className="grid grid-cols-2 gap-4">
          <div className="min-h-[500px] h-full bg-slate-300 rounded-md"></div>
          <div className="grid grid-cols-2 gap-4">
            {new Array(4).fill('').map((item, i) => (
              <div key={i} className="bg-slate-300"></div>
            ))}
          </div>
        </div>
        <div className="mt-10 grid grid-cols-[1fr_30%] gap-10">
          <div>
            <div className="grid gap-2">
              <h4 className="text-xl">Plumbing service</h4>
              <span className="text-xl">Bacolod City, 5km away</span>
              <div className="mt-8 pr-10">
                <span className="text-xl font-bold">What we offer</span>
                <p className='py-4 text-lg'>
                  We offer reliable and professional plumbing services for both
                  residential and commercial properties. Whether you need
                  emergency repairs, routine maintenance, or new installations,
                  our experienced plumbers are equipped to handle all your
                  needs. From fixing leaks and unclogging drains to installing
                  water heaters and remodeling bathrooms, we ensure quality
                  workmanship and prompt service every time.
                </p>
                <ul className="pl-2 text-lg mt-4">
                    {
                        plumbingServices.map((item: string) => {
                            return <li key={item} className='list-disc'>{item}</li>
                        })
                    }
                </ul>
                <div className='mt-8'>
                    <hr />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="grid grid-flow-col gap-2 items-start justify-start text-xl">
              <GoogleIcon icon="kid_star" className=" text-red-500" />
              <span> 4.5 </span>
              <Link href={'/service/as/reviews'}>(100 reviews)</Link>
            </div>
            <div className="mt-8 text-white">
              <button className="w-full bg-primary p-4 rounded-md">
                Send a message
              </button>
              <button className="w-full border border-primary p-4 mt-4 text-black rounded-md">
                Locate
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withHeader(Provider);
