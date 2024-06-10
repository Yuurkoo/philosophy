import "./index.css";
import statement__1 from "../find-God/statement__1.svg";
import statement__3 from "../find-God/statement__3.svg";
import statement__2 from "../find-God/statement__2.svg";

export default function TeachEpicur() {
  return (
    <div className="finder">
      <div className="part">
        <p
          style={{
            fontSize: "22px",
            fontWeight: "bold",
          }}
        >
          Епікур та щастя душі Засвоєння радості
        </p>
      </div>

      <div className="statement">
        <strong>Тема 1</strong>
        <div className="first-day">
          <h2>Щастя, придатне для органічних тіл</h2>
          <div className="part">
            <img src={statement__1} alt="" />
            <p>
              Прочитайте вибрані сторінки з "Щастя, придатне для органічних тіл"
            </p>
          </div>
          <div className="day_text">
            Заплануйте час для самостійного читання вибраних розділів з праці
            "Щастя, придатне для органічних тіл". Ви можете скористатися
            паперовими книгами або електронними версіями. При читанні, зверніть
            увагу на особисті думки та почуття автора, його внутрішні боротьби
            та роздуми. Спробуйте зрозуміти, які моменти особливо зацікавили або
            здивували вас.
          </div>
        </div>
      </div>

      <div className="statement">
        <p className="underline">Матеріал читання:</p>
        <a href="https://echafaud.org/lamettrie-medical-epicureanism/">
          Джерело для читання
        </a>
      </div>

      <div className="statement">
        <strong>Тема 2</strong>
        <div className="first-day">
          <h2>Значення "задоволення" у філософії Епікура</h2>
          <div className="part">
            <img src={statement__1} alt="" />
            <p>
              Прочитайте вибрані сторінки з "Значення задоволення у філософії
              Епікура" та проаналізуйте прочитане. Яку роль, на вашу думку,
              відіграла діяльність Епікура у сфері ідеї і науки щодо людства?
            </p>
          </div>
        </div>
        <div className="statement">
          <p className="underline">Матеріал читання:</p>
          <a href="https://openarchive.nure.ua/server/api/core/bitstreams/edd03189-f245-4acc-90d7-77aafafd7ecb/content">
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
          можуть співпадати з вченням Епікура.
        </span>
      </div>
    </div>
  );
}
