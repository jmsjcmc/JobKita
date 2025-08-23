import { useState } from "react"


export default function SignUp() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    role: "",
    avatar: null
  })

  const [formState, setFormState] = useState({
    loading: false,
    errors: {},
    showPassword: false,
    avatarPreview: null,
    success: false
  })

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }
  return (
    <div>SignUp</div>
  )
}
