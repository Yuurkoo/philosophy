import Title from "../../component/title";
import "./index.css";

export default function Helper() {
  return (
    <div className="settings">
      <Title> Технічна сторінка</Title>

      <div className="statement stat">
        Якщо виникають труднощі при користуванні, зверніться в підтримку за
        посиланням
        <a
          className="teh"
          href="https://t.me/philosoppHYsupportbot?start=666715533a81612e9c007343"
        >
          Написати в підтримку
        </a>
      </div>
    </div>
  );
}
