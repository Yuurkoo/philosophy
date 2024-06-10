import "./index.css";

export default function Quote({ title, text, info }) {
  return (
    <div className="quote">
      <h5 className="quote__title">{title}</h5>
      <p className="quote__text">{info}</p>
      <p className="quote__info">{text}</p>
    </div>
  );
}
