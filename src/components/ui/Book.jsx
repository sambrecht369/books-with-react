import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { books } from "../../data";
import { Link } from "react-router-dom";
import Rating from "./Rating";
import Price from "./Price";




const Book = ({ books }) => {
    return (
        <div className="book">
            <Link to={`/books/${books.id}`}>
                <figure className="book__img--wrapper">
                    <img src={books.url} 
                    alt="" 
                    className="book__img" />
                </figure>
            </Link>
            <div className="book__title">
                <Link to={`/books/${books.id}`} className="book__title--link">{books.title}</Link>
            </div>
            <Rating rating={books.rating}/>
            <Price salePrice={books.salePrice} originalPrice={books.originalPrice} />
        </div>
    );
}

export default Book;