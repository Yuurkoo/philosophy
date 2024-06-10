import "./index.css";
import statement__1 from "../find-God/statement__1.svg";
import statement__3 from "../find-God/statement__3.svg";
import statement__2 from "../find-God/statement__2.svg";

export default function SocratPlan() {
  return (
    <div className="finder">
      <div className="part">
        <p
          style={{
            fontSize: "22px",
            fontWeight: "bold",
          }}
        >
          Пізнай себе разом з Сократом
        </p>
      </div>

      <div className="statement">
        <strong>День 1</strong>
        <div className="first-day">
          <h2>Філософія держави та права</h2>
          <div className="part">
            <img src={statement__1} alt="" />
            <p>Прочитайте вибрані сторінки з "Філософія держави та права"</p>
          </div>
          <div className="day_text">
            Заплануйте час для самостійного читання вибраних розділів з праці
            "Філософія держави та права". Ви можете скористатися паперовими
            книгами або електронними версіями. При читанні, зверніть увагу на
            особисті думки та почуття автора, його внутрішні боротьби та
            роздуми. Спробуйте зрозуміти, які моменти особливо зацікавили або
            здивували вас.
          </div>
        </div>
      </div>

      <div className="statement">
        <p className="underline">Cторінки читання: 137-142</p>
        <a href="https://shron1.chtyvo.org.ua/Kotiuk_VO/Filosofiia_derzhavy_i_prava_Sokrata_470-399_rr_do_ne.pdf?PHPSESSID=v304sklnhivda9pmleqqonuq42">
          Джерело для читання
        </a>
      </div>

      <div className="statement">
        <strong>День 2</strong>
        <div className="first-day">
          <h2>
            Всесвітньо історичне значення Сократа у сфері ідеї і науки про
            людство
          </h2>
          <div className="part">
            <img src={statement__1} alt="" />
            <p>
              Прочитайте вибрані сторінки з "Всесвітньо історичне значення
              Сократа у сфері ідеї і науки про людство" та проаналізуйте
              прочитане. Яку роль, на вашу думку, відіграла діяльність Сократа у
              сфері ідеї і науки про людство?
            </p>
          </div>
        </div>
        <div className="statement">
          <p className="underline">Cторінки читання: 143-146</p>
          <a href="https://shron1.chtyvo.org.ua/Kotiuk_VO/Filosofiia_derzhavy_i_prava_Sokrata_470-399_rr_do_ne.pdf?PHPSESSID=v304sklnhivda9pmleqqonuq42">
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
          можуть співпадати з вченням Сократа.
        </span>
      </div>

      <div className="statement">
        <strong>День 3</strong>
        <div className="first-day">
          <h2>«Знати справедливість і бути справедливим — одне й те саме»</h2>
          <div className="part">
            <img src={statement__1} alt="" />
            <p>
              Прочитайте вибрані сторінки з з цього розділу. Пострайтеся
              звертати увагу на деталі.
            </p>
          </div>
        </div>
        <div className="statement">
          <p className="underline">Cторінки читання: 146-150</p>
          <a href="https://shron1.chtyvo.org.ua/Kotiuk_VO/Filosofiia_derzhavy_i_prava_Sokrata_470-399_rr_do_ne.pdf?PHPSESSID=v304sklnhivda9pmleqqonuq42">
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
