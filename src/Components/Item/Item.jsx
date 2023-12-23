import React from "react";
import './Item.css'
import { Link } from 'react-router-dom'

const Item =(props)=>{
    return(
        <div className="item">
            <Link to={`/product/${props.id}`} onClick={window.scrollTo(0,0)} >
                <img src={props.image} alt="item" />
                <p className="item_name">{props.name}</p>
                <p className="item_price"><b>{props.price} $</b></p>
            </Link>
        </div>
    )
}

export default Item;