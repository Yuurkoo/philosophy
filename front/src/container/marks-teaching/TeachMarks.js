import "./index.css";
import statement__1 from "../find-God/statement__1.svg";
import statement__3 from "../find-God/statement__3.svg";
import statement__2 from "../find-God/statement__2.svg";

export default function TeachMarks() {
  return (
    <div className="finder">
      <div className="part">
        <p
          style={{
            fontSize: "22px",
            fontWeight: "bold",
          }}
        >
          Карл Маркс та ідея історичного матеріалізму
        </p>
      </div>

      <div className="statement">
        <strong>Тема 1</strong>
        <div className="first-day">
          <h2>Проблеми суспільствостворення</h2>
          <div className="part">
            <img src={statement__1} alt="" />
            <p>Прочитайте вибрані сторінки з "Проблеми суспільствостворення"</p>
          </div>
          <div className="day_text">
            Заплануйте час для самостійного читання вибраних розділів з праці
            "Проблеми суспільствостворення". Ви можете скористатися паперовими
            книгами або електронними версіями. При читанні, зверніть увагу на
            особисті думки та почуття автора, його внутрішні боротьби та
            роздуми. Спробуйте зрозуміти, які моменти особливо зацікавили або
            здивували вас.
          </div>
        </div>
      </div>

      <div className="statement">
        <p className="underline">Матеріал читання:</p>
        <a href="http://dspace.wunu.edu.ua/bitstream/316497/29983/1/%D0%91%D1%83%D0%BB%D0%B3%D0%B0%D0%BA%D0%BE%D0%B2.pdf">
          Джерело для читання
        </a>
      </div>

      <div className="statement">
        <strong>Тема 2</strong>
        <div className="first-day">
          <h2>Історичний матеріалізм</h2>
          <div className="part">
            <img src={statement__1} alt="" />
            <p>
              Прочитайте вибрані сторінки з "Історичний матеріалізм" та
              проаналізуйте прочитане. Яку роль, на вашу думку, відіграла
              діяльність Маркс у сфері ідеї і науки про людство?
            </p>
          </div>
        </div>
        <div className="statement">
          <p className="underline">Матеріал читання:</p>
          <a href="https://originpedia.org.ua/wiki/historical-materialism">
            Джерело для читання
          </a>
        </div>
      </div>
      <div className="statement">
        <div className="part">
          <img src={statement__3} alt="" />
          <p>Записи в щоденнику</p>
        </div>
        <span>
          Візьміть щоденник або пусту сторінку та запишіть свої роздуми, емоції
          та враження від читання. Розкажіть про свої особисті досвіди, які
          можуть співпадати з вченням Маркса.
        </span>
      </div>
    </div>
  );
}
