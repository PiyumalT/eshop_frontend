import React ,{useContext} from 'react';
import {ShopContext} from '../Context/ShopContext';
import Item from '../Components/Item/Item'
import './CSS/ShopCategory.css'

const ShopCategory = (props) => {
    const {all_products} = useContext(ShopContext);
    return (
        <div className="shop-catgory">
            <h2>{props.category}</h2>
            <div className="shop-catgory-indexSort">
                <p>
                    <span>Showing __</span> out of __ products
                </p>
                <div className="shopcategory-sort">
                    sort by : dropdown
                </div>
            </div>
            <div className="shop-category-products">
                {all_products.map((item,i) => {
                    if(item.category === props.category){
                        return <Item key={i} id={item.id} name={item.name} image={item.image} price={item.new_price}/>
                    }
                    else{
                        return null;
                    }
                })}
            </div>
            {/* add explore more button later */}
        </div>
    )
}

export default ShopCategory