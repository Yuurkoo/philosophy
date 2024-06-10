import "./index.css";
import statement__1 from "../find-God/statement__1.svg";
import statement__3 from "../find-God/statement__3.svg";
import statement__2 from "../find-God/statement__2.svg";

export default function RoadPlan() {
  return (
    <div className="finder">
      <div className="part">
        <p
          style={{
            fontSize: "22px",
            fontWeight: "bold",
          }}
        >
          Серединний шлях до мудрості
        </p>
      </div>

      <div className="statement">
        <strong>День 1</strong>
        <div className="first-day">
          <h2>
            Серединний шлях як основоположний принцип буддистського сприйняття
          </h2>
          <div className="part">
            <img src={statement__1} alt="" />
            <p>
              Прочитайте вибрані сторінки з "Даосько-буддистська модель
              світосприйняття"
            </p>
          </div>
          <div className="day_text">
            Заплануйте час для самостійного читання вибраних розділів з праці
            "Даосько-будди стська модель світосприйняття". Ви можете
            скористатися паперовими книгами або електронними версіями. При
            читанні, зверніть увагу на особисті думки та почуття автора, його
            внутрішні боротьби та роздуми. Спробуйте зрозуміти, які моменти
            особливо зацікавили або здивували вас.
          </div>
        </div>
      </div>

      <div className="statement">
        <p className="underline">Cторінки читання: 77-84</p>
        <a href="https://ekmair.ukma.edu.ua/server/api/core/bitstreams/da1678bd-d20c-44fd-bfaa-46c9e292a492/content">
          Джерело для читання
        </a>
      </div>

      <div className="statement">
        <strong>День 2</strong>
        <div className="first-day">
          <h2>Серединний шлях як спосіб досягнення абсолюту</h2>
          <div className="part">
            <img src={statement__1} alt="" />
            <p>
              Прочитайте вибрані сторінки з "Серединний шлях як спосіб
              досягнення абсолюту" та проаналізуйте прочитане.
            </p>
          </div>
        </div>
        <div className="statement">
          <p className="underline">Cторінки читання: 84-90</p>
          <a href="https://ekmair.ukma.edu.ua/server/api/core/bitstreams/da1678bd-d20c-44fd-bfaa-46c9e292a492/content">
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
          можуть із прочитаним.
        </span>
      </div>

      <div className="statement">
        <strong>День 3</strong>
        <div className="first-day">
          <h2>Порівняльний аналіз</h2>
          <div className="part">
            <img src={statement__1} alt="" />
            <p>
              Прочитайте вибрані сторінки з "Порівняльний аналіз". Пострайтеся
              звертати увагу на деталі.
            </p>
          </div>
        </div>
        <div className="statement">
          <p className="underline">Cторінки читання: 90-94</p>
          <a href="https://ekmair.ukma.edu.ua/server/api/core/bitstreams/da1678bd-d20c-44fd-bfaa-46c9e292a492/content">
            Джерело для читання
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

      <div className="statement">
        <strong>День 4</strong>
        <div className="first-day">
          <h2>
            Список символів-носіїв ключових категорій китайської космогонії
          </h2>
          <div className="part">
            <img src={statement__1} alt="" />
            <p>
              Прочитайте вибрані сторінки з "Список символів-носіїв ключових
              категорій китайської космогонії". Важливо працювати з мовою
              оригіналу для кращого розуміння. Не завжди переклад відповідає тим
              словам, які нам хотіли передати.
            </p>
          </div>
        </div>
        <div className="statement">
          <p className="underline">Cторінки читання: 94-95</p>
          <a href="https://ekmair.ukma.edu.ua/server/api/core/bitstreams/da1678bd-d20c-44fd-bfaa-46c9e292a492/content">
            Джерело для читання
          </a>
        </div>
      </div>

      <div className="statement">
        <strong>День 5</strong>
        <div className="first-day">
          <h2>Додаткова література</h2>
          <div className="part">
            <img src={statement__1} alt="" />
            <p>
              Прочитайте вибрані сторінки з "Додаткова література". Якщо маєте
              бажання заглибись у вивчення цієї теми більш детально, ознайомтеся
              із списком корисної літератури для читання
            </p>
          </div>
        </div>
        <div className="statement">
          <p className="underline">Cторінки читання: 95-96</p>
          <a href="https://ekmair.ukma.edu.ua/server/api/core/bitstreams/da1678bd-d20c-44fd-bfaa-46c9e292a492/content">
            Джерело для читання
          </a>
        </div>
      </div>
    </div>
  );
}
