import { Route, Routes } from "react-router-dom";
import DetailPage from "./pages/DetailPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/detail/:id" element={<DetailPage />} />
      </Routes>
    </>
  );
}

export default App;
