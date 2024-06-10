import "./index.css";

export default function LogOut({ className, title }) {
  return (
    <ul>
      <li>
        <a href="#">
          <i className={className}></i>
          <span className="text">{title}</span>
        </a>
      </li>
    </ul>
  );
}
