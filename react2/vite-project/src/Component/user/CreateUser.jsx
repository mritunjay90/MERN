import React, { useState } from 'react'
import { toast } from 'react-toastify'
import axios from 'axios'

const CreateUser = () => {
  const [name, setName] = useState("")
  const [address, setAddress] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [phone, setPhone] = useState("")

  const handleSubmit =async (e) => {
    e.preventDefault()
    const data = {
      name: name,
      address: address,
      email: email,
      password: password,
      phone: phone,
    }
    console.log(data)
    try {
      let result = await axios({
        url: "http://localhost:7000/user",
        method: "POST",
        data: data
      });
      toast.success("User created successfully")
      console.log(result)
      setName("")
      setAddress("")
      setEmail("")
      setPassword("")
      setPhone("")
    } catch (error) {
      toast.error(error.response.data.message)
      console.log(error.response)
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <div>
            <label htmlFor="name">Name:</label>
            <input
            type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              
            />
          </div>
          <div>
            <label htmlFor="address">Address:</label>
            <input
              type="text"
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="phone">Phone:</label>
            <input
              type="text"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default CreateUser
