import "./index.css";
import avatar from "./avatar.jpg";
import MainPage from "../main-page";
import ReadPlans from "../read-plans";
import Articles from "../articles";
import Books from "../books";
import Settings from "../settings";
import Help from "../help";
import { useNavigate } from "react-router-dom";

export default function FrontMenu() {
  const nav = useNavigate();
  return (
    <div className="container">
      <div className="sidebar">
        <div className="head">
          <div className="user-img">
            <img src={avatar} alt="Photo" />
          </div>
          <div className="user-details">
            <p className="title">web developer</p>
            <p className="name">Yurko</p>
          </div>
        </div>
        <div className="nav">
          <div className="menu">
            <p className="title">меню</p>
            <MainPage
              className="icon ph-bold ph-house-simple"
              title="Головна сторінка"
            />
            <a
              style={{ color: "black", cursor: "pointer" }}
              onClick={() => nav("/reading-plans")}
            >
              <ReadPlans
                sub="arrow ph-bold ph-caret-down"
                title="Плани читання"
                className="icon ph-bold ph-book"
              />
            </a>

            <Articles className="icon ph-bold ph-article" title="Статті" />
            <Books title="Книги" className="icon ph-bold ph-books" />
          </div>
          <div className="menu">
            <p className="title">інше</p>
            <Settings title="Налаштування" className="icon ph-bold ph-gear" />
          </div>
          <div className="menu account">
            <p className="title">підтримка</p>
            <Help title="Допомога" className="icon ph-bold ph-info" />
          </div>
        </div>
      </div>
    </div>
  );
}
