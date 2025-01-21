import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//import './App.css';

import {
  BrowserRouter,
  Route,
  Routes,
  Link
} from "react-router-dom"


function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home </Link>
        </li>
        <li>
          <Link to="/about">About</Link>
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

export default App

/*
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App

serve -s ./dist
*/



