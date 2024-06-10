import "./index.css";

export default function Stage({ left, text, right }) {
  return (
    <div class="philosophy-card">
      <img class="philosophy-card__image" src={left} alt="Socrates" />
      <div class="philosophy-card__content">
        <span class="philosophy-card__text">{text}</span>
        <img class="philosophy-card__icon" src={right} alt="Arrow" />
      </div>
    </div>
  );
}
