import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Users, HeartPulse, Building2, LogOut, Globe, Menu, X } from 'lucide-react';

const AdminNavbar = () => {
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleLogout = () => {
        localStorage.clear();
        navigate('/login');
    };

    const navItemClick = (path) => {
        navigate(path);
        setIsMenuOpen(false); // إغلاق القائمة بعد الضغط في الموبايل
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top shadow-sm">
            <div className="container-fluid px-lg-5 py-3">
                {/* Brand */}
                <span 
                    className="navbar-brand fw-bold text-info d-flex align-items-center" 
                    onClick={() => navItemClick('/admin')} 
                    style={{cursor: 'pointer', fontSize: '1.4rem'}}
                >
                    LungCare 
                    <span className="badge bg-info text-dark ms-2 d-none d-sm-inline-block" style={{fontSize: '0.7rem'}}>Admin Panel</span>
                </span>
                
                {/* Mobile Toggler Button */}
                <button 
                    className="navbar-toggler border-0 shadow-none text-info" 
                    type="button" 
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

                {/* Navbar Content */}
                <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="adminNav">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-lg-3 ps-lg-4 mt-3 mt-lg-0">
                        <li className="nav-item">
                            <button className="nav-link btn border-0 d-flex align-items-center gap-2 text-start w-100" onClick={() => navItemClick('/admin/doctors')}>
                                <Users size={18} className="text-info" /> Doctors
                            </button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link btn border-0 d-flex align-items-center gap-2 text-start w-100" onClick={() => navItemClick('/admin/hospitals')}>
                                <Building2 size={18} className="text-info" /> Hospitals
                            </button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link btn border-0 d-flex align-items-center gap-2 text-start w-100" onClick={() => navItemClick('/admin/stories')}>
                                <HeartPulse size={18} className="text-info" /> Stories
                            </button>
                        </li>
                    </ul>
                    
                    {/* Action Buttons */}
                    <div className="d-flex flex-column flex-lg-row gap-2 gap-lg-3 align-items-lg-center mt-3 mt-lg-0  border-secondary pt-3 pt-lg-0 border-lg-0">
                        <button className="btn btn-outline-info btn-sm d-flex align-items-center justify-content-center gap-2 px-3 py-2 py-lg-1" onClick={() => navItemClick('/')}>
                            <Globe size={16} /> View Site
                        </button>
                        <button className="btn btn-danger btn-sm d-flex align-items-center justify-content-center gap-2 px-3 py-2 py-lg-1" onClick={handleLogout}>
                            <LogOut size={16} /> Logout
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default AdminNavbar;