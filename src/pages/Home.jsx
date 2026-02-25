import React, { useEffect } from 'react';
import Brands from '../components/Brands';
import Projects from '../components/Projects';
import Hero from '../components/Hero';
import About from '../components/About';
// import Service from '../components/Service';
// import Testimonial from '../components/Testimonial';
import HomePagdData from '../data/HomePagdData.json';
import Experience from '../components/Experience';
import Contact from '../components/Contact';

export default function Home() {
  const {
    hero,
    socialBtns,
    brands,
    about,
    projects,
    experience,
    // service,
    // testimonial,
    contact,
  } = HomePagdData;
  return (
    <>
      <Hero data={hero} socialData={socialBtns} />
      <Brands data={brands} />
      <About data={about} />
      <Projects data={projects} />
      <Experience data={experience} />
      {/* <Service data={service} />
      <Testimonial data={testimonial} /> */}
      <Contact data={contact} socialData={socialBtns} />
    </>
  );
}
