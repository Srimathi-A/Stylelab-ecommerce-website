// CartItems.js

import React, { useContext } from 'react';
import './CartItems.css';
import { ShopContext } from '../../Context/ShopContext';
import cart_cross_icon from '../Assets/cart_cross_icon.png';
import Amount from '../Amount/Amount';
//import axios from "axios";

const CartItems = () => {
    const { products, getTotalCartAmount, cartItems, removeFromCart } = useContext(ShopContext);

    const handleCODButtonClick = () => {
        const newWindow = window.open('', '_blank');
        newWindow.document.body.innerHTML = `
        <div class="cash-on-delivery-form">
        <h2>Cash On Delivery Form</h2>
        <form>
        <table>
            <tr>  
                <td>Name:</td>
                <td><input type="text" name="name" required style="margin-bottom: 10px; padding: 5px;" /></td>
            </tr>
            <tr><td>   
                Shipping Address:</td>
                <td><textarea name="address" required style="margin-bottom: 10px; padding: 5px;"></textarea></td>
            </tr> 
            <tr>
                <td>Phone Number:</td>
                <td><input type="tel" name="phone" required style="margin-bottom: 10px; padding: 5px;" /></td>
            </tr>
            <tr ><td>
            <button type="submit" style="background-color: #4CAF50; color: white; padding: 10px 20px; border: none; cursor: pointer;">Submit</button></td></tr>
        </table>
            </form>
    </div>
        `;
    };

    return (
        <div className='cartitems'>
            <div className="cartitems-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {products.map((product) => {
                if (cartItems[product.id] > 0) {
                    return (
                        <div key={product.id}>
                            <div className="cartitems-format-main cartitems-format">
                                <img src={product.image} alt="" className='carticon-product-icon'/>
                                <p cartitems-product-title="true">{product.name}</p>
                                <p>Rs.{product.new_price}</p>
                                <button className='cartitems-quantity'>{cartItems[product.id]}</button>
                                <p>Rs.{product.new_price * cartItems[product.id]}</p>
                                <img
                                    className='cartItems-remove_icon'
                                    src={cart_cross_icon}
                                    onClick={() => removeFromCart(product.id)}  // Pass the product id as an argument
                                    alt=""
                                />
                            </div>
                            <hr />
                        </div>
                    );
                }
                return null;
            })}
            <br />
            <div className="cartitems-down">
                <div className="cartitems-total">
                    <h1>cart Totals</h1>
                    <div>
                        <div className="cartitems-total-item">
                            <p>Subtotal</p>
                            <p>Rs.{getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <p>Total</p>
                            <p>Rs.{getTotalCartAmount()}</p>
                        </div>
                    </div>
                    <button className="cod" onClick={handleCODButtonClick}>CHECKOUT</button>
                </div>
            </div>
            <Amount />
        </div>
    );
}

export default CartItems;
