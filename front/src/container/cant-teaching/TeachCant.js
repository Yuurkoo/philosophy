import "./index.css";
import statement__1 from "../find-God/statement__1.svg";
import statement__3 from "../find-God/statement__3.svg";
import statement__2 from "../find-God/statement__2.svg";

export default function TeachCant() {
  return (
    <div className="finder">
      <div className="part">
        <p
          style={{
            fontSize: "22px",
            fontWeight: "bold",
          }}
        >
          Іммануїл Кант: Критична філософія пізнання та моральних норм
        </p>
      </div>

      <div className="statement">
        <strong>Тема 1</strong>
        <div className="first-day">
          <h2>Обгрунтування свободи</h2>
          <div className="part">
            <img src={statement__1} alt="" />
            <p>Прочитайте вибрані сторінки з "Обгрунтування свободи"</p>
          </div>
          <div className="day_text">
            Заплануйте час для самостійного читання вибраних розділів з праці
            "Обгрунтування свободи". Ви можете скористатися паперовими книгами
            або електронними версіями. При читанні, зверніть увагу на особисті
            думки та почуття автора, його внутрішні боротьби та роздуми.
            Спробуйте зрозуміти, які моменти особливо зацікавили або здивували
            вас.
          </div>
        </div>
      </div>

      <div className="statement">
        <p className="underline">Матеріал читання:</p>
        <a href="https://studfreedom.org/obgruntuvannia-svobody-kantianstvo/">
          Джерело для читання
        </a>
      </div>

      <div className="statement">
        <strong>Тема 2</strong>
        <div className="first-day">
          <h2>Концепція згорілого розуму</h2>
          <div className="part">
            <img src={statement__1} alt="" />
            <p>
              Прочитайте вибрані сторінки з "Концепція згорілого розуму" та
              проаналізуйте прочитане. Яку роль, на вашу думку, відіграла
              діяльність Кант у сфері ідеї і науки про людство?
            </p>
          </div>
        </div>
        <div className="statement">
          <p className="underline">Матеріал читання:</p>
          <a href="">Самостійний пошук джерела для читання</a>
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
          можуть співпадати з вченням Канта.
        </span>
      </div>

      <div className="statement">
        <strong>Тема 3</strong>
        <div className="first-day">
          <h2>Рецепції автономної етики Імануїла Канта</h2>
          <div className="part">
            <img src={statement__1} alt="" />
            <p>
              Прочитайте вибрані сторінки з з цього розділу. Пострайтеся
              звертати увагу на деталі.
            </p>
          </div>
        </div>
        <div className="statement">
          <p className="underline">Матеріал читання:</p>
          <a href="https://ena.lpnu.ua:8443/server/api/core/bitstreams/5e9b02f8-5515-42a7-b76e-82003265abb9/content">
            Джерело читання
          </a>
        </div>
      </div>
      <div className="statement">
        <div className="part">
          <img src={statement__2} alt="" />
          <p>Роздуми та саморефлексія</p>
        </div>
        <span>
          Після прочитання розділу, затримайтесь на хвилину, щоб пережити та
          переосмислити прочитане. Задайте собі питання: Які моменти з розділу
          здійснили на мене найбільший вплив? Чи впізнаю я свої власні внутрішні
          конфлікти у тексті?
        </span>
      </div>
    </div>
  );
}
