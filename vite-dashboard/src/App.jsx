import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/HomePage";
import HomePage from "./pages/HomePage";

const App = () => (
  <>
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage/>} />
      </Routes>
    </BrowserRouter>

  </>
)

export default App;