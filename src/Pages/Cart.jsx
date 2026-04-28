import React from "react";
import EmptyCart from "../assets/empty_cart.svg";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { books } from "./Books";


const Cart = ({ cart, changeQuantity, removeItem }) => {
    const calculateSubTotal = () => {
        let subTotal = 0;
        cart.forEach((item) => {
            subTotal += (item.salePrice || item.originalPrice) * item.quantity;
        });
        return subTotal;
    };

    const calculateTax = () => {
        return calculateSubTotal() * 0.07;
    };

    const calculateTotal = () => {
        return calculateSubTotal() + calculateTax();
    };  


    return (
        <div id="books__body">
            <main id="books__main">
                <div className="books__container">
                    <div className="row">
                        <div className="book__selected--top">
                            <h2 className="cart__title">Cart</h2>
                        </div>
                        <div className="cart">
                            <div className="cart__header">
                                <span className="cart__book">Book</span>
                                <span className="cart__quantity">Quantity</span>
                                <span className="cart__total">Price</span>
                            </div>
                            <div className="cart__body">
                                {cart.map(books => {
                                        return (
                                            <div className="cart__item">
                                    <div className="cart__book">
                                        <img 
                                        src={books.url} 
                                        className="cart__book--img" 
                                        alt=""/>
                                        <div className="cart__book--info">
                                            <span className="cart__book--title">
                                                {books.title}
                                            </span>
                                            <span className="cart__book--price">${(books.salePrice || books.originalPrice).toFixed(2)}</span>
                                            <button className="cart__book--remove" onClick={() => removeItem(books)}>Remove</button>
                                        </div>
                                    </div>
                                    <div className="cart__quantity">
                                        <input 
                                        type="number" 
                                        min={0} 
                                        max={99} 
                                        className="cart__input" 
                                        onChange={(event) => changeQuantity(books, event.target.value)}
                                        value={books.quantity} 
                                        />
                                    </div>
                                    <div className="cart__total">
                                        ${((books.salePrice || books.originalPrice) * books.quantity).toFixed(2)}
                                    </div>
                                </div> 
                                        )
                                    })
                                }
                                {cart.length === 0 && (
                                <div className="cart__empty">
                                    <img src={EmptyCart} alt="" className="cart__empty--img" />
                                    <h2>You don't have any items in your cart!</h2>
                                    <Link to="/books">
                                    <button className="btn">Browse Books</button>
                                    </Link>
                                </div>)}
                            </div>
                            {cart.length > 0 && (
                                <div className="total">
                                    <div className="total__item total__sub-total">
                                        <span>Subtotal</span>
                                        <span>${calculateSubTotal().toFixed(2)}</span>
                                    </div>
                                    <div className="total__item total__sub-tax">
                                    <span>Tax</span>
                                    <span>${calculateTax().toFixed(2)}</span>
                                </div>
                                <div className="total__item total__price">
                                    <span>Total</span>
                                    <span>${calculateTotal().toFixed(2)}</span>
                                </div>
                                <button className="btn btn__checkout no-cursor" 
                                onClick={() => alert(`Haven't gotten around to doing this`)}>
                                    Proceed to checkout
                                </button>
                            </div>)}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Cart;