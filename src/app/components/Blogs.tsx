import { blogs } from '@/contents/blogs'
import Link from 'next/link'
import { FaCalendarAlt, FaClock } from 'react-icons/fa'

const Blogs = () => {
  // Take only first 6 blogs — in the exact order from blogs.ts
  const firstSixBlogs = blogs.slice(0, 6)

  return (
    <section className='py-20 container max-w-7xl mx-auto px-4'>
      <h2 className='text-3xl font-bold mb-12 text-center'>Latest Blog Posts</h2>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {firstSixBlogs.map((blog) => (
          <a
            key={blog.slug}
            href={blog.externalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className='block group'
          >
            <article className='bg-white dark:bg-dark/50 rounded-lg shadow-md p-6 hover:shadow-xl transition-all h-full border border-gray-200 dark:border-gray-800'>
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
          </a>
        ))}
      </div>

      <div className='text-center mt-12'>
        <Link
          href='/blogs'
          className='inline-block bg-primary text-white font-medium px-8 py-3 rounded-lg hover:bg-primary/90 transition'
        >
          View All Posts
        </Link>
      </div>
    </section>
  )
}

export default Blogs