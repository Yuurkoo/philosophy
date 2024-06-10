import "./index.css";
import statement__1 from "../find-God/statement__1.svg";
import statement__3 from "../find-God/statement__3.svg";
import statement__2 from "../find-God/statement__2.svg";

export default function TeachAristotel() {
  return (
    <div className="finder">
      <div className="part">
        <p
          style={{
            fontSize: "22px",
            fontWeight: "bold",
          }}
        >
          Аристотель: Пошук гармонії між розумом і етикою
        </p>
      </div>

      <div className="statement">
        <strong>Тема 1</strong>
        <div className="first-day">
          <h2>Етика стародавньої греції</h2>
          <div className="part">
            <img src={statement__1} alt="" />
            <p>Прочитайте вибрані сторінки з "Етика стародавньої греції"</p>
          </div>
          <div className="day_text">
            Заплануйте час для самостійного читання вибраних розділів з праці
            "Етика стародавньої греції". Ви можете скористатися паперовими
            книгами або електронними версіями. При читанні, зверніть увагу на
            особисті думки та почуття автора, його внутрішні боротьби та
            роздуми. Спробуйте зрозуміти, які моменти особливо зацікавили або
            здивували вас.
          </div>
        </div>
      </div>

      <div className="statement">
        <p className="underline">Сторінки читання: 19-34</p>
        <a href="https://ir.lib.vntu.edu.ua/bitstream/handle/123456789/11477/%D0%95%D1%82%D0%B8%D0%BA%D0%B0_%D0%A1%D1%82%D0%B0%D1%80%D0%BE%D0%B4%D0%B0%D0%B2%D0%BD%D1%8C%D0%BE%D1%97_%D0%93%D1%80%D0%B5%D1%86%D1%96%D1%97.PDF?sequence=1&isAllowed=y">
          Джерело для читання
        </a>
      </div>

      <div className="statement">
        <strong>Тема 2</strong>
        <div className="first-day">
          <h2>Гармонія сфер</h2>
          <div className="part">
            <img src={statement__1} alt="" />
            <p>
              Прочитайте вибрані сторінки з "Гармонія сфер" та проаналізуйте
              прочитане. Яку роль, на вашу думку, відіграла діяльність
              Аристотеля у сфері ідеї і науки про людство?
            </p>
          </div>
        </div>
        <div className="statement">
          <p className="underline">Матеріал читання:</p>
          <a href="https://plomin.club/harmony-of-the-spheres-aristotle/">
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
          можуть співпадати з вченням Аристотеля.
        </span>
      </div>

      <div className="statement">
        <strong>Тема 3</strong>
        <div className="first-day">
          <h2>Етика щастя</h2>
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
          <a href="https://idealist.org.ua/2021/10/16/%D0%B0%D1%80%D0%B8%D1%81%D1%82%D0%BE%D1%82%D0%B5%D0%BB%D1%8C-%D0%B5%D1%82%D0%B8%D0%BA%D0%B0-%D1%89%D0%B0%D1%81%D1%82%D1%8F/">
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
    </div>
  );
}
