import "./index.css";
import statement__1 from "../find-God/statement__1.svg";
import statement__3 from "../find-God/statement__3.svg";
import statement__2 from "../find-God/statement__2.svg";

export default function TeachAvrely() {
  return (
    <div className="finder">
      <div className="part">
        <p
          style={{
            fontSize: "22px",
            fontWeight: "bold",
          }}
        >
          Філософія стоїцизму Марка Аврелія: Мудрість управління життям
        </p>
      </div>

      <div className="statement">
        <strong>Тема 1</strong>
        <div className="first-day">
          <h2>Ідеї Марка Аврелія про права людини</h2>
          <div className="part">
            <img src={statement__1} alt="" />
            <p>
              Прочитайте вибрані сторінки з "Ідеї Марка Аврелія про права
              людини"
            </p>
          </div>
          <div className="day_text">
            Заплануйте час для самостійного читання вибраних розділів з праці
            "Ідеї Марка Аврелія про права людини". Ви можете скористатися
            паперовими книгами або електронними версіями. При читанні, зверніть
            увагу на особисті думки та почуття автора, його внутрішні боротьби
            та роздуми. Спробуйте зрозуміти, які моменти особливо зацікавили або
            здивували вас.
          </div>
        </div>
      </div>

      <div className="statement">
        <p className="underline">Матеріал читання:</p>
        <a href="https://visnyk-juris-uzhnu.com/wp-content/uploads/2022/10/10.pdf">
          Джерело для читання
        </a>
      </div>

      <div className="statement">
        <strong>Тема 2</strong>
        <div className="first-day">
          <h2>На одинці з собою</h2>
          <div className="part">
            <img src={statement__1} alt="" />
            <p>
              Рекомендується прочитати книгу "На одинці з собою" та
              проаналізуйте прочитане. Яку роль, на вашу думку, відіграла
              діяльність Аврелій у сфері ідеї і науки щодо людства? Дозвоьте
              собі дізнатися більше про себе ж самого.
            </p>
          </div>
        </div>
        <div className="statement">
          <p className="underline">Матеріал читання:</p>
          <a href="">Самостійний пошук джерела</a>
        </div>
      </div>
    </div>
  );
}
