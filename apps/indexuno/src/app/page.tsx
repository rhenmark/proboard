'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const navItems = ['Home', 'Services', 'Clients', 'About', 'Connect'];
export default function Index() {
  return (
    <>
      <div className="w-full min-h-screen m-auto relative">
        <PageHeader />
        <main className="w-screen min-h-[70vh]">
          <div className="lg:ml-[205px] lg:mt-[238px] flex flex-col gap-[70px] w-full lg:w-[424px]">
            <motion.span 
              className="w-full border-2 border-[#6D61CF] text-2xl md:text-[48px] md:leading-[60px] p-4 border-dashed border-spacing-10 font-bold landing-text"
              initial={{
                opacity: 0,
                y: -500
              }}
              animate={{
                  opacity: 1,
                  y: 0,
                  
              }}
              transition={{ duration: 0.5 }}
            >
              Elevate your <br /> business digitally{' '}
            </motion.span>
            <motion.div initial={{opacity: 0}}>
              <button className="h-[80px] w-full z-10 relative lg:w-[424px] bg-[#6D61CF] bg-opacity-90 text-2xl text-white rounded-md grid grid-flow-col justify-between items-center px-10">
                Get started
                <Image
                  src="/assets/arrow-right.svg"
                  width={58}
                  height={58}
                  alt="arrow-right"
                />
              </button>
            </motion.div>
          </div>
          <div className="w-[65%] lg:w-[45%] h-[90vh] md:h-screen z-[-1] bg-[#DCD8FF] absolute right-0 top-0 rounded-bl-md"></div>
          <div>
            <Image
              src="/assets/landing.webp"
              alt="landing"
              className="absolute xl:right-[15%] xl:top-32 w-[50%] lg:w-[40%] lg:right-[30px] lg:top-[5%]"
              width={775}
              height={762}
            />
          </div>
        </main>
        <div className="w-full min-h-screen max-w-[1512px] m-auto relative">
          <WeOffer />
          <OurClients />
          <OurProjects />
          <WhoWeAre />
          <GeInTouch />
        </div>
      </div>
      <Footer />
    </>
  );
}

const PageHeader = () => {
  return (
    <div className="w-screen lg:max-w-screen-xl mx-auto h-[100px] header grid grid-flow-col items-center px-5 lg:px-[100px]">
      <div>
        <Image
          src="/icon/icon-header.webp"
          height={96}
          width={96}
          alt="header-icon"
        />
      </div>
      <ul className="hidden lg:grid grid-flow-col justify-start gap-12 z-20">
        {navItems.map((item: string) => (
          <li key={item} className="cursor-pointer">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

const list = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: {
  when: "beforeChildren",
  staggerChildren: 0.3,
}, },  };
const item = { hidden: { x: -10, opacity: 0 }, visible: { opacity: 1, x: 0 }, };

const WeOffer = () => {
 
  return (
    <div className="w-screen px-[100px] m-auto min-h-[100vh]" id="weoffer">
      <div className="grid">
        <span className="text-[40px]">What do we offer?</span>
        <span className="w-full lg:w-[781px]">
          - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </span>
      </div>
      <motion.ul
        className="grid mt-[74px] grid-flow-row md:grid-flow-col"
        // animate="visible"
        whileInView="visible"
        variants={list}
        initial="hidden"
        viewport={{ once: true }}
      >
        <motion.li variants={item}>
          <Image
            alt="Web & Marketing Design"
            src={'/assets/web-n-marketing.png'}
            width={402}
            height={397}
          />
          <span className="text-2xl pt-3 inline-block">
            Web & Marketing Design
          </span>
        </motion.li>
        <motion.li variants={item}>
          <Image
            alt="Web & Marketing Design"
            src={'/assets/website-mobile-dev.png'}
            width={418}
            height={380}
          />
          <span className="text-2xl pt-3 inline-block ">
            Website & Mobile Development
          </span>
        </motion.li>
        <motion.li variants={item}>
          <Image
            alt="Web & Marketing Design"
            src={'/assets/socialmedia-marketing.png'}
            width={370}
            height={380}
          />
          <span className="text-2xl pt-3 inline-block">
            Social Media & Marketing <br /> Management
          </span>
        </motion.li>
      </motion.ul>
    </div>
  );
};

const OurClients = () => {
  return (
    <div className="w-screen px-5 lg:px-[100px] m-auto min-h-[100vh]">
      <div className="grid">
        <span className="text-[40px]">Who are our clients?</span>
        <span className="lg:w-[781px]">
          - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </span>
      </div>
      <div className="mt-14 w-full grid place-items-center">
        <Image
          src={'/assets/our-clients.png'}
          width={1257}
          height={446}
          alt="our-clients"
        />
      </div>
    </div>
  );
};

const OurProjects = () => {
  return (
    <div className="px-5 lg:px-[100px] m-auto min-h-[100vh]">
      <div className="grid">
        <span className="text-[40px]">Our Projects</span>
        <span className="lg:w-[781px]">
          - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </span>
      </div>
      <div className="mt-14 w-full grid place-items-center">
        <Image
          src={'/assets/project-grid.png'}
          width={1257}
          height={446}
          alt="project-grid"
        />
      </div>
    </div>
  );
};

const WhoWeAre = () => {
  return (
    <div className="px-5 lg:px-[100px] m-auto min-h-[100vh] pt-52">
      <div className="grid">
        <span className="text-[40px]">Who we are?</span>
        <span className="lg:w-[781px]">
          - we are small team with international experience which aims to help
          local business onboard digitally
        </span>
      </div>
      <div className="mt-14 w-full">
        <div className="grid grid-flow-col justify-evenly text-center">
          <div>
            <Image
              width={280}
              height={280}
              src={'/assets/people/cto.png'}
              alt="cto"
            />
            <span className="block mt-4 font-bold">Rhen Mark</span>
            <span className="block">Founder</span>
          </div>
          <div>
            <Image
              width={280}
              height={280}
              src={'/assets/people/designlead.png'}
              alt="design"
            />
            <span className="block mt-4 font-bold">Jackie</span>
            <span className="block">
              Head of Design &<br />
              Marketing
            </span>
          </div>
          <div>
            <Image
              width={280}
              height={280}
              src={'/assets/people/saleslead.png'}
              alt="sales"
            />
            <span className="block mt-4 font-bold">Alice</span>
            <span className="block">Head of Sales</span>
          </div>
        </div>
      </div>
      <div className="mt-20 w-full">
        <div className="grid grid-flow-col justify-evenly text-center">
          <div>
            <Image
              width={200}
              height={200}
              src={'/assets/people/dev1.png'}
              alt="cto"
            />
            <span className="block mt-4 font-bold">Dev 1</span>
            <span className="block">Developer</span>
          </div>
          <div>
            <Image
              width={200}
              height={200}
              src={'/assets/people/dev2.png'}
              alt="cto"
            />
            <span className="block mt-4 font-bold">Dev 2</span>
            <span className="block">QA Analyst</span>
          </div>
          <div>
            <Image
              width={200}
              height={200}
              src={'/assets/people/dev3.png'}
              alt="cto"
            />
            <span className="block mt-4 font-bold">Dev 3</span>
            <span className="block">Developer</span>
          </div>
          <div>
            <Image
              width={200}
              height={200}
              src={'/assets/people/dev4.png'}
              alt="cto"
            />
            <span className="block mt-4 font-bold">Dev 4</span>
            <span className="block">DevOps Engr.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const GeInTouch = () => {
  return (
    <div className="px-5 lg:px-[100px] m-auto min-h-[100vh] pt-52 mb-20">
      <div className="grid">
        <span className="text-[40px]">Get in touch with us!</span>
      </div>
      <div className="mt-[70px] grid grid-flow-col grid-cols-[40%_10%_40%]">
        <div>
          <div className="grid grid-flow-col justify-start gap-4 items-center">
            <Image
              src={'/assets/icons/email.svg'}
              alt="email"
              width={48}
              height={48}
            />
            <span>email@indexuno.com</span>
          </div>
          <div className="grid grid-flow-col justify-start gap-4 items-center mt-10">
            <Image
              src={'/assets/icons/phone.png'}
              alt="phone"
              width={48}
              height={48}
            />
            <span>
              (+63) 9123456789 <br /> (+63) 9920412480
            </span>
          </div>
          <div className="grid grid-flow-col justify-start gap-4 items-center mt-10">
            <Image
              src={'/assets/icons/pin.png'}
              alt="pin"
              width={48}
              height={48}
            />
            <span>
              Lorem ipsum, Bacolod City <br />
              Philippines, 6118
            </span>
          </div>
        </div>
        <div className="h-full w-[2px] bg-black"></div>
        <div>
          <div className="mb-10">
            <span>Please provide with your basic details</span>
          </div>
          <InputField placeholder="Name" />
          <InputField placeholder="Email address" />
          <InputField placeholder="Mobile number" />
          <InputField placeholder="Tell us your inquiry" type="textarea" />
          <FormButton />
        </div>
      </div>
    </div>
  );
};

const InputField = ({
  placeholder,
  type = 'input',
}: {
  placeholder: string;
  type?: 'input' | 'textarea';
}) => {
  return (
    <div className="mb-10">
      {type === 'input' ? (
        <input
          type="text"
          placeholder={placeholder}
          className="w-full p-4 border-[#6D61CF] outline-[#6D61CF] border-2 rounded-md"
        />
      ) : (
        <textarea
          placeholder={placeholder}
          className="w-full p-4 border-[#6D61CF] outline-[#6D61CF] border-2 rounded-md h-24"
        />
      )}
    </div>
  );
};

const FormButton = () => {
  return (
    <div className="mb-10">
      <button className="w-full h-[80px] text-2xl bg-[#373169] text-white rounded-md border-2 border-[#6D61CF]">
        Submit
      </button>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="w-screen bg-[#6D61CF] bg-opacity-30 overflow-hidden">
      <div className="lg:max-w-screen-2xl mx-auto p-10 grid grid-flow-row lg:grid-cols-[30%_23%_23%_23%]  gap-4">
        <div className="w-full">
          <div className="h-[68px] grid items-end">
            <span className="text-2xl">
              IndexUno Information
              <br />
              Technology Solutions
            </span>
          </div>
          <ul className="pt-10 grid grid-flow-row gap-3">
            <li>DTI Permit</li>
            <li>Privacy & Policy</li>
            <li>Terms & Condition</li>
          </ul>
        </div>
        <div>
          <div className="h-[68px] grid items-end">
            <span className="block">Services</span>
          </div>
          <ul className="pt-10 grid grid-flow-row gap-3">
            <li>Design</li>
            <li>Development</li>
            <li>Management</li>
            <li>Marketing</li>
          </ul>
        </div>
        <div>
          <div className="h-[68px] grid items-end">
            <span>About</span>
          </div>
          <ul className="pt-10 grid grid-flow-row gap-3">
            <li>Our Mission and Goals</li>
            <li>People</li>
            <li>Careers</li>
            <li>Future Plans</li>
          </ul>
        </div>
        <div>
          <div className="h-[68px] grid items-end">
            <span>Social Media</span>
          </div>
          <ul className="pt-10 grid grid-flow-row gap-3">
            <li>Facebook</li>
            <li>Linkedin</li>
            <li>Instagram</li>
            <li>X</li>
          </ul>
        </div>
      </div>
      <div className="max-w-screen-2xl mx-auto p-8">
        <hr className="border-[#373169]" />
        <div className="pt-6">
          <span>Copyright © 2024. All rights reserved</span>
        </div>
      </div>
    </div>
  );
};
