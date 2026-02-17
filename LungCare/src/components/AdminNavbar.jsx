import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LayoutDashboard, Users, HeartPulse, Building2, LogOut, Globe } from 'lucide-react';

const AdminNavbar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.clear();
        navigate('/login');
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top shadow">
            <div className="container-fluid px-4 py-3">
                <span className="navbar-brand fw-bold text-info" onClick={() => navigate('/admin')} style={{cursor: 'pointer'}}>
                    LungCare <span className="badge bg-info text-dark ms-2">Admin Panel</span>
                </span>
                
                <div className="collapse navbar-collapse" id="adminNav">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-3 ps-lg-4">
                        <li className="nav-item">
                            <button className="nav-link btn border-0 d-flex align-items-center gap-2" onClick={() => navigate('/admin/doctors')}>
                                <Users size={18} /> Doctors
                            </button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link btn border-0 d-flex align-items-center gap-2" onClick={() => navigate('/admin/hospitals')}>
                                <Building2 size={18} /> Hospitals
                            </button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link btn border-0 d-flex align-items-center gap-2" onClick={() => navigate('/admin/stories')}>
                                <HeartPulse size={18} /> Stories
                            </button>
                        </li>
                    </ul>
                    
                    <div className="d-flex gap-3 align-items-center">
                        <button className="btn btn-outline-info btn-sm d-flex align-items-center gap-2 px-3" onClick={() => navigate('/')}>
                            <Globe size={16} /> View Site
                        </button>
                        <button className="btn btn-danger btn-sm d-flex align-items-center gap-2 px-3" onClick={handleLogout}>
                            <LogOut size={16} /> Logout
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default AdminNavbar;