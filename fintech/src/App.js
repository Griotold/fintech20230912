import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import AuthResult from "./pages/AuthResult";
import AccountList from "./pages/AccountList";
import BalancePage from "./pages/BalancePage";
import QrCodePage from "./pages/QrCodePage";
import QrReaderPage from "./pages/QrReaderPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/authResult" element={<AuthResult />}></Route>
        <Route path="/balance" element={<BalancePage />}></Route>
        <Route path="/list" element={<AccountList />}></Route>
        <Route path="/qrcode" element={<QrCodePage />}></Route>
        <Route path="/qrreader" element={<QrReaderPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
