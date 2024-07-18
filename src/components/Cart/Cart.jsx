import React, { useContext, useState } from "react";
import { Link } from 'react-router-dom';
import {MdClose} from "react-icons/md";
import {BsCartX} from "react-icons/bs";
import { Context } from "../../utils/context";
import CartItem from "./CartItem/CartItem";
import "./Cart.scss";
const Cart = ({setShowCart,}) => {
  const {  cartSubTotal } = useContext(Context);
    return <div className="cart-panel">
           <div className="opac-layer"></div>
           <div className="cart-content">
             <div className="cart-header">
                <span className="heading">Shopping Cart</span>
                <span className="close-btn" onClick={() => setShowCart(false)}>
                    <MdClose />
                    <span className="text">close</span>
                </span>
             </div>
            
             {/* <div className="empty-cart">
                <BsCartX />
                <span>No products in the cart.</span>
                <button className="return-cta">RETURN TO SHOP</button>
             </div> */}

            <>
              <CartItem />
              <div className="cart-footer">
                <div className="subtotal">
                    <span className="text">Subtotal:</span>
                    <span className="text total">&#8377;{cartSubTotal }</span>
                </div>
                <div className="button">
                <Link to="/payment">
                  <button className="checkout-cta">Make a Payment</button>
                 </Link>
                    
                </div>
              </div>
            </>

            </div>
    </div>;
};

export default Cart;
