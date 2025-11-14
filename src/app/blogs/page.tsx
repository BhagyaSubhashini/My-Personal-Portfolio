import { blogs } from '@/contents/blogs'
import { FaCalendarAlt, FaClock } from 'react-icons/fa'

export default function BlogsPage() {
  // Use blogs exactly in the order they appear in the array
  const allBlogsInOrder = blogs // No .sort() → preserves your manual order

  return (
    <div className='container max-w-7xl mx-auto py-20 px-4'>
      <h1 className='text-4xl font-bold text-center mb-12'>All Blog Posts</h1>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {allBlogsInOrder.map((blog) => (
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
    </div>
  )
}