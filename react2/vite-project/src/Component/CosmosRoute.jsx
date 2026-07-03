import React from 'react'
import { Routes, Route } from 'react-router-dom'
import ReadAllProduct from './product/ReadAllProduct'
import CreateProduct from './product/CreateProduct'
import ReadSpecificProduct from './product/ReadSpecificProduct'
import UpdateProduct from './product/UpdateProduct'
import ReadAllUser from './user/ReadAllUser'
import CreateUser from './user/CreateUser'
import ReadSpecificUser from './user/ReadSpecificUser'
import UpdateUser from './user/UpdateUser'
import ReadAllSchool from './school/ReadAllSchool'
import CreateSchool from './school/CreateSchool'
import ReadSpecificSchool from './school/ReadSpecificSchool'
import UpdateSchool from './school/UpdateSchool'
const CosmosRoute = () => {
  return (
    <Routes>
      <Route path="/product" element={<ReadAllProduct />} />
      <Route path="/product/create" element={<CreateProduct />} />
      <Route path="/product/:id" element={<ReadSpecificProduct />} />
      <Route path="/product/update/:id" element={<UpdateProduct />} />

      <Route path="/user" element={<ReadAllUser />} />
      <Route path="/user/create" element={<CreateUser />} />
      <Route path="/user/:id" element={<ReadSpecificUser />} />
      <Route path="/user/update/:id" element={<UpdateUser />} />

      <Route path="/school" element={<ReadAllSchool />} />
      <Route path="/school/create" element={<CreateSchool />} />
      <Route path="/school/:id" element={<ReadSpecificSchool />} />
      <Route path="/school/update/:id" element={<UpdateSchool />} />
    </Routes>
  )
}

export default CosmosRoute
