import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css'
const Product = (props) => {
    console.log(props.product)
    const {img, name,price,seller,ratings }=props.product;
   
    return (
            <section>
            <div className='show'>            
            <img src={img} alt="Img"></img>
            
            <div className='product-info'>
            <p className='name'>{name}</p>
            <p className='price'>Price: ৳ {price}</p>
            <p className='seller'><small>Seller: {seller}</small></p>
            <p className='rattings'><small>Rattings: {ratings}</small></p>            
            </div>
            <button className='btn-cart' onClick={()=>props.handleAddToCart(props.product)}><p id='btn-p'>Add to Cart</p>
            <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
            </div>
            </section>

        
    );
};

export default Product;