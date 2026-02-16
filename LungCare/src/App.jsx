import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingPage from './pages/guest/LandingPage';
import Login from './pages/auth/Login';
import SignUp from './pages/auth/SignUp';
import ForgotPassword from './pages/auth/ForgotPassword';
import Profile from './pages/user/Profile';
import DoctorsAndCenters from './pages/user/DoctorsAndCenters';
import QuitSmokingPrograms from './pages/user/QuitSmokingPrograms'; 
import SmokingCounter from './pages/user/SmokingCounter';
import Community from './pages/user/Community';
import NicotineTest from './pages/user/NicotineTest';
import CancerRisk from './pages/user/CancerRisk';
import BModel from './pages/user/BModel';
import LungAwareness from './pages/user/LungAwareness';
import SmokingAwareness from './pages/user/SmokingAwareness';
import SmokingMyths from './pages/user/SmokingMyths';
import 'bootstrap/dist/css/bootstrap.min.css';

const LayoutHandler = ({ children }) => {
  const location = useLocation();
  const authPaths = ['/login', '/signup', '/forgot-password'];
  const isAuthPage = authPaths.includes(location.pathname);

  return (
    <>
      {!isAuthPage && <Navbar />}
      <main style={{ 
        minHeight: '100vh', 
        paddingTop: isAuthPage ? '0' : '80px'
      }}>
        {children}
      </main>
      {!isAuthPage && <Footer />}
    </>
  );
};

function App() {
  return (
    <Router>
      <LayoutHandler>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/doctors-and-centers" element={<DoctorsAndCenters />} />
          <Route path="/quit-smoking-programs" element={<QuitSmokingPrograms />} />
          <Route path="/smoking-counter" element={<SmokingCounter />} />
          <Route path="/community" element={<Community />} />
          <Route path="/nicotine-test" element={<NicotineTest />} />
          <Route path="/cancer-risk" element={<CancerRisk />} />
          <Route path="/bmodel" element={<BModel />} />
          <Route path="/education/smoking-awareness" element={<SmokingAwareness />} />
          <Route path="/education/lung-cancer" element={<LungAwareness />} />
          <Route path="/education/myths-facts" element={<SmokingMyths />} />
        </Routes>
      </LayoutHandler>
    </Router>
  );
}

export default App;