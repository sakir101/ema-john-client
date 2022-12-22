
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './ReviewItem.css'

const ReviewItem = ({product, handleRemoveItem}) => {
    const {id, name, img, price, quantity} = product;
    return (
        <div className='review-item'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className='review-details-container'>
                <div className='review-details'>
                    <p>{name}</p>
                    <p><small>Price: {price}</small></p>
                    <p><small>Quantity: {quantity}</small></p>
                </div>
                <div className='delete-container'>
                    <button onClick={()=> handleRemoveItem(id)} className='btn-delete'><FontAwesomeIcon icon={faTrash} className='dlt-icon'></FontAwesomeIcon></button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;