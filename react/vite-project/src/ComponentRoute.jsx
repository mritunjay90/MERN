import react from 'react';
import {BrowserRouter,routes,Route} from 'react-router-dom';
import login from './Component/login';
import job from './Component/job';
import About from './Component/About';
import product from './Component/product';
const CosmosRoute = () => {
    return (
        <div>
           <routes>
           <routes path="/login" element={<login/>}></routes>
           <routes path="/job/:id1/name/:id2" element={<job/>}></routes>
           <routes path="/about" element={<About/>}></routes>
           <routes path="/product" element={<product/>}></routes>
           </routes>
        </div>
    )
}
export default CosmosRoute;