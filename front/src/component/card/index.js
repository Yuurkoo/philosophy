import "./index.css";

export default function Card({ title, text, info, img }) {
  return (
    <div className="card-container">
      <div className="card card--back">
        <h5 className="front__title">
          Людина повинна набути себе і зрозуміти, що ніщо не може її врятувати
          від її самої, навіть докази існування Бога
        </h5>
      </div>
      <div className="card card--front">
        <h5 className="card__title">{title}</h5>
        <p className="card__text">{info}</p>
        <p className="card__text">
          <small className="text__muted">{text}</small>
        </p>
      </div>
    </div>
  );
}
