import "./index.css";
import Title from "../../component/title";
import first from "./first.svg";
import clock from "./clock.svg";
import next from "./next.svg";
import second from "./second.svg";
import third from "./third.svg";
import Plan from "../plan";
import { useNavigate } from "react-router-dom";

export default function Readingcard() {
  const nav = useNavigate();
  return (
    <div className="reading_card">
      <Title>Готові плани читання</Title>

      <div className="plans">
        <a
          style={{ color: "black", cursor: "pointer" }}
          onClick={() => nav("/the-middle-path-to-wisdom")}
        >
          <Plan
            onClick={() => nav("/the-middle-path-to-wisdom")}
            mainImage={first}
            title="Серединний шлях до мудрості"
            clock={clock}
            duration="5-7 днів"
            arrow={next}
          />
        </a>

        <a
          style={{ color: "black", cursor: "pointer" }}
          onClick={() => nav("/socrates-teachings")}
        >
          <Plan
            mainImage={third}
            title="Пізнай Себе разом з Сократом"
            clock={clock}
            duration="3-4 дні"
            arrow={next}
          />
        </a>

        <a
          style={{ color: "black", cursor: "pointer" }}
          onClick={() => nav("/epictet-plan")}
        >
          <Plan
            mainImage={second}
            title="Стоїчна філософія з Епіктетом"
            clock={clock}
            duration="5-10 днів"
            arrow={next}
          />
        </a>
      </div>
    </div>
  );
}
