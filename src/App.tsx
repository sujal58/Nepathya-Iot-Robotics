import GetInTouch from "./components/Pages/GetInTouch";
import Main from "./components/Pages/Main";
import Team from "./components/Pages/Team";
import Upcoming from "./components/Pages/Upcoming";
import Work from "./components/Pages/Work";
import Form from "./components/UI/form/RegistrationForm";
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
