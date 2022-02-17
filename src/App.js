import "./App.css";
import Header from "./components/header/header";
import MainPage from "./components/mainPage/mainPage";
import { HashRouter, Routes, Route } from "react-router-dom";
import Men from "./components/men/men";
import Women from "./components/women's/women's";

function App() {
  return (
    <div className="site">
      <HashRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
