import React from "react";
import './Item.css'

const Item =(props)=>{
    return(
        <div className="item">
            <img src={props.image} alt="item" />
            <p className="item_name">{props.name}</p>
            <p className="item_price"><b>{props.price} $</b></p>
        </div>
    )
}

export default Item;