import React from 'react'

const CreateProduct = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("form submitted")
    };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div></div>
        <div>
           <button>create</button>
         </div>
      </form>
    </div>
  )
}

export default CreateProduct
