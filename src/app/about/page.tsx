import React from 'react'
import { FaCode, FaGraduationCap, FaLaptop, FaLaptopCode } from 'react-icons/fa';

const About = () => {
  return (
    <div className='container max-w-7xl mx-auto py-20'>
      <h1 className='text-4xl font-bold mb-8 text-center'>About Me</h1>
      
      {/*Bio Section*/}

      <section className='mb-16'>
        <p className='text-lg text-secondary max-w-3xl mx-auto text-center'>I’m a passionate Full Stack Developer with a strong focus on building clean, user-friendly, and efficient digital experiences. I enjoy transforming ideas into functional products through thoughtful design and solid engineering. I’m constantly learning new technologies, improving my problem-solving skills, and contributing to meaningful projects. I’m currently seeking new opportunities where I can grow, collaborate, and create impactful solutions.</p>
      </section>

      {/*Skills Section*/}

      <section className='mb-16'>
        <h2 className='section-title'>Skills</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>

          {/*Frontend Skills*/}
          <div className='bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md'>
            <FaCode className='h-8 w-8 text-primary mb-4'/>
            <h3 className='text-xl font-semibold mb-2'>Frontend</h3>
            <ul className='text-secondary space-y-2'>
              <li>HTML5 / CSS3</li>
              <li>JavaScript</li>
              <li>React.js</li>
              <li>Next.js</li>
              <li>Tailwind CSS</li>
              <li>Typescript</li>
              <li>Redux</li>
            </ul>
          </div>

          {/*Backend Skills*/}
          <div className='bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md'>
            <FaLaptopCode className='h-8 w-8 text-primary mb-4'/>
            <h3 className='text-xl font-semibold mb-2'>Backend</h3>
            <ul className='text-secondary space-y-2'>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>MongoDB</li>
              <li>MySQL</li>
              <li>Firebase</li>
              <li>PHP</li>
            </ul>
          </div>

          {/*Tools & Others*/}
          <div className='bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md'>
            <FaGraduationCap className='h-8 w-8 text-primary mb-4'/>
            <h3 className='text-xl font-semibold mb-2'>Tools & Others</h3>
            <ul className='text-secondary space-y-2'>
              <li>Git / Github</li>
              <li>Postman</li>
              <li>Rest APIs</li>
              <li>Figma</li>
              <li>Android Studio</li>
              <li>VS Code</li>
            </ul>
          </div>
        </div>
      </section>

      {/*Education Section*/}

      <section className='mb-16'>
        <h2 className='section-title'>Education</h2>

        <div className='max-w-3xl mx-auto space-y-12'>
          <div className='bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md'>
            <h3 className='text-xl font-semibold mb-2'>Bachelor of Information & Communication Technology Honours (Undergraduate)</h3>
            <p className='text-primary mb-2'>2023 – Present</p>
            <p className='text-secondary'>I am currently pursuing my BICT (Honours) degree at University Of Colombo, developing strong skills in software engineering, full-stack development, and modern computing technologies.</p>
          </div>

          <div className='bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md'>
            <h3 className='text-xl font-semibold mb-2'>Professional English Diploma - British Way English Academy</h3>
            <p className='text-primary mb-2'>2021 Oct - 2021 Dec</p>
            <p className='text-secondary'>I completed the 2-month Extended English Language Training at British Way English Academy with a Distinction Pass.</p>
          </div>
        

          <div className='bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md'>
            <h3 className='text-xl font-semibold mb-2'>G.C.E. Advanced Level Examination – Technology Stream</h3>
            <p className='text-primary mb-2'>2021 (Swarna Jayanthi National School - Kegalle)</p>
            <p className='text-secondary'>Completed with 3 A’s, Z-score - 2.3176, District Rank - 5, Island Rank - 64</p>
          </div>

          <div className='bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md'>
            <h3 className='text-xl font-semibold mb-2'>G.C.E. Ordinary Level Examination</h3>
            <p className='text-primary mb-2'>2018 (Swarna Jayanthi National School - Kegalle)</p>
            <p className='text-secondary'>Completed with 5 A’s, 3 B’s, 1 C</p>
          </div>
        </div>
      </section>

    </div>
  );
}

export default About