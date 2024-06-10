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
          Мудрість Сократа: Дослідження принципів життя та пізнання себе
        </p>
      </div>

      <div className="statement">
        <strong>Тема 1</strong>
        <div className="first-day">
          <h2>Принцип справедливості у філософії античних філософів</h2>
          <div className="part">
            <img src={statement__1} alt="" />
            <p>
              Прочитайте вибрані сторінки з "Принцип справедливості у філософії
              античних філософів"
            </p>
          </div>
          <div className="day_text">
            Заплануйте час для самостійного читання вибраних розділів з праці
            "Принцип справедливості у філософії античних філософів". Ви можете
            скористатися паперовими книгами або електронними версіями. При
            читанні, зверніть увагу на особисті думки та почуття автора, його
            внутрішні боротьби та роздуми. Спробуйте зрозуміти, які моменти
            особливо зацікавили або здивували вас.
          </div>
        </div>
      </div>

      <div className="statement">
        <p className="underline">Матеріал читання:</p>
        <a href="https://dspace.uzhnu.edu.ua/jspui/bitstream/lib/34267/1/%D0%9F%D1%83%D0%B1%D0%BB%D1%96%D0%BA%D0%B0%D1%86%D1%96%D1%8F_%D0%A8%D0%B5%D0%BB%D0%B5%D0%B2%D0%B5%D1%80.pdf">
          Джерело для читання
        </a>
      </div>

      <div className="statement">
        <strong>Тема 2</strong>
        <div className="first-day">
          <h2>Принципи Сократа "Пізнай себе"</h2>
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
          <p className="underline">Матеріал читання:</p>
          <a href="https://elartu.tntu.edu.ua/bitstream/123456789/13815/2/VseukrStud_20121v2_Pitura_T-Sokrat_ta_yoho_pryntsyp_piznai_185.pdf">
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
        <strong>Тема 3</strong>
        <div className="first-day">
          <h2>Понятійно-правове мислення у стародавній греції</h2>
          <div className="part">
            <img src={statement__1} alt="" />
            <p>
              Прочитайте вибрані сторінки з з цього розділу. Пострайтеся
              звертати увагу на деталі.
            </p>
          </div>
        </div>
        <div className="statement">
          <p className="underline">Cторінки читання: 800-819</p>
          <a href="http://baltijapublishing.lv/omp/index.php/bp/catalog/download/35/570/1178-1?inline=1">
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
