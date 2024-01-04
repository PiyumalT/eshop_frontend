import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext'
// import './CSS/Product.css'
// import {Breadcrum} from '../Components/Breadcrum/Breadcrum'
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts';

const Product = () => {
  const {ProductId} =useParams();
  return (
    <div>
      {/* <Breadcrum product={product}/> */}
      
      <ProductDisplay/>
      <RelatedProducts/>
    </div>
  )
}
export default Product;