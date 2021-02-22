// @ts-ignore
import React from "react"

import Layout from "../components/layout"
import ExperienceGitGraph from "../components/experience-git-graph"

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
    }
  ]
  return (
    <Layout title={'I’m Ernesto Cobos'} location={location}>
      <ExperienceGitGraph experienceHistory={experienceMockData}/>
    </Layout>
  )
}

export default HomePage
