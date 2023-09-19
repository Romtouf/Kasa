import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path='/fiche-logement' element={<Logements />} />
      <Route path='/a-propos' element={<About />} />
      <Route path='*' element={<Error />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
