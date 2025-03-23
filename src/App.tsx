import "./App.css";
import GetInTouch from "./components/PageComponent/GetInTouch";
import Main from "./components/PageComponent/Main";
import Team from "./components/PageComponent/Team";
import Upcoming from "./components/PageComponent/Upcoming";
import Work from "./components/PageComponent/Work";
import Form from "./components/UI/form/Form";
import Layout from "./HOC/Layout";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Main />} />
          <Route path="/upcoming-event" element={<Upcoming />} />
          <Route path="/team" element={<Team />} />

          <Route path="/works" element={<Work />} />
          <Route path="/get-in-touch" element={<GetInTouch />} />
          <Route path="/join" element={<Form />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
