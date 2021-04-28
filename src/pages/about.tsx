// @ts-ignore
import React from "react"

import Layout from "../components/layout"
import ExperienceGitGraph from "../components/experience-git-graph"
import { Gitgraph, CommitOptions } from "@gitgraph/react"
import styled from "styled-components"

const GitGraphWrapper = styled.div`
padding: 2rem;
`;

const renderMessage: CommitOptions["renderMessage"] = (commit: any) => {
  return (
    <g transform={`translate(0, ${commit.style.dot.size})`}>
      <text fill={commit.style.dot.color} alignmentBaseline="central">
        {commit.hashAbbrev} - {commit.subject}
      </text>
      <foreignObject width="600" x="10">
        <p>
          My money's in that office, right? If she start giving me some
          bullshit about it ain't there, and we got to go someplace else and
          get it, I'm gonna shoot you in the head then and there. Then I'm
          gonna shoot that bitch in the kneecaps, find out where my goddamn
          money is. She gonna tell me too. Hey, look at me when I'm talking
          to you, motherfucker. You listen: we go in there, and that nigga
          Winston or anybody else is in there, you the first motherfucker to
          get shot. You understand?
        </p>
      </foreignObject>
    </g>
  );
}
const HomePage = ({ data, location }) => {
  const experienceMockData = [
    {
      startDate: '2021-02-10',
      endDate:'',
      company: 'employee',
      brief: 'I work on creating an application for real estate that facilitates the management of your sales, lots, and everything related to real estate.',
      type: 'contractor',
      achievements: [
        'Creating ansible-playbooks to manage several configurations and tasks, wrote IaC(infrastructure as code) using Terraform to provision servers for the platform.',
        'CI/CD using GitLab which supported a staging and a production environment, each with its quantity of servers we would have one server per client, and we would release to all when required. '
      ]
    },
    {
      startDate: '2020-04-28',
      endDate:'2021-06-29',
      company: 'PriceTravel',
      brief: 'I work on creating an application for real estate that facilitates the management of your sales, lots, and everything related to real estate.',
      type: 'contractor',
      achievements: [
        'Creating ansible-playbooks to manage several configurations and tasks, wrote IaC(infrastructure as code) using Terraform to provision servers for the platform.',
        'CI/CD using GitLab which supported a staging and a production environment, each with its quantity of servers we would have one server per client, and we would release to all when required. '
      ]
    },
    {
      startDate: '2021-02-08',
      endDate:'',
      company: 'Capgemini',
      brief: 'I work on creating an application for real estate that facilitates the management of your sales, lots, and everything related to real estate.',
      type: 'employee',
      achievements: [
        'Creating ansible-playbooks to manage several configurations and tasks, wrote IaC(infrastructure as code) using Terraform to provision servers for the platform.',
        'CI/CD using GitLab which supported a staging and a production environment, each with its quantity of servers we would have one server per client, and we would release to all when required. '
      ]
    },
    {
      startDate: '2019-06-28',
      endDate:'2021-06-29',
      company: 'Cecilian Partners',
      brief: 'I work on creating an application for real estate that facilitates the management of your sales, lots, and everything related to real estate.',
      type: 'contractor',
      achievements: [
        'Creating ansible-playbooks to manage several configurations and tasks, wrote IaC(infrastructure as code) using Terraform to provision servers for the platform.',
        'CI/CD using GitLab which supported a staging and a production environment, each with its quantity of servers we would have one server per client, and we would release to all when required. '
      ]
    },
    {
      startDate: '2014-06-28',
      endDate:'2016-06-29',
      company: 'Grupo Syneg',
      brief: 'I work on creating an application for real estate that facilitates the management of your sales, lots, and everything related to real estate.',
      type: 'employee',
      achievements: [
        'NetIQ Support Department, Information Security Department, and Software Development Department',
        'During this time I was in charge of 60 people in the support department. I was also in charge of implementing the Call Center system for telephone support.'
      ]
    },
    {
      startDate: '2016-06-28',
      endDate:'2018-06-29',
      company: 'Florels',
      brief: 'I work as Software Developer',
      type: 'employee',
      achievements: [
        'I develop a web system to manage the business with Vue and PHP, the software modules are\n' +
        '* staff administration\n' +
        '*  point of sale\n' +
        '*  warehouse\n' +
        '* payments / providers\n' +
        '* Credit & Collections',
      ]
    },
    {
      startDate: '2017-06-28',
      endDate:'2018-06-29',
      company: 'Tuadmin',
      brief: 'I worked on the development of a SAAS ERP system mainly in the CRM, Customers, and Sales modules. I work with technologies like Vue, Laravel, PHP, Node, Express and providers like AWS',
      type: 'employee',
      achievements: [
        'I develop a web system to manage the business with Vue and PHP, the software modules are\n' +
        '* staff administration\n' +
        '*  point of sale\n' +
        '*  warehouse\n' +
        '* payments / providers\n' +
        '* Credit & Collections',
      ]
    },
    {
      startDate: '2018-06-28',
      endDate:'2019-06-29',
      company: 'Tyson Foods',
      logo: 'https://www.tysonfoods.com/sites/default/files/inline-images/Tyson_Logo_V_Blue_RGB_0.png',
      brief: 'Migration of .net technologies to open source like Drupal, PHP, react, and Jamstack on AWS. Some of the projects where I work are \n' +
        '* https://www.tysonfoods.com\n' +
        '* https://www.tysonfoodservice.com',
      type: 'employee',
      achievements: [
        'I develop a web system to manage the business with Vue and PHP, the software modules are\n' +
        '* staff administration\n' +
        '*  point of sale\n' +
        '*  warehouse\n' +
        '* payments / providers\n' +
        '* Credit & Collections',
      ]
    },

  ]


  return (
    <Layout title={'I’m Ernesto Cobos'} location={location}>
      <GitGraphWrapper>
      <ExperienceGitGraph experienceHistory={experienceMockData}/>
      </GitGraphWrapper>
    </Layout>
  )
}

export default HomePage;
