import { Route, Routes } from "react-router";
import Header from "./components/header";
import Navbar from "./components/navbar";
import HomePage from "./components/home_page";
import TelefonPage2 from "./components/home_page/components/telefonlar2Page";
import Footer from "./components/footer";

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/telefonPage2/:alias" element={<TelefonPage2 />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
