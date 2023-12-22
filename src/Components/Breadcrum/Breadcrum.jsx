import React from 'react'

const Breadcrum = (props) => {
    const {product} = props;
  return (
    <div className='breadcrum'>
        Home/{product.category/product.name}
    </div>
  )
}

export default Breadcrum;