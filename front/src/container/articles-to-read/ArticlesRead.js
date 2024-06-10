import "./index.css";
import article from "./article.svg";
import Title from "../../component/title";
import article2 from "./article-2.svg";
import article3 from "./article-3.svg";
import article4 from "./article-4.svg";
import article5 from "./article-5.svg";
import { useNavigate } from "react-router-dom";

export default function ARticlesToRead() {
  const nav = useNavigate();
  return (
    <div className="articles-to-read">
      <Title>Популярні статті</Title>
      <div className="article-container">
        <a
          style={{ color: "black", cursor: "pointer" }}
          onClick={() => nav("/article-existence-matter")}
        >
          <div className="article-block">
            <img className="img" src={article} alt="Article" />
            <p className="artc_text">
              Про буття і матерію. Як ми пізнаємо буття ?
            </p>
          </div>
        </a>

        <a
          style={{ color: "black", cursor: "pointer" }}
          onClick={() => nav("/article-rationalism")}
        >
          <div className="article-block">
            <img className="img" src={article2} alt="Article" />
            <p className="artc_text">
              Раціоналізм проти емпіризму, та як здобути евдемонію?
            </p>
          </div>
        </a>

        <a
          style={{ color: "black", cursor: "pointer" }}
          onClick={() => nav("/article-rod-avgustin")}
        >
          <div className="article-block">
            <img className="img" src={article3} alt="Article" />
            <p className="artc_text">Пошук Бога за Августином</p>
          </div>
        </a>

        <a
          style={{ color: "black", cursor: "pointer" }}
          onClick={() => nav("/story-repentance-avgustin")}
        >
          <div className="article-block">
            <img className="img" src={article4} alt="Article" />
            <p className="artc_text">
              Історія покаяння та становлення св.Августина
            </p>
          </div>
        </a>

        <a
          style={{ color: "black", cursor: "pointer" }}
          onClick={() => nav("/meaning-death-in-nowdays")}
        >
          <div className="article-block">
            <img className="img" src={article5} alt="Article" />
            <p className="artc_text">Значення смерті в сучасному світі</p>
          </div>
        </a>
      </div>
    </div>
  );
}
