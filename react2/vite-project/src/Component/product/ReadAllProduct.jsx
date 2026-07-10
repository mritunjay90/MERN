import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'

const ReadAllProduct = () => {
  const [data, setData] = useState([])

  const getData = async () => {
    try {
      const response = await axios.get('http://localhost:7000/product')
      console.log('API response:', response.data)
      setData(response.data.result)
    } catch (error) {
      console.log('API error:', error)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div>
      {data.map((item, i) => (
        <div key={i}>
          <p>{item.name}</p>
          <p>{item.price}</p>
          <p>{item.quantity}</p>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  )
}

export default ReadAllProduct