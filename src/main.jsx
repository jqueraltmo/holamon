import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";

const books = [
  {
    author: "Ursula K. Le Guin",
    title: "Els desposseïts",
    img: "./images/book-1.jpg",
    id: 1,
  },
  {
    author: "Octavia Butler",
    title: "La parábola del sembrador",
    img: "https://capitanswing.com/wp-content/uploads/Octavia-Butler-La-parabola-del-sembrador.jpg",
    id: 2,
  },
  {
    author: "Nnedi Okorafor",
    title: "Binti: Fuego Sagrado",
    img: "https://shop.crononauta.es/cdn/shop/products/BINTI_SACRED_FIRE_1.png",
    id: 3,
  },
];

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book {...book} key={book.id} />;
      })}
    </section>
  );
}

const Book = (props) => {
  const { img, title, author, id } = props;

  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <button type="button">Troba</button>
      <h4>{author} </h4>
    </article>
  );
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BookList />
  </StrictMode>
);
