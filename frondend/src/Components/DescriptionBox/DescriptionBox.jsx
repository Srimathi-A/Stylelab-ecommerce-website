import React from 'react'
import './DescriptionBox.css'
const DescriptionBox = () =>{
    return (
        <div className='descriptionbox'>
            <div className="descriptionbox-navigator">
                <div className="descriptionbox-nav-box">Description</div>
                <div className="descriptionbox-nav-box fade">Reviews (122)</div>
            </div>
            <div className="descriptionbox-description">
                <p> An e-commerce website is an online platform that fecilitate
                  buying and selling of product or services over the internet
                  serves as a virtual marketplaces where businesses and individate
                  showcase their product,interact with customers,and conduct
                  transactions without the need for a physical presence. E-commerce
                  websites have gained immense popularity due to their convention
                  accessibility,and the global reach they offer. </p>
                  <p>E-commerce website typically display product or services a detailed descriptions,
                    images,prices,and any available varible(e.g.,sizes,colors). Each product usually has its own with relevant information.
                  </p>
            </div>

        </div>
    );
};

export default DescriptionBox;