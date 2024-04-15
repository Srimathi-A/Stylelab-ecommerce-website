import React from 'react';
import './Breadcrums.css';
import arrow_icon from '../Assets/breadcrum_arrow.png';

const Breadcrums = (props) => {
    const { product } = props;
    return (
        <div className='breadcrums'>
            HOME <img src={arrow_icon} alt='' /> SHOP <img src={arrow_icon} alt='' />
            {product && product.category && <span>{product.category}</span>}
            <img src={arrow_icon} alt='' />
            {product && product.name && <span>{product.name}</span>}
        </div>
    );
};

export default Breadcrums;
