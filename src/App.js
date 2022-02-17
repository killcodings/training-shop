import "./App.css";
import Header from "./components/header/header";
import MainPage from "./components/mainPage/mainPage";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Men from "./components/men/men";
import Women from "./components/women's/women's";

function App() {
  return (
    <div className="site">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
