import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListComponent from "./components/ListComponent";
import HeaderComponent from "./components/HeaderComponent";
import EventComponent from "./components/EventComponent";
import AxiosComponent from "./components/AxiosComponent";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListComponent></ListComponent>}></Route>
        <Route
          path="/header"
          element={<HeaderComponent></HeaderComponent>}
        ></Route>
        <Route
          path="/event"
          element={<EventComponent></EventComponent>}
        ></Route>
        <Route
          path="/axios"
          element={<AxiosComponent></AxiosComponent>}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
