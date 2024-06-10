import "./index.css";
import { useNavigate } from "react-router-dom";

export default function Help({ className, title }) {
  const nav = useNavigate();
  return (
    <ul>
      <li>
        <a href="" onClick={() => nav("/support")}>
          <i className={className}></i>
          <span className="text">{title}</span>
        </a>
      </li>
    </ul>
  );
}
