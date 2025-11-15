'use client';

import React from 'react';
import { FaCode, FaGraduationCap, FaLaptopCode } from 'react-icons/fa';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className='container max-w-7xl mx-auto py-20'>

      {/* Animated Main Title */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className='text-4xl font-bold mb-8 text-center'
      >
        About Me
      </motion.h1>

      {/* Bio Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className='mb-16'
      >
        <p className='text-lg text-secondary max-w-3xl mx-auto text-center'>
          I’m a passionate Full Stack Developer with a strong focus on building clean, user-friendly, and efficient digital experiences. I enjoy transforming ideas into functional products through thoughtful design and solid engineering. I’m constantly learning new technologies, improving my problem-solving skills, and contributing to meaningful projects. I’m currently seeking new opportunities where I can grow, collaborate, and create impactful solutions.
        </p>
      </motion.section>

      {/* Skills Section */}
      <section className='mb-16'>
        <motion.h2
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='section-title'
        >
          Skills
        </motion.h2>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {/* Frontend */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            className='bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md'
          >
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
          </motion.div>

          {/* Backend */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            className='bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md'
          >
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
          </motion.div>

          {/* Tools & Others */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            className='bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md'
          >
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
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section className='mb-16'>
        <motion.h2
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='section-title'
        >
          Education
        </motion.h2>

        <div className='max-w-3xl mx-auto space-y-12'>
          {[
            {
              title: 'Bachelor of Information & Communication Technology Honours (Undergraduate)',
              date: '2023 – Present',
              desc: 'I am currently pursuing my BICT (Honours) degree at University Of Colombo, developing strong skills in software engineering, full-stack development, and modern computing technologies.'
            },
            {
              title: 'Professional English Diploma - British Way English Academy',
              date: '2021 Oct - 2021 Dec',
              desc: 'I completed the 2-month Extended English Language Training at British Way English Academy with a Distinction Pass.'
            },
            {
              title: 'G.C.E. Advanced Level Examination – Technology Stream',
              date: '2021 (Swarna Jayanthi National School - Kegalle)',
              desc: 'Completed with 3 A’s, Z-score - 2.3176, District Rank - 5, Island Rank - 64'
            },
            {
              title: 'G.C.E. Ordinary Level Examination',
              date: '2018 (Swarna Jayanthi National School - Kegalle)',
              desc: 'Completed with 5 A’s, 3 B’s, 1 C'
            }
          ].map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className='bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md'
            >
              <h3 className='text-xl font-semibold mb-2'>{edu.title}</h3>
              <p className='text-primary mb-2'>{edu.date}</p>
              <p className='text-secondary'>{edu.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default About;