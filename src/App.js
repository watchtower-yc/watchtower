import "./App.css";
import { Routes, Route } from "react-router-dom";

import AppNav from "./components/nav/nav.component";
import About from "./routes/about/about.component";
import Giving from "./routes/giving/giving.component";
import Home from "./routes/home/home.route";
import Sermons from "./routes/sermons/sermons.route";
import Testimonies from "./routes/testimonies/testimonies.route";
import ErrorPage from "./routes/error/errorComponet";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppNav />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/online-giving" element={<Giving />} />
        <Route path="/sermons" element={<Sermons />} />
        <Route path="/testimonies" element={<Testimonies />} />
        <Route path="*" element={<ErrorPage />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
