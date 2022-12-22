import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

const Product = ({product,handleAddToCart}) => {
    
    const { img, name, price, seller, ratings } = product;

    return (
        <div className='product'>
            <img src={img} alt="" className='pro-img' />
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p >Price: ${price}</p>
                <p><small>Manufacturer: {seller}</small></p>
                <p><small>Rating: {ratings} stars</small></p>
            </div>

            <div className='btn-container'>
            <button className='product-btn' onClick={()=>handleAddToCart(product)}> <p className='btn-para'>Add to Cart</p> <FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon></button>
            
            </div>
           

        </div>
    );
};

export default Product;