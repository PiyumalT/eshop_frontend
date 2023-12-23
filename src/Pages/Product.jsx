import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext'
// import './CSS/Product.css'
// import {Breadcrum} from '../Components/Breadcrum/Breadcrum'
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts';

const Product = () => {
  const {all_products} = useContext(ShopContext);
  const {ProductId} =useParams();
  const product = all_products.find(product => product.id ===Number(ProductId));
  return (
    <div>
      {/* <Breadcrum product={product}/> */}
      
      <ProductDisplay product={product}/>
      <RelatedProducts/>
    </div>
  )
}
export default Product;