import "./store/store";
import "./bankStore/store";
import "./App.css";
import Form from "./components/Form";
import Account from "./components/Account";
import Counter from "./store/Counter";
import NotFound from "./components/router/NotFound";
import Contact from "./components/router/Contact";
import About from "./components/router/About";
import Home from "./components/router/Home/Home";
import Header from "./components/router/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      {/* <h1>redux</h1> */}
      {/* <Form /> */}
      {/* <Account /> */}
      {/* <Counter /> */}
    </>
  );
}

export default App;
