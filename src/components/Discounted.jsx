import React from "react";
import { books } from "../data";
import Book from "./ui/Book";

const Discounted = () => {
    return (
        <section id="recent">
            <div className="container">
                <div className="row">
                    <h2 className="section__title">Discount<span className="purple">Books</span></h2>
                </div>
                <div className="books">
                    {books
                    .filter(books => books.salePrice)
                    .slice(0, 8)
                    .map((books) => (
                    <Book books={books} key={books.id} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Discounted;