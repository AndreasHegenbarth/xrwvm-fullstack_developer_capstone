import LoginPanel from "./components/Login/Login"
import RegisterPanel from "./components/Register/Register"
import Dealer from "./components/Dealers/Dealers"
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPanel />} />
      <Route path="/register" element={<RegisterPanel />} />
      <Route path="/fetchReviews" element={<Dealer />} />
    </Routes>
  );
}
export default App;
