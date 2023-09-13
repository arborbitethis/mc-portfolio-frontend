// src/components/AboutMe.js
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   padding: 2rem;
`;

const Heading = styled.h1`
   color: #333;
`;

const SubHeading = styled.h2`
   color: #777;
`;

const Bio = styled.p`
   max-width: 800px;
   line-height: 1.6;
   text-align: justify;
   color: #555;
`;

function AboutMe() {

const ResumeLink = styled.a`
   margin-top: 20px;
   padding: 10px 20px;
   background-color: #333;
   color: white;
   text-decoration: none;
   border-radius: 5px;
   transition: background-color 0.2s;

   &:hover {
      background-color: #555;
   }
`;

   return (
      <Container>
         <Heading>Matthew Courter - About Me</Heading>
         <SubHeading>Software Developer focusing in DevOps, SRE, & Observability</SubHeading>
         <Bio>
             I'm skilled in full-stack development, devops practices, SRE principles, and modern observability tools. 
             Looking for challenging roles to further expand my horizons.  
         </Bio>
         <ResumeLink href="/matthew_courter_resume.pdf" target="_blank" rel="noopener noreferrer">PDF of my current resume</ResumeLink>
      </Container>
   );
}

export default AboutMe;
