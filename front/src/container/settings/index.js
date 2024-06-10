import "./index.css";
import { useNavigate } from "react-router-dom";

export default function Settings({ className, title }) {
  const nav = useNavigate();
  return (
    <ul>
      <li>
        <a href="" onClick={() => nav("/settings-page")}>
          <i className={className}></i>
          <span className="text">{title}</span>
        </a>
      </li>
    </ul>
  );
}
