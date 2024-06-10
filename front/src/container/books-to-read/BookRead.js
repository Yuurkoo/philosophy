import "./index.css";
import Title from "../../component/title";
import bk1 from "./books-1.svg";
import bk2 from "./books-2.svg";
import bk3 from "./book-3.jpg";
import bk4 from "./book-4.jpg";
import bk5 from "./book-5.jpg";
import bk6 from "./book-6.jpg";
import bk7 from "./book-7.jpg";
import bk8 from "./book-8.webp";

export default function BookToRead() {
  return (
    <div className="books-page-content">
      <Title>Популярні книги</Title>

      <div className="books-page">
        <div className="book-block">
          <img src={bk1} />
          <p>Онтологія і Метафізика</p>
        </div>
        <div className="book-block">
          <img src={bk2} />
          <p>Етика і Політика</p>
        </div>
        <div className="book-block">
          <img src={bk3} />
          <p>Філософія життя</p>
        </div>
        <div className="book-block">
          <img src={bk4} />
          <p>Довкола часу і води</p>
        </div>
        <div className="book-block">
          <img src={bk5} />
          <p>Філософія як спосіб життя</p>
        </div>
        <div className="book-block">
          <img src={bk6} />
          <p>Про природу речей</p>
        </div>
        <div className="book-block">
          <img src={bk7} />
          <p>Війна як внутрішнє переживання</p>
        </div>
        <div className="book-block">
          <img src={bk8} />
          <p>Гімн</p>
        </div>
      </div>
    </div>
  );
}
