import React, { useState } from "react";
import { Link, useParams } from "react-router-dom/cjs/react-router-dom.min";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Rating from "../components/ui/Rating";
import Price from "../components/ui/Price";
import Book from "../components/ui/Book";
import Cart from "./Cart";





const BookInfo = (props) => {
    const { books, addToCart, cart } = props;
    const { id } = useParams();
    const book = books.find((book) => +book.id === +id);
    const [added, setAdded] = useState(false);

    function handleAddToCart(book) {
        addToCart(book);
    }

    function bookExistsOnCart() {
        return cart.find(book => book.id === +id);
    }


    return (
        <div id="books__body">
            <main id="books__main">
                <div className="books__container">
                    <div className="row">
                        <div className="book__selected--top">
                            <Link to="/books" className="book__link">
                                <FontAwesomeIcon icon="arrow-left" />
                            </Link>
                            <Link to="/books" className="book__link">
                            <h2 className="book__selected--title--top">Books</h2>
                            </Link>
                        </div>
                        <div className="book__selected">
                            <figure className="book__selected--figure">
                                <img src={book.url} alt="" className="book__selected--img" />
                            </figure>
                            <div className="book__selected--description">
                                <h2 className="book__selected--title">{book.title}</h2>
                                <Rating rating={book.rating}/>
                                <div className="book__selected--price">
                                    <Price originalPrice={book.originalPrice} salePrice={book.salePrice}/>
                                </div>
                                <div className="book__summary">
                                    <h3 className="book__summary--title">
                                        Summary
                                    </h3>
                                    <p className="book__summary--para">
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore rerum magnam, itaque ratione soluta facilis impedit deleniti voluptatum necessitatibus aliquid quod eos quos tempora mollitia similique magni perferendis maxime velit.
                                    </p>
                                    <p className="book__summary--para">
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore rerum magnam, itaque ratione soluta facilis impedit deleniti voluptatum necessitatibus aliquid quod eos quos tempora mollitia similique magni perferendis maxime velit.
                                    </p>
                                </div>
                                {bookExistsOnCart() ? (
                                  <Link to="/cart" className="book__link">
                                  <button className="btn">Checkout</button></Link>
                                ) : (
                                    <button className="btn" onClick={() => handleAddToCart(book)}>Add to cart</button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="books__container">
                    <div className="row">
                        <div className="book__selected--title">
                            <h2 className="book__selected--title--top">
                                Recommended Books
                            </h2>
                        </div>
                        <div className="books">
                        {
                            books
                            .filter((books) => books.rating === 5 && +books.id !== +id)
                            .slice(0, 4)
                            .map(books => <Book books={books} key={books.id} />)
                        }
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default BookInfo;