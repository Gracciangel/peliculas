import { useState } from "react"

export const formControl = () => {

  
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

    const handleChange =(e) =>{
      const {
        name, value
      } = e.target
      setFormData((prevForm)=>({
        ...prevForm ,
        [name]: value
      }))
    }
    
    const handleSubmit =()=>{
      e.preventDefault()
      console.log(formData)
    }
  

  return (
    handleChange , 
    handleSubmit
  )
}
