import React from 'react'
import Hero from "../comps/Hero"
import HomeCards from "../comps/HomeCards"
import JobListings from '../comps/JobListings'
import ViewAllJobs from '../comps/ViewAllJobs'

const HomePage = () => {
  return (
    <>
        <Hero />
        <HomeCards />
        <JobListings isHome={true}/>
        <ViewAllJobs />
    </>
  )
}

export default HomePage
