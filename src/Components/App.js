import './App.css';
import {BrowserRouter,Route,useNavigate,Routes} from "react-router-dom";
import Mountain from './Mountain';
import Beaches from './Beaches';
import Birds from './Birds';
import Food from './Food';
import Search from './Search';
import Default from './Default';
import Seachbar from './Seachbar';

function App() {

  return (
    <div className="main">
      <BrowserRouter>
        <span className="header">SnapShot</span>
        <Seachbar/>
        <Default/>
        <Routes>
          <Route path="/mountain" element={<Mountain />} />
          <Route path="/beaches" element={<Beaches />} />
          <Route path="/birds" element={<Birds />} />
          <Route path="/food" element={<Food />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
