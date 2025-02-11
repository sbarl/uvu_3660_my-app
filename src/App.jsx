import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ReactHome from './pages/ReactHome';
import About from './pages/About';
import BootStrap from './pages/BootStrap';
import NotFound from './pages/NotFound';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import LogWork from './pages/LogWork';
import MyAccount from './pages/MyAccount';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ReactHome />} />
        <Route path="/about" element={<About />} />
        <Route path="/bootstrap" element={<BootStrap />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/logwork" element={<LogWork />} />
        <Route path="/myaccount" element={<MyAccount />} />
        <Route path="*" element={<NotFound />} />

      </Routes>
    </div>
  )
}

export default App
{/*
function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home </Link>
        </li>
        <li>
          <Link to="/about">Aboutt app.jsx</Link>
        </li>
      </ul>
    </nav>
  );
}

const Home = () => (
  <div>
    <h1>Home</h1>
    <p>Welcome to the home page. This will be my website for Web II!</p>
  </div>
);
/*
const About = () => (
  <div>
    <h1>About</h1>
    <p>I will be making a workout app. It will include things like personal entries
      for workouts and tracking for metrics of fitness. I would like to use google maps
      to display options like gyms, tracks and even hiking trails. I have a lot of ideas.  </p>
  </div>
);

  const NotFound = () => (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>page not found</p>
    </div>
  );
*/}
