import "./index.css";

export default function Card({ title, text, info, img }) {
  return (
    <div class="card-container">
      <div class="card card--back">
        <h5 class="front__title">
          Людина повинна набути себе і зрозуміти, що ніщо не може її врятувати
          від її самої, навіть докази існування Бога
        </h5>
      </div>
      <div class="card card--front">
        <h5 class="card__title">{title}</h5>
        <p class="card__text">{info}</p>
        <p class="card__text">
          <small class="text__muted">{text}</small>
        </p>
      </div>
    </div>
  );
}
