import React, { useState, useEffect } from 'react'; // أضفنا useEffect
import { useNavigate } from 'react-router-dom';
import { Users, FileText, UserCheck, Stethoscope, Edit, Trash2, Check, Plus } from 'lucide-react';
import Swal from 'sweetalert2';

const AdminHome = () => {
    const navigate = useNavigate();

    const stats = [
        { label: "Stories Submitted", value: "1,230", icon: <FileText size={30} />, bgImage: "/9561933fd3-f44869d8a25f6486a08d.png" },
        { label: "Total Users", value: "12,450", icon: <Users size={30} />, bgImage: "/markus-frieauff-IJ0KiXl4uys-unsplash.jpg" },
        { label: "Active Doctors", value: "382", icon: <UserCheck size={30} />, bgImage: "/5f7513f74b-98a2e89afc9131c54db7.png" },
        { label: "Hospitals & Labs", value: "214", icon: <Stethoscope size={30} />, bgImage: "/david-trinks-U9IriDpTcg4-unsplash.jpg" }
    ];

    // 1. تحميل البيانات من الـ localStorage عند فتح الصفحة لأول مرة
    const [seminars, setSeminars] = useState(() => {
        const saved = localStorage.getItem('global_seminars');
        return saved ? JSON.parse(saved) : [
            { id: 1, name: "Smoking Awareness", time: "Oct 25 – 7:00 PM", location: "Hilton Grand Nile Tower", speaker: "Gruen Von Behrens" }
        ];
    });

    const [newSeminar, setNewSeminar] = useState({ name: '', time: '', location: '', speaker: '' });
    const [editingId, setEditingId] = useState(null);

    // 2. دالة مساعدة لحفظ البيانات في المتصفح كل ما تتغير
    const saveToLocalStorage = (updatedList) => {
        localStorage.setItem('global_seminars', JSON.stringify(updatedList));
    };

    const handleSaveSeminar = () => {
        if (!newSeminar.name || !newSeminar.time) {
            Swal.fire('Error', 'Please fill the Name and Time', 'error');
            return;
        }

        let updatedSeminars;
        if (editingId) {
            updatedSeminars = seminars.map(s => s.id === editingId ? { ...newSeminar, id: editingId } : s);
            setEditingId(null);
            Swal.fire('Updated', 'Seminar updated successfully', 'success');
        } else {
            updatedSeminars = [...seminars, { ...newSeminar, id: Date.now() }];
            Swal.fire('Added', 'New seminar added', 'success');
        }

        setSeminars(updatedSeminars);
        saveToLocalStorage(updatedSeminars); // حفظ التغيير فوراً
        setNewSeminar({ name: '', time: '', location: '', speaker: '' });
    };

    // دالة الحذف المعدلة
    const handleDelete = (id) => {
        const filtered = seminars.filter(item => item.id !== id);
        setSeminars(filtered);
        saveToLocalStorage(filtered); // حفظ التغيير فوراً
    };

    const startEdit = (seminar) => {
        setEditingId(seminar.id);
        setNewSeminar({ name: seminar.name, time: seminar.time, location: seminar.location, speaker: seminar.speaker });
    };

    return (
        <div className="admin-dashboard bg-white" style={{ marginTop: '0', paddingTop: '0' }}>
            {/* ... الـ Hero Section والـ Stats Grid والـ Tools زي ما هي بالظبط بدون تغيير ... */}
            <div className="position-relative overflow-hidden" 
                style={{ 
                    minHeight: '450px', 
                    paddingTop: '120px', 
                    paddingBottom: '80px',
                    backgroundImage: 'url("/markus-frieauff-IJ0KiXl4uys-unsplash.jpg")', 
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundAttachment: 'fixed',
                    backgroundRepeat: 'no-repeat'
                }}>
                <div className="position-absolute top-0 start-0 w-100 h-100" 
                    style={{ zIndex: 1, background: 'linear-gradient(90deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.1) 100%)' }}>
                </div>
                <div className="container position-relative" style={{ zIndex: 2 }}>
                    <div className="row align-items-center">
                        <div className="col-md-7 text-white">
                            <h1 className="display-4 fw-bold text-warning" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>Welcome back, Admin</h1>
                            <p className="lead fs-4 mt-3 fw-medium">Manage your health platform's data and community from one place.</p>
                            <button className="btn btn-warning btn-lg mt-3 px-5 fw-bold shadow text-dark" onClick={() => navigate('/admin/doctors')}>Doctors Management</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container py-5">
                {/* الإحصائيات (يمكنك تعديلها بنفس طريقة السمينار لاحقاً) */}
                <div className="row g-4 mb-5">
                    {stats.map((stat, index) => (
                        <div className="col-md-3" key={index}>
                            <div className="card border-0 text-white text-center p-4 position-relative overflow-hidden shadow-sm rounded-4" style={{ minHeight: '180px' }}>
                                <div className="position-absolute top-0 start-0 w-100 h-100" style={{ background: `url(${stat.bgImage}) center/cover`, zIndex: 0 }}></div>
                                <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-75" style={{ zIndex: 1 }}></div>
                                <div className="position-relative" style={{ zIndex: 2 }}>
                                    <div className="mb-2">{stat.icon}</div>
                                    <h2 className="fw-bold display-6 mb-0">{stat.value}</h2>
                                    <p className="fs-5 mb-0">{stat.label}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <h3 className="fw-bold mb-4 text-center">Quick Management Tools</h3>
                <div className="row g-4 mb-5 text-center">
                    {[
                        { title: "Doctors Management", img: "https://cdn-icons-png.flaticon.com/512/2785/2785482.png", path: "/admin/doctors", desc: "Approve doctor profiles." },
                        { title: "Hospitals & Labs", img: "https://cdn-icons-png.flaticon.com/512/822/822118.png", path: "/admin/hospitals", desc: "Maintain hospital listings." },
                        { title: "Stories (Moderation)", img: "https://cdn-icons-png.flaticon.com/512/2593/2593491.png", path: "/admin/stories", desc: "Review success stories." }
                    ].map((tool, i) => (
                        <div className="col-md-4" key={i} onClick={() => navigate(tool.path)} style={{ cursor: 'pointer' }}>
                            <div className="card h-100 border-0 shadow-sm p-4 rounded-4 hover-shadow transition-all">
                                <img src={tool.img} alt={tool.title} className="mx-auto mb-3" width="80" />
                                <h4 className="fw-bold text-primary">{tool.title}</h4>
                                <p className="text-muted small mb-0">{tool.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* 4. Manage Seminars Section */}
                <h3 className="fw-bold text-center mb-4 mt-5">Manage Seminars</h3>
                <div className="bg-white p-4 shadow-sm rounded-4 border mx-auto" style={{ maxWidth: '900px' }}>
                    {seminars.map((s) => (
                        <div key={s.id} className={`p-3 mb-3 rounded-3 border-start border-4 bg-light ${editingId === s.id ? 'border-warning shadow' : 'border-primary'}`}>
                            <div className="row align-items-center">
                                <div className="col-md-8">
                                    <h5 className="fw-bold mb-1">{s.name} <span className="text-muted fw-normal ms-3 fs-6">at {s.time}</span></h5>
                                    <p className="mb-0 text-muted small"><strong>Location:</strong> {s.location} | <strong>Speaker:</strong> {s.speaker}</p>
                                </div>
                                <div className="col-md-4 text-end">
                                    <button className="btn btn-outline-primary btn-sm me-2" onClick={() => startEdit(s)}>
                                        <Edit size={14} /> Edit
                                    </button>
                                    <button className="btn btn-outline-danger btn-sm" onClick={() => handleDelete(s.id)}>
                                        <Trash2 size={14} /> Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}

                    <div className="row g-3 mt-4 pt-4 border-top">
                        <div className="col-12"><h5 className="fw-bold text-primary">{editingId ? "Update Seminar" : "Add New Seminar"}</h5></div>
                        <div className="col-md-6"><input type="text" className="form-control bg-light" placeholder="Name" value={newSeminar.name} onChange={e => setNewSeminar({...newSeminar, name: e.target.value})} /></div>
                        <div className="col-md-6"><input type="text" className="form-control bg-light" placeholder="Time" value={newSeminar.time} onChange={e => setNewSeminar({...newSeminar, time: e.target.value})} /></div>
                        <div className="col-md-6"><input type="text" className="form-control bg-light" placeholder="Location" value={newSeminar.location} onChange={e => setNewSeminar({...newSeminar, location: e.target.value})} /></div>
                        <div className="col-md-6"><input type="text" className="form-control bg-light" placeholder="Speaker" value={newSeminar.speaker} onChange={e => setNewSeminar({...newSeminar, speaker: e.target.value})} /></div>
                        <div className="col-12 d-flex gap-2">
                            <button className={`btn ${editingId ? 'btn-warning' : 'btn-primary'} flex-grow-1 fw-bold py-2`} onClick={handleSaveSeminar}>
                                {editingId ? <><Check size={18}/> Update</> : <><Plus size={18}/> Done</>}
                            </button>
                            {editingId && (
                                <button className="btn btn-secondary px-4" onClick={() => {setEditingId(null); setNewSeminar({name:'', time:'', location:'', speaker:''})}}>Cancel</button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminHome;