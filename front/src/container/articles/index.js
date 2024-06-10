import "./index.css";
import { useNavigate } from "react-router-dom";
export default function Articles({ className, title }) {
  const nav = useNavigate();
  return (
    <ul>
      <li>
        <a href="#" onClick={() => nav("/articles-to-read")}>
          <i className={className}></i>
          <span className="text">{title}</span>
        </a>
      </li>
    </ul>
  );
}
