import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ReactHome from './pages/ReactHome';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import LogWork from './pages/LogWork';
import MyAccount from './pages/MyAccount';
import Exercises from './pages/Exercises';
import { AuthProvider } from './pages/AuthContext';
import AuthRoute from './pages/AuthRoute';

function App() {
  return (
    <AuthProvider>
      <div>
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<ReactHome />} />
          <Route path="/about" element={<About />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/logwork" element={<LogWork />} />
          <Route path="/exercises" element={<Exercises />} />
          <Route path="*" element={<NotFound />} />

          {/* Protected routes */}
          <Route element={<AuthRoute />}>
            <Route path="/myaccount" element={<MyAccount />} />
          </Route>
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;