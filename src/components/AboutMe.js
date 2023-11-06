import React from 'react';

const AboutMe = () => {
  return (
    <div className="flex flex-col items-center p-8 mx-auto bg-white shadow-lg rounded-lg max-w-3xl mt-10">
      <h1 className="text-center text-2xl font-semibold text-gray-800 mb-2">Matthew Courter</h1>
      <h2 className="text-center text-xl text-gray-600 mb-6">
        Software Developer Specializing in DevOps, Observability, and QE Performance & Automation testing
      </h2>

      <p className="max-w-2xl w-full text-justify text-gray-700 leading-relaxed mb-6 border-l-4 border-black-500 pl-4">
        I have been instrumental in designing and improving CI/CD pipelines, facilitating cloud migrations, and enhancing observability for teams. I have a proven track record in roles that demand close collaboration between platform, development, and quality engineering teams.
      </p>

      <div className="mb-6">
        <p className="text-gray-700 leading-relaxed mb-2">My expertise includes:</p>
        <ul className="list-disc ml-5 text-gray-700 max-w-2xl w-full mb-6">
          <li className="mb-2 leading-relaxed">Deploying robust CI/CD pipelines as part of cloud migration strategies through the use of Azure DevOps, Harness, Jenkins, and Github actions.</li>
          <li className="mb-2 leading-relaxed">Integrating observability and load testing tools to bolster code quality across multiple environments. Led the management of enterprise size Dynatrace deployments</li>
          <li className="mb-2 leading-relaxed">Managing frontline production and deployment issues in a rotational role while continously enhancing toolsets for developers and quality engineers.</li>
          <li className="mb-2 leading-relaxed">Leading the development of automation and performance testing frameworks using a vast array of tools including k6 and Selenium</li>
        </ul>
      </div>
      <a
        href="/matthew_courter_resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 px-8 py-2 bg-gray-700 text-white font-semibold rounded transition-colors duration-200 hover:bg-gray-800"
      >
        PDF of my current resume
      </a>

    </div>
  );
};

export default AboutMe;
