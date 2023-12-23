import React from "react";
import "./RelatedProducts.css";
import data_products from "../Assets/data";
import Item from "../Item/Item";

const RelatedProducts = () => {
    return (
        <div className="related-products">
            <h1>Related Products</h1>
            <hr/>
            <div className="related-products-list">
                {data_products.map((item,i)=>{
                    return <Item key={i} id={item.id} name={item.name} image={item.image} price={item.new_price}/>
                })}
            </div>
        </div>
    );
}

export default RelatedProducts;