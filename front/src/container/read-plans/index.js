import "./index.css";

export default function ReadPlans({ className, sub, title }) {
  return (
    <ul>
      <li>
        <a>
          <i className={className}></i>
          <span className="text">{title}</span>
          <i className={sub}></i>
        </a>
      </li>
    </ul>
  );
}
