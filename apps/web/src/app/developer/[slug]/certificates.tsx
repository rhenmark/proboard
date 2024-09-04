'use client';

import { Button, OpenIcon } from '@core-ui';
import Link from 'next/link';
import { useState } from 'react';

const experiences = [
  {
    company: 'OCBC Bank',
    role: 'Tech Lead / Senior Software Engineer',
    description:
      'Led tech initiatives involving banking solutions, software development, and team leadership.',
    duration: 'March 2022 - June 2024',
    location: 'Singapore',
  },
  {
    company: 'Speakap',
    role: 'Senior Frontend Engineer',
    description:
      'Focused on developing communication platforms for businesses.',
    duration: 'September - December 2021',
    location: 'Amsterdam, Netherlands',
  },
  {
    company: 'Aon - ACIA',
    role: 'Application Developer',
    description:
      'Led technology projects related to insurance and risk management.',
    duration: 'April 2020 - August 2021',
    location: 'Singapore',
  },
  {
    company: 'Cartrack Singapore',
    role: 'Frontend Developer',
    description:
      'Oversaw the development of tracking and fleet management solutions.',
    duration: 'August 2018 - April 2020',
    location: 'Singapore',
  },
  {
    company: 'The Asia Thai Co. Ltd',
    role: 'Web Developer Supervisor ',
    description: 'Handled software projects and team management.',
    duration: 'January 2018 - August 2018',
    location: 'Bangkok, Thailand',
  },
  {
    company: 'Stratium Software Group',
    role: 'January 2018 - August 2018',
    description: 'Led software development and managed technical projects.',
    duration: 'January 2016 - January 2018',
    location: 'Bacolod, Philippines',
  },
];

const Certificates = (props: any) => {
  const [collapse, setCollapse] = useState(true);
  if (!props?.items) {
    return null;
  }

  return (
    <div className="mt-4 w-fit">
      <button
        className="mb-4 text-2xl font-medium"
        onClick={() => setCollapse((state) => !state)}
      >
        {' '}
        {collapse ? '+' : '-'} Certifications
      </button>
      {!collapse && (
        <div className="grid grid-flow-row gap-4 md:pl-8 ">
          <ul className="space-y-4 mb-8 list-none">
            {props?.items.map((certificate: any, index: string) => (
              <li
                key={index}
                className="p-4 bg-white rounded-lg border border-gray-200 shadow-sm w-full"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {certificate.name}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {certificate.issuing_organization}
                    </p>
                    <p className="text-sm text-gray-400">
                      {certificate.issue_date}
                    </p>
                  </div>
                  <a
                    href={certificate.credential_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                  >
                    View Certificate
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export const SectionList = (props: any) => {
  const [collapse, setCollapse] = useState(true);
  if (!props?.items) {
    return null;
  }
  return (
    <div className="mt-4 w-full ">
      <button
        className="mb-4 text-2xl font-medium"
        onClick={() => setCollapse((state) => !state)}
      >
        {' '}
        {collapse ? '+' : '-'} {props.title}
      </button>

      {!collapse && (
        <div className="flex flex-wrap container mx-auto gap-2">
          {props?.items.map((skill: any, index: string) => (
            // <span
            //   key={item}
            //   className="rounded-full mr-2 mb-2 p-1 px-4 bg-slate-300 text-sm"
            // >
            //   {item}
            // </span>
            <span
              key={index}
              className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-4 py-2 rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export const WorkExperiences = (props: any) => {
  const [collapse, setCollapse] = useState(true);
  if (!props?.items) {
    return null;
  }
  return (
    <div className="mt-4 w-fill ">
      <button
        className="mb-4 text-2xl font-medium"
        onClick={() => setCollapse((state) => !state)}
      >
        {' '}
        {collapse ? '+' : '-'} Work Experiences
      </button>

      {!collapse && (
        <div className="flex flex-row flex-wrap">
          <Stepper />
        </div>
      )}
    </div>
  );
};

const Stepper = () => {
  return (
    <div className="container mx-auto mt-10">
      <div className="relative border-l border-gray-200">
        {experiences.map((experience, index) => (
          <div className="mb-10 ml-6" key={index}>
            <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white">
              <svg
                aria-hidden="true"
                className="w-3 h-3 text-blue-600"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 4.293a1 1 0 010 1.414L8.414 14H15a1 1 0 110 2H5a1 1 0 01-1-1V9a1 1 0 112 0v6.586l8.293-8.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
            <div className="p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
              <h3 className="font-semibold text-lg text-gray-900">
                {experience.company}
              </h3>
              <span className="block text-sm font-normal leading-none text-gray-400">
                {experience.duration}
              </span>
              <div className="flex items-center mt-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#000"
                >
                  <path d="M480-301q99-80 149.5-154T680-594q0-90-56-148t-144-58q-88 0-144 58t-56 148q0 65 50.5 139T480-301Zm0 101Q339-304 269.5-402T200-594q0-125 78-205.5T480-880q124 0 202 80.5T760-594q0 94-69.5 192T480-200Zm0-320q33 0 56.5-23.5T560-600q0-33-23.5-56.5T480-680q-33 0-56.5 23.5T400-600q0 33 23.5 56.5T480-520ZM200-80v-80h560v80H200Zm280-520Z" />
                </svg>
                <span className="text-sm text-gray-600">
                  {experience.location}
                </span>
              </div>
              <p className="mt-2 mb-4 text-base font-normal text-gray-500">
                {experience.description}
              </p>
              <span className="inline-block px-2 py-1 text-xs font-medium text-blue-800 bg-blue-100 rounded">
                {experience.role}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const DownloadResume = () => {
  const resumeUrl =
    'https://docs.google.com/document/d/15eIxs17oLGFE-QPxIDdOp-xpoZIoWKj-jMDH7CMaDgU/edit?usp=sharing'; // Replace with your Google Drive resume link

  return (
    <div className="container mx-auto  mt-4">
      {/* <h2 className="text-2xl font-semibold text-gray-800 mb-6">Download My Resume</h2> */}
      <Link
        href={resumeUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-blue-600 text-white text-sm font-medium px-6 py-3 rounded-full shadow hover:bg-blue-700 transition duration-200"
      >
        <span className="flex flex-row items-center justify-center gap-2">
          Download my Resume
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#fff"
          >
            <path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z" />
          </svg>
        </span>
      </Link>
    </div>
  );
};

const StudyItem = ({ study }: any) => {
  return (
    <div className="w-fit bg-white border border-gray-200 rounded-lg shadow-sm p-5 mb-6">
      <h3 className="text-xl font-semibold text-gray-900">
        {study.institution}
      </h3>
      <p className="text-gray-600">{study.degree}</p>
      <p className="text-gray-500 text-sm">{study.period}</p>
      <p className="text-gray-700 mt-2">{study.description}</p>
    </div>
  );
};

export const StudiesList = () => {
  const [collapse, setCollapse] = useState(true);

  const studies = [
    {
      institution: 'University of the Philippines Open University',
      degree: 'Master Information Systems',
      period: '2023 - Present',
      description:
        'Focused on software engineering, algorithms, and artificial intelligence.',
    },
    {
      institution: 'Carlos Hilado Memorial State University',
      degree: 'Bachelor of Science in Information Systems',
      period: '2012 - 2016',
      description:
        'Information Technology fundamentals and specialized in user interface design and usability testing.',
    },
  ];

  return (
    <div className="mt-4 w-fit ">
      <button
        className="mb-4 text-2xl font-medium"
        onClick={() => setCollapse((state) => !state)}
      >
        {' '}
        {collapse ? '+' : '-'} Education
      </button>
      <div className="container mx-auto md:pl-8">
        {!collapse &&
          studies.map((study, index) => (
            <StudyItem key={index} study={study} />
          ))}
      </div>
    </div>
  );
};

export default Certificates;
