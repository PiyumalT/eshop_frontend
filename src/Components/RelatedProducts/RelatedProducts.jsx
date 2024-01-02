import React from "react";
import "./RelatedProducts.css";
import Item from "../Item/Item";
import axios from "axios";

const RelatedProducts = () => {
    const [related_products, setRelated_products] = React.useState([]);

    React.useEffect(() => {
        axios
            .get("products/get/latest/4")
            .then((response) => {
                setRelated_products(response.data);
            })
            .catch((error) => {
                console.error("Error fetching data: ", error);
            });
    }, []);

    return (
        <div className="related-products">
            <h1>Related Products</h1>
            <hr/>
            <div className="related-products-list">
                {related_products.map((item,i)=>{
                    return <Item key={i} id={item._id} name={item.name} image={item.image} price={item.new_price}/>
                })}
            </div>
        </div>
    );
}

export default RelatedProducts;