import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./pages/Product";

function App() {
  return (
    <>
      <h1>Hello routingggg</h1>
      <BrowserRouter>
        <Routes>
          <Route path="product" element={<Product />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
