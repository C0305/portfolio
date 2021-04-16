// @ts-ignore
import React from "react"
import {navigate} from 'gatsby';

import Layout from "../components/layout"
import ExperienceGitGraph from "../components/experience-git-graph"
import styled from "styled-components"
import Earth from "../components/Earth"
import Astro1 from "../components/Astro1"

const TextContainer = styled.div`
  color: white;
  padding-right: 10%;
`;

const EarthContianer = styled.div`
  margin: auto;
  width: 50%;
  padding-left: 10%;
  padding-right: 10%;
  color: white;
`;

const WhoIAmTitle= styled.h1`
  color: #4FD0D7;
  font-size: 60px;
  margin-top: 0;
`;
const WhoIAmHello = styled.h1`
  color: #FFFF;
  font-size: 20px;
  font-weight: normal;
`;
const WhoIAmDescription = styled.h1`
  color: #FFFF;
  font-size: 25px;
  font-weight: normal;
`;

const WhoIAmBlueText = styled.span`
  color: #4FD0D7;
  font-size: 25px;
  font-weight: normal;
`;

const HireMeButton = styled.button`
  color: #ffffff;
  font-size: 25px;
  font-weight: bold;
  background-color: Transparent;
  background-repeat:no-repeat;
  border-radius: 40px;
  padding: 10px 40px;
  border-color: white;
  border-style: solid;
  cursor:pointer;
  overflow: hidden;
  outline:none;
  margin: auto;
  transition: 300ms;
  &:hover {
    background-color: white;
    color: #040D21;
  }
  &:active {
    background-color: white;
    color: #040D21;
    border-color: #040D21;
  }
`;

const HireMeButonContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
`;

const HomePage = ({ data, location }) => {
  const experienceMockData = [
    {
      startDate: '2019-06-28',
      endDate:'2019-06-29',
      company: 'Cecilian Partners',
      brief: 'I work on creating an application for real estate that facilitates the management of your sales, lots, and everything related to real estate.',
      type: 'employee',
      achievements: [
        'Creating ansible-playbooks to manage several configurations and tasks, wrote IaC(infrastructure as code) using Terraform to provision servers for the platform.',
        'CI/CD using GitLab which supported a staging and a production environment, each with its quantity of servers we would have one server per client, and we would release to all when required. '
      ]
    },
    {
      startDate: '2019-06-28',
      endDate:'2019-06-29',
      company: 'Cecilian Partners',
      brief: 'I work on creating an application for real estate that facilitates the management of your sales, lots, and everything related to real estate.',
      type: 'employee',
      achievements: [
        'Creating ansible-playbooks to manage several configurations and tasks, wrote IaC(infrastructure as code) using Terraform to provision servers for the platform.',
        'CI/CD using GitLab which supported a staging and a production environment, each with its quantity of servers we would have one server per client, and we would release to all when required. '
      ]
    },
    {
      startDate: '2019-06-28',
      endDate:'2019-06-29',
      company: 'Cecilian Partners',
      brief: 'I work on creating an application for real estate that facilitates the management of your sales, lots, and everything related to real estate.',
      type: 'employee',
      achievements: [
        'Creating ansible-playbooks to manage several configurations and tasks, wrote IaC(infrastructure as code) using Terraform to provision servers for the platform.',
        'CI/CD using GitLab which supported a staging and a production environment, each with its quantity of servers we would have one server per client, and we would release to all when required. '
      ]
    },
  ]
  return (
    <Layout title={'I’m Ernesto Cobos'} location={location}>
      <EarthContianer>
        <Earth/>
      </EarthContianer>
      <TextContainer>
        <WhoIAmHello>Hi there,</WhoIAmHello>
        <WhoIAmTitle>I'm Ernesto Cobos</WhoIAmTitle>
        <WhoIAmDescription>A <WhoIAmBlueText>Software Developer</WhoIAmBlueText> with experience in <WhoIAmBlueText>Full-Stack</WhoIAmBlueText> and <WhoIAmBlueText>DevOps</WhoIAmBlueText>. I’m passionate about astronomy, history and technology. I love things simple  and organized.</WhoIAmDescription>
        <HireMeButonContainer>
          <Astro1/>
          <HireMeButton onClick={() => navigate("/contact")}>Hire Me</HireMeButton>
        </HireMeButonContainer>
      </TextContainer>
    </Layout>
  )
}

export default HomePage
