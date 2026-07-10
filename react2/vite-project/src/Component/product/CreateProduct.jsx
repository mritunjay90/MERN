import React from 'react'
import useState from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
const CreateProduct = () => {
  let [name, setName] = React.useState("")
  let [price, setPrice] = React.useState("")
  let [quantity, setQuantity] = React.useState("")
  let [description, setDescription] = React.useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        let data = {
          name: name,
          price: price,
          quantity: quantity,
          description: description
        }
        console.log(data)
        try {
          let result = await axios({
            url: "http://localhost:7000/product",
            method: "POST",
            data: data
          });
          toast.success("Product created successfully")
          console.log(result)
          setName("")
          setPrice("")
          setQuantity("")
          setDescription("")
        } catch (error) {
          toast.error(error.response.data.message)
          console.log(error.response)
        }
    };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <div>
            <label htmlFor="name">Name:</label>
            <input id="name" 
            value={name}
            onChange={(e)=>{
              setName(e.target.value)
            }}></input>
          </div>
          <div>
            <label htmlFor="price">Price:</label>
            <input id="price" 
            type="number"
            value={price}
            onChange={(e)=>{
              setPrice(e.target.value)
            }}></input>
          </div>
          <div>
            <label htmlFor="quantity">Quantity:</label>
            <input id="quantity" 
            value={quantity}
            onChange={(e)=>{
              setQuantity(e.target.value)
            }}></input>
          </div>
          <div>
            <label htmlFor="description">Description:</label>
            <textarea id="description" 
            value={description}
            onChange={(e)=>{
              setDescription(e.target.value)
            }}></textarea>
          </div>

        </div>
        <div>
           <button>create</button>
         </div>
      </form>
    </div>
  )
}

export default CreateProduct
