import "./index.css";
import Card from "../../component/card";
import Quote from "../../component/quote";
import logo from "./logo.svg";
import ArticlesList from "../articles-list";
import Grid from "../../component/grid";
import Title from "../../component/title";
import Readingcard from "../../component/reading-card";
import PopularsBooks from "../../component/popular-books";

export default function MainContent() {
  return (
    <div className="content">
      <div className="content_plan">
        <div className="content_title">
          <Title>philosopHY</Title>
          <img src={logo} alt="Logo" />
        </div>
        <Grid>
          <div className="grid ">
            <div className="left_sectiont template">
              <div className="phrase_of_the_day">
                <Card
                  title="Цитата дня"
                  info="Людина - це те, що вона робить з собою"
                  text="Жан-Поль Сартр"
                />
              </div>
              <div className="philosoph_of_the_day">
                <Quote
                  title="Філософ дня"
                  info="Георг Вільгельм Фрідріх Гегель"
                  text="Німецький філософ XIX століття, який створив систематичну теорію діалектики. Її центральне поняття — розвиток — характеристика діяльності світового духу, його надрухи в царині чистої думки у висхідному ряду чимраз конкретніших категорій."
                />
              </div>
              <div className="articles">
                <ArticlesList title="Останні статті" />
              </div>
            </div>

            <div className="right_sectiont">
              <Readingcard />
              <PopularsBooks />
            </div>
          </div>
        </Grid>
      </div>
    </div>
  );
}
