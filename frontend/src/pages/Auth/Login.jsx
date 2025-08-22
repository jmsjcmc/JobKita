import { useState } from "react"
import { motion } from 'framer-motion';


export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  const [formState, setFormState] = useState({
    loading: false,
    errors: {},
    showPassword: false,
    success: false
  });
  const validateEmail = (email) => {

  }
  const validatePassword = (password) => {

  }
  const handleInputChange = (e) => {

  }
  const validateForm = () => {

  }
  const handleSubmit = async (e) => {

  }
  return (
    <div>
      <motion.div
      initial={{opacity: 0, y: 20}}
      animate={{opacity: 1, y: 0}}
      transition={{duration: 0.6}}>
        <div>
          <h2>Welcome Back</h2>
          <p>Sign in to your JOb Kita account</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div>
            <label >Email Address</label>
            <div>
              <Mail />
              <input 
              type="email" 
              name="email" 
              value={formData.email}
              onChange={handleInputChange}
              className={`w-full pl-10 pr-4 py-3 rounded-lg border 
              ${formState.errors.email ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors`}
              placeholder="Enter your email"/>
            </div>
          </div>
        </form>
      </motion.div>
    </div>
  )
}
