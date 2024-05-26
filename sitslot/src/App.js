import Home from "./Components/Home";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Events from "./Components/Events";
import Contact from "./Components/Contact";

function App() {
  return (
   <>
    <Router>
      <Home />
      <main id="main" data-aos="fade" data-aos-delay="1500">
        <Routes>
          <Route path="/index" element={<Home />} />
          <Route path="/event" element={<Events />} />
          <Route path="/contact" element={<Contact />} />
          {/* Add more routes as needed */}
        </Routes>
      </main>
    </Router>
   </>
  );
}

export default App;
