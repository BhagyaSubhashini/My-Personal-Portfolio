'use client';

import { blogs } from '@/contents/blogs';
import { FaCalendarAlt, FaClock } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function BlogsPage() {
  const allBlogsInOrder = blogs; // Preserves your exact order

  return (
    <div className='container max-w-7xl mx-auto py-20 px-4'>

      {/* Animated Page Title */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className='text-4xl font-bold text-center mb-12'
      >
        All Blog Posts
      </motion.h1>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {allBlogsInOrder.map((blog, index) => (
          <motion.a
            key={blog.slug}
            href={blog.externalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className='block group'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.12 }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
          >
            <article className='bg-white dark:bg-dark/50 rounded-lg shadow-md p-6 hover:shadow-xl transition-all h-full border border-gray-200 dark:border-gray-800 group'>
              <h3 className='text-xl font-bold mb-3 text-primary group-hover:underline'>
                {blog.title}
              </h3>
              <p className='text-gray-600 dark:text-gray-300 mb-4 line-clamp-3'>
                {blog.excerpt}
              </p>
              <div className='flex items-center text-sm text-gray-500 dark:text-gray-400 gap-4 mt-4'>
                <span className='flex items-center gap-1.5'>
                  <FaCalendarAlt /> {new Date(blog.date).toLocaleDateString()}
                </span>
                <span className='flex items-center gap-1.5'>
                  <FaClock /> {blog.readTime}
                </span>
              </div>
            </article>
          </motion.a>
        ))}
      </div>
    </div>
  );
}