import "./index.css";
import Article from "../../component/article";
import Title from "../../component/title";
import { useRef } from "react";
import article from "./article.svg";
import death from "./death.svg";
import article3 from "./article-3.svg";
import article4 from "./article-4.svg";
import article2 from "./article-2.svg";
import { useNavigate } from "react-router-dom";

export default function ArticlesList({ title }) {
  const nav = useNavigate();
  const articleContainerRef = useRef(null);

  const scrollLeft = () => {
    articleContainerRef.current.scrollBy({
      left: -articleContainerRef.current.offsetWidth / 1.4,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    articleContainerRef.current.scrollBy({
      left: articleContainerRef.current.offsetWidth / 1.4,
      behavior: "smooth",
    });
  };

  return (
    <div className="articles_list">
      <Title>{title}</Title>

      <div className="slider">
        <button className="slider-button left" onClick={scrollLeft}>
          {"<"}
        </button>
        <div className="article_content" ref={articleContainerRef}>
          <a
            style={{ color: "black", cursor: "pointer" }}
            onClick={() => nav("/article-existence-matter")}
          >
            <Article
              text="Про буття і матерію. Як ми пізнаємо буття ?"
              img={article}
            />
          </a>

          <a
            style={{ color: "black", cursor: "pointer" }}
            onClick={() => nav("/meaning-death-in-nowdays")}
          >
            <Article text="Значення смерті в сучасному світі" img={death} />
          </a>

          <a
            style={{ color: "black", cursor: "pointer" }}
            onClick={() => nav("/story-repentance-avgustin")}
          >
            <Article
              text="Історія покаяння та становлення св.Августина"
              img={article4}
            />
          </a>
          <a
            style={{ color: "black", cursor: "pointer" }}
            onClick={() => nav("/article-rod-avgustin")}
          >
            <Article text="Пошук Бога за Августином" img={article3} />
          </a>
          <a
            style={{ color: "black", cursor: "pointer" }}
            onClick={() => nav("/article-rationalism")}
          >
            <Article
              text=" Раціоналізм проти емпіризму, та як здобути евдемонію?"
              img={article2}
            />
          </a>
        </div>
        <button className="slider-button right" onClick={scrollRight}>
          {">"}
        </button>
      </div>
    </div>
  );
}
