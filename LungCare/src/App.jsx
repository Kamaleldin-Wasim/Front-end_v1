import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';

// المكونات العامة
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// المكونات الخاصة بالأدمن
import AdminNavbar from './components/AdminNavbar';
import AdminFooter from './components/AdminFooter';

// User Pages
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

// Admin Pages
import AdminHome from './pages/admin/AdminHome';
import DoctorsManagement from './pages/admin/DoctorsManagement';
import StoriesManagement from './pages/admin/StoriesManagement';
import HospitalsManagement from './pages/admin/HospitalsManagement';

import 'bootstrap/dist/css/bootstrap.min.css';

// حماية مسارات الأدمن
const ProtectedAdminRoute = ({ children }) => {
  const userRole = localStorage.getItem('role');
  return userRole === 'admin' ? children : <Navigate to="/login" replace />;
};

const LayoutHandler = ({ children }) => {
  const location = useLocation();
  const authPaths = ['/login', '/signup', '/forgot-password'];
  
  const isAuthPage = authPaths.includes(location.pathname);
  // فحص إذا كان الرابط يبدأ بـ /admin
  const isAdminPage = location.pathname.startsWith('/admin');

  return (
    <>
      {/* المنطق الجديد: إذا لم تكن صفحة Login، اختر بين Navbar المستخدم أو الأدمن */}
      {!isAuthPage && (isAdminPage ? <AdminNavbar /> : <Navbar />)}
      
      <main style={{ 
        minHeight: '100vh', 
        paddingTop: isAuthPage ? '0' : '90px',
        backgroundColor: isAdminPage ? '#f4f7f6' : 'transparent' // خلفية رمادية خفيفة لصفحات الأدمن
      }}>
        {children}
      </main>

      {!isAuthPage && (isAdminPage ? <AdminFooter /> : <Footer />)}
    </>
  );
};

function App() {
  return (
    <Router>
      <LayoutHandler>
        <Routes>
          {/* Public & Auth Routes */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          
          {/* User Routes */}
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

          {/* Admin Routes - Protected */}
          <Route path="/admin" element={<ProtectedAdminRoute><AdminHome /></ProtectedAdminRoute>} />
          <Route path="/admin/doctors" element={<ProtectedAdminRoute><DoctorsManagement /></ProtectedAdminRoute>} />
          <Route path="/admin/stories" element={<ProtectedAdminRoute><StoriesManagement /></ProtectedAdminRoute>} />
          <Route path="/admin/hospitals" element={<ProtectedAdminRoute><HospitalsManagement /></ProtectedAdminRoute>} />
        </Routes>
      </LayoutHandler>
    </Router>
  );
}

export default App;