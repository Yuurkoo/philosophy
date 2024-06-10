import "./index.css";
import statement__1 from "../find-God/statement__1.svg";
import statement__3 from "../find-God/statement__3.svg";
import statement__2 from "../find-God/statement__2.svg";

export default function TeachNitze() {
  return (
    <div className="finder">
      <div className="part">
        <p
          style={{
            fontSize: "22px",
            fontWeight: "bold",
          }}
        >
          Фрідріх Ніцше: Переосмислення сутності людського буття
        </p>
      </div>

      <div className="statement">
        <strong>Тема 1</strong>
        <div className="first-day">
          <h2>
            Соціальна роль інтелігенції у контексті концепції “волі до влади”
          </h2>
          <div className="part">
            <img src={statement__1} alt="" />
            <p>
              Прочитайте вибрані сторінки з "Соціальна роль інтелігенці у
              контексті концепції волі до влади"
            </p>
          </div>
          <div className="day_text">
            Заплануйте час для самостійного читання вибраних розділів з праці
            "Соціальна роль інтелігенці у контексті концепції волі до влади". Ви
            можете скористатися паперовими книгами або електронними версіями.
            При читанні, зверніть увагу на особисті думки та почуття автора,
            його внутрішні боротьби та роздуми. Спробуйте зрозуміти, які моменти
            особливо зацікавили або здивували вас.
          </div>
        </div>
      </div>

      <div className="statement">
        <p className="underline">Матеріал читання:</p>
        <a href="https://core.ac.uk/download/pdf/42975489.pdf">
          Джерело для читання
        </a>
      </div>

      <div className="statement">
        <strong>Тема 2</strong>
        <div className="first-day">
          <h2>Народження трагедії</h2>
          <div className="part">
            <img src={statement__1} alt="" />
            <p>
              Прочитайте вибрані сторінки з "Народження трагедії" та
              проаналізуйте прочитане. Яку роль, на вашу думку, відіграла
              діяльність Ніцше у сфері ідеї і науки про людство?
            </p>
          </div>
        </div>
        <div className="statement">
          <p className="underline">Матеріал читання:</p>
          <a href="https://ekmair.ukma.edu.ua/server/api/core/bitstreams/ab6f00bf-520e-45df-b662-d49d35ac0c3b/content">
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
          можуть співпадати з вченням Ніцше.
        </span>
      </div>

      <div className="statement">
        <strong>Тема 3</strong>
        <div className="first-day">
          <h2>По той бік добра і зла. Генеалогія моралі</h2>
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
          <a href="">Самостійний пошук джерела читання</a>
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
