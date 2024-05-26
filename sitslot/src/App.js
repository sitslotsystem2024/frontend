import Home from "./Components/Home";
import { BrowserRouter as Router } from 'react-router-dom';

import Book from "./Components/Book";

function App() {
  return (
   <>
    <Router>
      <Home />
      <main id="main" data-aos="fade" data-aos-delay="1500">
        <Book />
        {/* <Routes>
          <Route path="/index" element={<Home />} />
          <Route path="/event" element={<Events />} />
          <Route path="/contact" element={<Contact />} /        </Routes> */}
      </main>
    </Router>
   </>
  );
}

export default App;
