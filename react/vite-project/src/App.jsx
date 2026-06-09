import React from 'react'

const App = () => {
  let name= "mrs"
  let surname= "shah"
  let products= [
    { name: "laptop", price: 50000, _id: 1, quantity: 10 },
    { name: "mobile", price: 20000, _id: 2, quantity: 20 },
    { name: "tablet", price: 30000, _id: 3, quantity: 30 },
  ];
  let user = [
    { _id: 1, name: "mrs shah", email: "mrsshah@example.com", image: "iron.jpg" },
    { _id: 2, name: "nitan", surname: "thapa", age: 20, gender: "male", email: "nitanthapa425@gmail.com", image: "iron.jpg" },
    { _id: 3, name: "sita", surname: "thapa", age: 30, gender: "female", email: "sitathapa425@gmail.com", image: "iron.jpg" },
    { _id: 4, name: "rita", surname: "thapa", age: 30, gender: "female", email: "ritathapa425@gmail.com", image: "iron.jpg" },
    { _id: 5, name: "anusha", surname: "thapa", age: 30, gender: "female", email: "anushathapa425@gmail.com", image: "iron.jpg" },
  ]

    
  

  return (<div>
    <h1 style={{ backgroundColor: 'blue', color: 'white' }}>Details</h1>
    <p style={{ backgroundColor: 'lightgray', padding: '10px' }}>Welcome to my app!</p>
    <h2>Features:</h2>
    <p>Name: {name}</p>
    <p style={{border: "solid red 2px"}}>Surname: {surname}</p>
    <p>1+1 is {1+1}</p>
    <img src="iron.jpg" width="300" height="200"/>
    <img src="rdj.jpg" width="300" height="200"/>
    {
      products.map((item,index)=>{
        return <div style={{border: "solid black 2px", margin: "10px", padding: "10px"}} key={item._id}>
          <p>product name is {item.name}</p>
          <p>product price is {item.price}</p>
          <p>product quantity is {item.quantity}</p>
        </div>
      })
    }
    {
      user.map((item,index)=>{
        return <div style={{border: "solid black 2px", margin: "10px", padding: "10px"}} key={item._id}>
          <p>user name is {item.name}</p>
          <p>user email is {item.email}</p>
          <img src={item.image} width="100" height="100"/>
        </div>
      })
    }
  </div>)
};
export default App;