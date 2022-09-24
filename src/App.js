import Navbar from "./components/Navbar";
import Home from "./pages/Home"
import { Route, Routes, BrowserRouter } from "react-router-dom"


function App() {
  return (
<>
<BrowserRouter>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
      </BrowserRouter>
</>
  );
}

export default App;
