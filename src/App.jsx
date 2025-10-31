import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './AuthContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Signin';
import AdminDashboard from './components/AdminDashboard';
import FarmerDashboard from './components/FarmerDashboard';
import CollectorDashboard from './components/CollectorDashboard';
import Reports from './pages/Reports';
import Marketplace from './components/Marketplace';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import SignUp from './pages/Signup';
import Signin from './pages/Signin';
import TestConnection from './components/TestConnection';

const PrivateRoute = ({ children }) => {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <Router>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/test" element={<TestConnection />} />
          <Route
            path="/admin"
            element={
              <PrivateRoute>
                <AdminDashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/farmer"
            element={
              <PrivateRoute>
                <FarmerDashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/marketplace"
            element={
              <PrivateRoute>
                <Marketplace />
              </PrivateRoute>
            }
          />
          <Route
            path="/reports"
            element={
              <PrivateRoute>
                <Reports />
              </PrivateRoute>
            }
          />
          <Route
            path="/collector"
            element={
              <PrivateRoute>
                <CollectorDashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/about"
            element={
              <About />
            }
          />
          <Route
            path="/services"
            element={
              <Services />
            }
          />
          <Route
            path="/signin"
            element={
              <Signin />
            }
          />
          <Route
            path="/SignUp"
            element={
              <SignUp />
            }
          />
          <Route
            path="/contact"
            element={
              <Contact />
            }
          />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;