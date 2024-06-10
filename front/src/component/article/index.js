import "./index.css";

export default function Article({ img, text }) {
  return (
    <div className="article">
      <img className="img" src={img} alt="Article" />
      <p className="sub_text">{text}</p>
    </div>
  );
}
