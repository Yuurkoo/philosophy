import React from "react";
import FrontMenu from "./container/front-menu";
import MainContent from "./container/main-content";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ReadPlan from "./container/reading-plans/ReadPlan";
import BookRead from "./container/books-to-read/BookRead";
import ArticlesRead from "./container/articles-to-read/ArticlesRead";
import Settings from "./container/settings-page/Settings";
import Helper from "./container/help-page/Helper";
import FindGod from "./container/find-God/FindGod";
import Avtor from "./container/avtor/Avtor";
import CardDesscription from "./container/card-description/CardDesscription";
import Notice from "./container/notice/Notice";
import Mode from "./container/mode/Mode";
import RoadPlan from "./container/road-plan/RoadPlan";
import SocratPlan from "./container/socrat-plan/SocratPlan";
import Calendar from "./container/calendar/Calendar";
import EpictetPlan from "./container/epictet-plan/EpictetPlan";
import TeachSocrat from "./container/socrat-teaching/TeachSocrat";
import TeachAristotel from "./container/aristotel-teaching/TeachAristotel";
import TeachEpicur from "./container/epicraf-teaching/TeachEpicur";
import TeachAvrely from "./container/avreliy-teaching/TeachAvrely";
import TeachFihte from "./container/fihte-teaching/TeachFihte";
import TeachNitze from "./container/nitze-teaching/TeachNitze";
import TeachCant from "./container/cant-teaching/TeachCant";
import TeachMarks from "./container/marks-teaching/TeachMarks";
import ExistenceMatter from "./container/existence-matter/ExistenceMatter";
import Razionalizm from "./container/razionalizm/Razionalizm";
import RoadAvgustin from "./container/road-avgustin/RoadAvgustin";
import StoryRep from "./container/story-repentance/StoryRep";
import Meaning from "./container/meaning-death/Meaning";

function App() {
  return (
    <div className="main--app">
      <BrowserRouter>
        <FrontMenu />
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/reading-plans" element={<ReadPlan />} />
          <Route path="/books-to-read" element={<BookRead />} />
          <Route path="/articles-to-read" element={<ArticlesRead />} />
          <Route path="/settings-page" element={<Settings />} />
          <Route path="/support" element={<Helper />} />
          <Route path="/reading_plan:find-a-God" element={<FindGod />} />
          <Route path="/philosopher-of-the-day" element={<Avtor />} />
          <Route path="/card-description" element={<CardDesscription />} />
          <Route path="/notice" element={<Notice />} />
          <Route path="/mode" element={<Mode />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/the-middle-path-to-wisdom" element={<RoadPlan />} />
          <Route path="/socrates-teachings" element={<SocratPlan />} />
          <Route path="/epictet-plan" element={<EpictetPlan />} />
          <Route path="/epictet-plan" element={<EpictetPlan />} />
          <Route
            path="/ancient-philosophy-socrat-teaching"
            element={<TeachSocrat />}
          />
          <Route
            path="/ancient-philosophy-aristotel-teaching"
            element={<TeachAristotel />}
          />
          <Route
            path="/ancient-philosophy-epicur-teaching"
            element={<TeachEpicur />}
          />
          <Route
            path="/ancient-philosophy-avrely-teaching"
            element={<TeachAvrely />}
          />
          <Route
            path="/german-idealism-fihte-teaching"
            element={<TeachFihte />}
          />
          <Route
            path="/german-idealism-nitze-teaching"
            element={<TeachNitze />}
          />
          <Route
            path="/german-idealism-cant-teaching"
            element={<TeachCant />}
          />
          <Route
            path="/german-idealism-marks-teaching"
            element={<TeachMarks />}
          />
          <Route
            path="/article-existence-matter"
            element={<ExistenceMatter />}
          />
          <Route path="/article-rationalism" element={<Razionalizm />} />
          <Route path="/article-rod-avgustin" element={<RoadAvgustin />} />
          <Route path="/story-repentance-avgustin" element={<StoryRep />} />
          <Route path="/meaning-death-in-nowdays" element={<Meaning />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
