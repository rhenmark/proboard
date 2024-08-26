'use client';

import { serviceCategories } from 'apps/payndit/src/constants/categories';
import { useSearchParams } from 'next/navigation';
import { FormEvent, Suspense, useState } from 'react';

const Setup = () => {
  const searchParams = useSearchParams();
  const activeParam = searchParams.get('activeState') || 'personal';

  let ActiveContent =
    {
      personal: PersonalDetails,
      services: ServiceOffers,
      store: StoreDetails,
    }[activeParam] || PersonalDetails;

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div className="bg-black/90 min-h-dvh text-white">
      <div className="max-w-sm mx-auto py-20 px-4">
        <div className="grid text-xl gap-4">
          <span className="font-bold text-4xl">Welcome to Payndit</span>
          <span>Let{"'"}s setup your service account</span>
        </div>
        <div className="mt-20">
          <form onSubmit={handleSubmit}>
            <ActiveContent />
            <div className="my-8">
              <button className="p-4 w-full bg-primary">Next</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

const PersonalDetails = () => {
  return (
    <div>
      <div className="my-4">
        <h4>Personal Details</h4>
      </div>
      <div className="my-4">
        <label className="pb-1 inline-block">Firstname</label>
        <input
          type="text"
          placeholder="Firstname"
          className="bg-black border border-white p-4 w-full"
        />
      </div>
      <div className="my-4">
        <label className="pb-1 inline-block">Lastname</label>
        <input
          type="text"
          placeholder="Lastname"
          className="bg-black border border-white p-4 w-full"
        />
      </div>
      <div className="my-4">
        <label className="pb-1 inline-block">Date of Birth</label>
        <input
          type="date"
          placeholder="Date of Birth"
          className="bg-black border border-white p-4 w-full"
        />
      </div>
    </div>
  );
};

const ServiceOffers = () => {
  const [selectedCategory, setCategory] = useState({
    category: '',
    subCategory: '',
  });
  const handleSelectCategory = (category: string) =>
    setCategory({ ...selectedCategory, category });
  const handleSelectSubCategory = (subCategory: string) =>
    setCategory({ ...selectedCategory, subCategory });

  return (
    <div>
      <div className="my-4">
        <h4>Services</h4>
        <span className="text-sm">Tell us what services you are offering</span>
      </div>
      <div className="my-4">
        <h2 className="mb-4">Category</h2>
        {serviceCategories.map((item) => (
          <Pill
            key={item.category}
            name={item.category}
            isActive={selectedCategory.category === item.category}
            onClick={() => handleSelectCategory(item.category)}
          />
        ))}
      </div>
      {selectedCategory.category && (
        <div className="my-4">
          <h2 className="mb-4">Sub Category</h2>
          {serviceCategories
            .find((item) => item.category === selectedCategory.category)
            ?.subcategories?.map((item) => (
              <Pill
                key={item}
                name={item}
                isActive={selectedCategory.subCategory === item}
                onClick={() => handleSelectSubCategory(item)}
              />
            ))}
          <span className="cursor-pointer p-2 text-sm border border-white inline-block mr-1 mb-2 rounded-full hover:bg-white hover:text-black">
            Others
          </span>
        </div>
      )}
    </div>
  );
};

const Pill = ({
  name,
  isActive,
  onClick,
}: {
  name: string;
  isActive?: boolean;
  onClick?: () => void;
}) => {
  return (
    <span
      role="button"
      onClick={onClick}
      className={`cursor-pointer p-2 text-sm border border-white inline-block mr-1 mb-2 rounded-full hover:bg-white hover:text-black ${
        isActive && 'bg-white text-black'
      }`}
    >
      {name}
    </span>
  );
};

const StoreDetails = () => {
  return (
    <div className="pb-2">
      <div className="my-4">
        <h4>Store Details</h4>
        <span className="text-sm">Customize your store page display</span>
      </div>
      <div className="my-4">
        <label className="pb-1 inline-block">Service Name</label>
        <input
          type="text"
          placeholder="Service Name"
          className="bg-black border border-white p-4 w-full"
        />
      </div>
      <div className="my-4">
        <label className="pb-1 inline-block">Contact Number</label>
        <input
          type="text"
          placeholder="Contact Number"
          className="bg-black border border-white p-4 w-full"
        />
      </div>
      <div className="my-4">
        <label className="pb-1 inline-block">Contact Email address</label>
        <input
          type="text"
          placeholder="Contact Email address"
          className="bg-black border border-white p-4 w-full"
        />
      </div>
      <div className="my-4">
        <label className="pb-1 inline-block">Address</label>
        <input
          type="text"
          placeholder="Address"
          className="bg-black border border-white p-4 w-full"
        />
      </div>
      <div className="my-4">
        <label className="pb-1 inline-block">Description</label>
        <textarea
          placeholder="Tell us wha  t you want you offer in general"
          className="bg-black border border-white p-4 w-full"
        />
        <div>
          <button className="text-right float-right w-full">Ask AI</button>
        </div>
      </div>
    </div>
  );
};

const Page = () => {
  return (
    <Suspense>
      <Setup />
    </Suspense>
  );
};

export default Page;
