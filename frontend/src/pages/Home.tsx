import { motion } from 'framer-motion';
import { ArrowRight, Users, Heart, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="space-y-16">
      <section className="text-center space-y-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white"
        >
          Making a Difference,{' '}
          <span className="text-rose-500">One Life at a Time</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
        >
          Join us in our mission to create positive change and support those in
          need through sustainable community development programs.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex justify-center gap-4"
        >
          <Link
            to="/campaigns"
            className="inline-flex items-center px-6 py-3 bg-rose-500 text-white rounded-lg hover:bg-rose-600 transition-colors"
          >
            View Campaigns <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </motion.div>
      </section>

      <section className="grid md:grid-cols-3 gap-8">
        {[
          {
            icon: Users,
            title: 'Community Focus',
            description:
              'Building stronger communities through collaborative efforts and sustainable programs.',
          },
          {
            icon: Heart,
            title: 'Compassionate Care',
            description:
              'Providing support and assistance to those who need it most with dignity and respect.',
          },
          {
            icon: Target,
            title: 'Sustainable Impact',
            description:
              'Creating lasting change through carefully planned and executed initiatives.',
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 * (index + 3) }}
            className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg"
          >
            <item.icon className="w-12 h-12 text-rose-500 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              {item.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              {item.description}
            </p>
          </motion.div>
        ))}
      </section>

      <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Our Impact in Numbers
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {[
                { number: '10,000+', label: 'Lives Impacted' },
                { number: '50+', label: 'Active Campaigns' },
                { number: '100+', label: 'Volunteers' },
                { number: '25+', label: 'Communities Served' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 * index }}
                  className="text-center"
                >
                  <div className="text-2xl font-bold text-rose-500">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 dark:text-gray-300">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80"
              alt="Community Impact"
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>
    </div>
  );
}