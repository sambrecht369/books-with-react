import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Link } from "react-router-dom";
import Rating from "./Rating";
import Price from "./Price";




const Book = ({ books }) => {
    const[img, setImg] = useState();

       useEffect(() => {
        const image = new Image();
        image.src = books.url;
        image.onload = () => {
            setTimeout(() => {
                setImg(image);
            }, 500);
        }});


    return (
        <div className="book">
            {img ? (
                <>
            <Link to={`/books/${books.id}`}>
                <figure className="book__img--wrapper">
                    <img src={img.src} 
                    alt="" 
                    className="book__img" 
                    />
                </figure>
            </Link>
            <div className="book__title">
                <Link to={`/books/${books.id}`} className="book__title--link">{books.title}</Link>
            </div>
            <Rating rating={books.rating}/>
            <Price salePrice={books.salePrice} originalPrice={books.originalPrice} /> 
                </>

            ) : (
            <>
            <div className="book__img--skeleton"></div>
            <div className="skeleton book__title--skeleton"></div>
            <div className="skeleton book__rating--skeleton"></div>
            <div className="skeleton book__price--skeleton"></div> </>
            )}
        </div>
    );
}

export default Book;