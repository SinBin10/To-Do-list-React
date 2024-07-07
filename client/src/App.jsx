import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Saved_lists from "./pages/Saved_lists";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/saved_lists" element={<Saved_lists />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
