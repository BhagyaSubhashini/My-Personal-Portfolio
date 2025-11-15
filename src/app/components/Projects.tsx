'use client';

import { projects } from '@/contents/project';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Projects = () => {
  return (
    <section className="py-20 container max-w-7xl mx-auto px-4">

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl font-bold mb-12 text-center"
      >
        Featured Projects
      </motion.h2>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            className='group bg-white dark:bg-dark/50 rounded-lg shadow-md p-6'
          >
            <div className='relative aspect-video mb-4 rounded-lg overflow-hidden'>
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
              />
            </div>

            <h3 className='text-xl font-semibold mb-2'>{project.title}</h3>
            <p className='text-gray-600 dark:text-gray-300 mb-4'>{project.description}</p>

            <div className='flex flex-wrap gap-2 mb-4'>
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className='px-3 py-1 bg-primary/10 text-primary rounded-full text-sm'
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className='flex gap-4 mt-2'>
              <Link 
                href={project.githubLink} 
                target="_blank" 
                className='flex items-center gap-2 text-secondary hover:text-primary transition-colors'
              >
                <FaGithub className='w-5 h-5'/><span>Code</span>
              </Link>

              {/* Only show Live Demo if demoLink exists */}
              {project.demoLink ? (
                <Link 
                  href={project.demoLink} 
                  target="_blank" 
                  className='flex items-center gap-2 text-secondary hover:text-primary transition-colors'
                >
                  <FaExternalLinkAlt className='w-5 h-5'/><span>Live Demo</span>
                </Link>
              ) : (
                <span className='flex items-center gap-2 text-gray-400 cursor-not-allowed'>
                  <FaExternalLinkAlt className='w-5 h-5'/><span>Live Demo</span>
                </span>
              )}
            </div>

          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Projects;