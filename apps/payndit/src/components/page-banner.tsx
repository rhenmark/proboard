'use client';

const PageBanner = () => {
  return (
    <div className="container m-auto">
      <div className="py-8 pt-12 md:pt-20 px-4">
        <h1 className="text-3xl font-bold text-black/80 mb-4">
          Find any services near you.{' '}
        </h1>
        <div className="grid grid-cols-[1fr_25%] md:grid-cols-[1fr_16%] border-2 rounded-full box-content relative w-full md:w-8/12">
          <input
            type="text"
            placeholder="Paynd now!"
            className="w-full h-16 px-4 outline-none rounded-full text-2xl"
          />
          <button className="bg-primary h-16 text-white rounded-full rounded-l-none border-2 border-primary text-2xl">
            <span className="material-symbols-outlined text-4xl">search</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PageBanner;
