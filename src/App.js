<<<<<<< HEAD
import './App.css';
=======
import "./App.css";
import Header from "./components/header/header";
import MainPage from "./components/mainPage/mainPage";
import { HashRouter, Routes, Route } from "react-router-dom";
import Men from "./components/men/men";
import Women from "./components/women/women";
import Footer from "./components/footer/footer";
>>>>>>> d34cc6a25a3d6d18ef6dca907cd08564945b7b84

import Header from './componets/header/header';
import Block1Component from './componets/block1/Block1Component';
import Block2Component from './componets/block2/Block2Component';

function App() {
<<<<<<< HEAD
    return (
        <div>
            <Header/>
            <Block1Component/>
            <Block2Component/>
        </div>
    );
=======
  return (
    <div className="site app" data-test-id="app">
      <HashRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />
        </Routes>
        <Footer />
      </HashRouter>
    </div>
  );
>>>>>>> d34cc6a25a3d6d18ef6dca907cd08564945b7b84
}

export default App;
