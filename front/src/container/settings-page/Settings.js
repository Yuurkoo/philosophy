import "./index.css";
import { useNavigate } from "react-router-dom";
import Title from "../../component/title";
import Setting from "../../component/setting";
import citation from "./citation.svg";
import phil from "./phil.svg";
import plan from "./plan.svg";
import notice from "./notice.svg";
import stats from "./stats.svg";
import another from "./another.svg";

export default function Settings() {
  const nav = useNavigate();
  return (
    <div className="settings">
      <Title>Налаштування системи</Title>
      <br></br>
      <div className="settings_convertor">
        <div
          className="setting-item"
          onClick={() => nav("/philosopher-of-the-day")}
        >
          <Setting img={citation} name="Філософ дня" />
        </div>
        <div className="setting-item" onClick={() => nav("/card-description")}>
          <Setting img={phil} name="Цитата дня" />
        </div>
        <div className="setting-item" onClick={() => nav("/reading-plans")}>
          <Setting img={plan} name="План місяця" />
        </div>
        <div className="setting-item" onClick={() => nav("/notice")}>
          <Setting img={notice} name="Нотатки" />
        </div>
        <div className="setting-item" onClick={() => nav("/articles-to-read")}>
          <Setting img={stats} name="Статті" />
        </div>
        <div className="setting-item" onClick={() => nav("/calendar")}>
          <Setting img={another} name="Календар" />
        </div>
      </div>
    </div>
  );
}
