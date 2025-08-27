import { Briefcase } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from 'framer-motion';
import { useAuth } from "../../../context/AuthContext";


export default function Header() {
    const {user, isAuthenticated} = useAuth()
    const navigate = useNavigate()
  return (
    <motion.header
    initial={{opacity: 0, y: -20}}
    animate={{opacity: 1, y: 0}}
    transition={{duration: 0.6}}
    className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-16">
                <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                        <Briefcase className="w-5 h-5 text-white"/>
                    </div>
                    <span className="text-xl font-bold text-gray-900">Job Kita</span>
                </div>

                <nav className="hidden md:flex items-center space-x-8">
                    <a className="text-gray-600 hover:text-gray-900 transition-colors font-medium" onClick={() => navigate("/find-job")}>Find Jobs</a>
                    <a className="text-gray-600 hover:text-gray-900 transition-colors font-medium" onClick={() => navigate(isAuthenticated && user?.role === "employee" 
                        ? '/employer-dashboard'
                        : '/login'
                    )}>For Employers</a>
                </nav>

                <div className="flex items-center space-x-3">
                    {isAuthenticated ? (
                        <div className="flex items-center space-x-3">
                            <span className="text-gray-700">Welcome, {user?.fullName}</span>
                            <a className="bg-blue-400 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-500 shadow-sm hover:shadow-md" onClick={() => navigate(user?.role === 'employer'
                                ? '/employer-dashboard'
                                : '/find-jobs'
                            )}>Dashboard</a>
                        </div>
                    ) : <>
                    <a className="text-gray-600 hover:text-gray-900 transition-colors font-medium px-4 py-2 rounded-lg hover:bg-gray-50" onClick={() => navigate('/sign-in')}>Sign In</a>
                    <a className="text-gray-600 hover:text-gray-900 transition-colors font-medium px-4 py-2 rounded-lg hover:bg-gray-50" onClick={() => navigate('/sign-up')}>Sign Up</a>
                    </>}
                </div>
            </div>
        </div>
    </motion.header>
  )
}
