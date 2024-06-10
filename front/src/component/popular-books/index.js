import "./index.css";
import Title from "../../component/title";
import book from "./books-1.svg";
import b00k from "./books-2.svg";

export default function PopularsBooks() {
  return (
    <div className="books">
      <Title>Популярні книги</Title>
      <div className="books-list">
        <div className="book-card">
          <img src={book} />
          <p>Онтологія і Метафізика</p>
        </div>
        <div className="book-card">
          <img src={b00k} />
          <p>Етика і Політика</p>
        </div>
      </div>
    </div>
  );
}
