import GoogleIcon from 'apps/payndit/src/components/google-icon';
import Link from 'next/link';

const Services = () => {
  return (
    <div className="p-8 bg-gray-50 min-h-[calc(100vh-120px)]">
      <div className="w-full flex flex-row items-center justify-between pb-4 border-b border-black/20 sticky top-0 bg-inherit z-10">
        <div className="w-full">
          <h4 className="text-2xl">Service Listing</h4>
        </div>
        <div className="w-full flex flex-row justify-end items-center gap-4 h-full">
          <div className="grid gap-4 grid-flow-col pr-4 border-r border-r-black/90 h-full">
            <GoogleIcon icon="view_list" className="text-2xl" />
            <GoogleIcon icon="grid_view" className="text-2xl" />
          </div>
          <Link href="services/new" className="bg-primary text-white p-4 rounded-sm flex flex-row items-center">
            <GoogleIcon icon="add" />
            New Listing
          </Link>
        </div>
      </div>
      <div className="mt-10">
        {
            new Array(8).fill("").map((_, index) => {
                return (
                    <ListItem key={index} />
                )
            })
        }
      </div>
    </div>
  );
};

const ListItem = () => {
    return (
        <div className="grid grid-flow-col justify-between items-center gap-8 hover:bg-slate-300 p-4 hover:rounded-md cursor-pointer border-b-2 border-gray-300/20 relative">
        <Link href="/dashboard/services/1" className='absolute left-0 right-0 h-full' />
      <div className="h-20 w-20 rounded-md bg-primary/40"></div>
      <div className="w-60">
        <h4>Laundry Services</h4>
        <span>Lorem ipsum dolor</span>
      </div>
      <div className="flex flex-col gap-4">
        <div>
          <span className="p-2 bg-slate-200 rounded-md">Home Services</span>
        </div>
        <div>
          <span className="p-2 bg-slate-200 rounded-md">Laundry</span>
        </div>
      </div>
      <div>
        <span>25 visits</span>
        <div>
          <span>10 inquiries</span>
        </div>
      </div>
      <div>
        <span>4 stars</span>
        <div>
          {new Array(5).fill('').map((_, index) => (
            <GoogleIcon key={index} icon="kid_star" />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div>
          <span className="p-2 bg-green-500 rounded-md">Active</span>
        </div>
      </div>
      <div>
        <GoogleIcon icon="edit" />
      </div>
    </div>
    )
}

export default Services;
