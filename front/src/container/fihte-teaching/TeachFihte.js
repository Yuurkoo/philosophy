import "./index.css";
import statement__1 from "../find-God/statement__1.svg";
import statement__3 from "../find-God/statement__3.svg";
import statement__2 from "../find-God/statement__2.svg";

export default function TeachFihte() {
  return (
    <div className="finder">
      <div className="part">
        <p
          style={{
            fontSize: "22px",
            fontWeight: "bold",
          }}
        >
          Йоганн Готтліб Фіхте: Філософське визначення свободи і волі
        </p>
      </div>

      <div className="statement">
        <strong>Тема 1</strong>
        <div className="first-day">
          <h2>Вчення про людину</h2>
          <div className="part">
            <img src={statement__1} alt="" />
            <p>Прочитайте вибрані сторінки з "Вчення про людину"</p>
          </div>
          <div className="day_text">
            Заплануйте час для самостійного читання вибраних розділів з праці
            "Вчення про людину". Ви можете скористатися паперовими книгами або
            електронними версіями. При читанні, зверніть увагу на особисті думки
            та почуття автора, його внутрішні боротьби та роздуми. Спробуйте
            зрозуміти, які моменти особливо зацікавили або здивували вас.
          </div>
        </div>
      </div>

      <div className="statement">
        <p className="underline">Матеріал читання:</p>
        <a href="http://dspace.opu.ua/jspui/bitstream/123456789/7668/1/001%20-%20010.pdf">
          Джерело для читання
        </a>
      </div>

      <div className="statement">
        <strong>Тема 2</strong>
        <div className="first-day">
          <h2>Знання як образ</h2>
          <div className="part">
            <img src={statement__1} alt="" />
            <p>
              Прочитайте сторінки "Знання як образ" та проаналізуйте прочитане.
              Яку роль, на вашу думку, відіграла діяльність Фіхте у сфері ідеї і
              науки щодо людства?
            </p>
          </div>
        </div>
        <div className="statement">
          <p className="underline">Матеріал читання:</p>
          <a href="https://ekmair.ukma.edu.ua/server/api/core/bitstreams/5aaa47ed-ac1b-4b7d-8c8e-163173e3f7c9/content">
            Джерело для читання
          </a>
        </div>
      </div>
    </div>
  );
}
