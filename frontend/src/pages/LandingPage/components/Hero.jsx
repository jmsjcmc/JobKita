import { ArrowRight, Building2, Search, TrendingUp, User } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export default function Hero() {
    const isAuthenticated = true;
    const user = {fullName: 'Alex', role: 'employer'}
    const navigate = useNavigate()
    const stats = [
        {icon: User, label: 'Active Users', value: '2.4M+'},
        {icon: Building2, label: 'Companies', value: '50k+'},
        {icon: TrendingUp, label: 'Jobs Posted', value: '150k+'}
    ]
  return (
    <section className='pt-24 pb-16 bg-white min-h-screen flex items-center'>
        <div className='container mx-auto px-4'>
            <div className='max-w-4xl mx-auto text-center'>
                <motion.h1 
                initial={{ opacity: 0, y: 30}}
                animate={{ opacity: 1, y: 0}}
                transition={{ duration: 0.8}}
                className='text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight pt-10'>
                    Find Your Dream Job or
                    <span className='block bg-blue-300 bg-clip-text text-transparent mt-2'>Perfect Hire</span>
                </motion.h1>

                <motion.p
                initial={{ opacity: 0, y: 30}}
                animate={{ opacity: 1, y: 0}}
                transition={{ delay: 0.2, duration: 0.8}}
                className=''>
                    Connect talented professionals with innovative companies.
                    Your next career move or perfect candidate is just one click away.
                </motion.p>

                <motion.div
                initial={{ opacity: 0, y: 30}}
                animate={{ opacity: 1, y: 0}}
                transition={{ delay: 0.4, duration: 0.8}}>
                    <motion.button
                    whileHover={{ scale: 1.02}}
                    whileTap={{ scale: 0.98}}
                    onClick={() => navigate('/find-jobs')}>
                        <Search />
                        <span>Find Jobs</span>
                        <ArrowRight />
                    </motion.button>
                    <motion.button
                    whileHover={{ scale: 1.02}}
                    whileTap={{ scale: 0.98}}
                    className=''
                    onClick={() => {
                        navigate(isAuthenticated && user?.role === 'employer'
                            ? '/employer-dashboard'
                            : '/login'
                        );
                    }}>
                        Post a Job
                    </motion.button>
                </motion.div>

                <motion.div
                initial={{opacity: 0, y: 30}}
                animate={{opacity: 1, y: 0}}
                transition={{ delay: 0.6, duration: 0.8}}>
                    {stats.map((stats, index) => (
                        <motion.div
                        key={index}
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{ delay: 0.8 + index * 0.1, duration: 0.6}}>
                            <div>
                                <stats.icon />
                            </div>
                            <div>{stats.value}</div>
                            <div>{stats.label}</div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
        <div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </section>
  )
}
