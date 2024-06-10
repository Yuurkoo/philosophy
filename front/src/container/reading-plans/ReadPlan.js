import "./index.css";
import Title from "../../component/title";
import Readingcard from "../../component/reading-card";
import baner from "./baner.png";
import Stage from "../../component/stage";
import philo1 from "./philo1.svg";
import philo2 from "./philo2.svg";
import philo3 from "./philo3.svg";
import philo4 from "./philo4.svg";
import german1 from "./german1.svg";
import german2 from "./german2.svg";
import german3 from "./german3.svg";
import german4 from "./german4.svg";
import next from "./next.svg";
import { useNavigate } from "react-router-dom";

export default function ReadingPlans() {
  const nav = useNavigate();
  return (
    <div className="plans_section">
      <div className="section">
        <div className="plans_baner">
          <img src={baner} alt="baner" />

          <div className="overhide">
            <p className="sub_title">план місяця</p>
            <strong className="caption">Пошук Бога на глибині серця</strong>
            <div className="info">
              <span>
                Вивчення Божественної любові через творіння св. Бонавентури
              </span>
            </div>

            <button
              className="start"
              onClick={() => nav("/reading_plan:find-a-God")}
            >
              Розпочати
            </button>
          </div>
        </div>
        <div className="component">
          <Readingcard />
        </div>
      </div>

      <div className="antiquity">
        <Title>Антична філософія</Title>

        <div className="regular">
          <a
            style={{ color: "black", cursor: "pointer" }}
            onClick={() => nav("/ancient-philosophy-socrat-teaching")}
          >
            <Stage
              left={philo1}
              text="Мудрість Сократа: Дослідження принципів життя та пізнання себе"
              right={next}
            />
          </a>

          <a
            style={{ color: "black", cursor: "pointer" }}
            onClick={() => nav("/ancient-philosophy-epicur-teaching")}
          >
            <Stage
              left={philo2}
              text="Епікур та щастя душі
            Засвоєння радості "
              right={next}
            />
          </a>

          <a
            style={{ color: "black", cursor: "pointer" }}
            onClick={() => nav("/ancient-philosophy-aristotel-teaching")}
          >
            <Stage
              left={philo3}
              text="Аристотель: Пошук гармонії між розумом і етикою"
              right={next}
            />
          </a>

          <a
            style={{ color: "black", cursor: "pointer" }}
            onClick={() => nav("/ancient-philosophy-avrely-teaching")}
          >
            <Stage
              left={philo4}
              text="Філософія стоїцизму Марка Аврелія: Мудрість управління життям"
              right={next}
            />
          </a>
        </div>
      </div>
      <div className="antiquity">
        <Title>Німецький ідеалізм</Title>

        <div className="regular">
          <a
            style={{ color: "black", cursor: "pointer" }}
            onClick={() => nav("/german-idealism-fihte-teaching")}
          >
            <Stage
              left={german1}
              text="Йоганн Готтліб Фіхте: Філософське визначення свободи і волі"
              right={next}
            />
          </a>

          <a
            style={{ color: "black", cursor: "pointer" }}
            onClick={() => nav("/german-idealism-cant-teaching")}
          >
            <Stage
              left={german2}
              text="Іммануїл Кант: Критична філософія пізнання та моральних норм"
              right={next}
            />
          </a>

          <a
            style={{ color: "black", cursor: "pointer" }}
            onClick={() => nav("/german-idealism-nitze-teaching")}
          >
            <Stage
              left={german3}
              text="Фрідріх Ніцше: Переосмислення  сутності людського буття"
              right={next}
            />
          </a>
          <a
            style={{ color: "black", cursor: "pointer" }}
            onClick={() => nav("/german-idealism-marks-teaching")}
          >
            <Stage
              left={german4}
              text="Карл Маркс та ідея історичного матеріалізму."
              right={next}
            />
          </a>
        </div>
      </div>
    </div>
  );
}
