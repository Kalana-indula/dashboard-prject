import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Department from "./components/Department"; // Import Department
import Home from "./components/Home";

const App = () => (
  <>
    <BrowserRouter>
      <Routes>
        {/* Define the HomePage route as a layout route */}
        <Route path="/" element={<HomePage />}>
          {/* Nested Route for Home Component */}
          <Route index element={<Home/>} />
          {/* Nested Route for Department Component */}
          <Route path="department/:dptName" element={<Department />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </>
);

export default App;
