import "./index.css";

export default function Plan({ mainImage, title, clock, arrow, duration }) {
  return (
    <div className="point">
      <img className="card_image" src={mainImage} alt="" />
      <div className="head_plan">
        <span className="point_text">{title}</span>
        <p>
          <img className="clock" src={clock} alt="" />
          {duration}
          <img className="second_icon" src={arrow} alt="" />
        </p>
      </div>
    </div>
  );
}
