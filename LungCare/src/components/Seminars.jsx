import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import { Calendar, MapPin, User, CheckCircle, X } from 'lucide-react';

const Seminars = () => {
    // 1. جلب الندوات من الـ localStorage (نفس المفتاح المستخدم في صفحة الأدمن)
    const [seminars, setSeminars] = useState([]);
    const [registeredIds, setRegisteredIds] = useState([]); // لتخزين الندوات التي سجل فيها اليوزر
    const [showModal, setShowModal] = useState(false);
    const [selectedSeminar, setSelectedSeminar] = useState(null); // لتحديد الندوة المختارة للتسجيل

    useEffect(() => {
        const savedSeminars = localStorage.getItem('global_seminars');
        if (savedSeminars) {
            setSeminars(JSON.parse(savedSeminars));
        } else {
            // بيانات افتراضية لو الـ localStorage فاضي
            setSeminars([
                { id: 1, name: "Smoking Awareness", time: "Oct 25, 2026 – 7:00 PM", location: "Hilton Grand Nile Tower", speaker: "Gruen Von Behrens" }
            ]);
        }
    }, []);

    const handleOpenModal = (seminar) => {
        setSelectedSeminar(seminar);
        setShowModal(true);
    };

    const handleConfirmRegistration = (e) => {
        e.preventDefault();
        
        setShowModal(false);

        Swal.fire({
            title: 'Registration Successful!',
            text: `Thank you for joining our ${selectedSeminar.name} seminar.`,
            icon: 'success',
            confirmButtonColor: '#1e3c72',
            confirmButtonText: 'Great!'
        });

        // إضافة ID الندوة لقائمة المسجلين
        setRegisteredIds([...registeredIds, selectedSeminar.id]);
    };

    return (
        <section className="bg-light py-5">
            <div className="container">
                <h2 className="fw-bold text-center mb-5">Upcoming Seminars</h2>
                
                <div className="row g-4 justify-content-center">
                    {seminars.map((seminar) => (
                        <div className="col-lg-8" key={seminar.id}>
                            <div className="bg-white p-4 p-md-5 shadow-sm rounded-4 border border-1 position-relative overflow-hidden">
                                <div className="mb-4">
                                    <h4 className="fw-bold mb-2 text-primary">{seminar.name}</h4>
                                    <p className="text-muted d-flex align-items-center">
                                        <Calendar size={18} className="me-2" /> {seminar.time}
                                    </p>
                                </div>

                                <div className="text-muted mb-4 fs-5">
                                    <p className="mb-2 d-flex align-items-center">
                                        <MapPin size={20} className="me-2 text-primary" /> 
                                        <strong>Location :</strong>&nbsp;{seminar.location}
                                    </p>
                                    <p className="mb-0 d-flex align-items-center">
                                        <User size={20} className="me-2 text-primary" /> 
                                        <strong>Speaker :</strong>&nbsp;{seminar.speaker}
                                    </p>
                                </div>

                                <button 
                                    className={`btn ${registeredIds.includes(seminar.id) ? 'btn-success' : 'btn-primary'} w-100 py-3 fw-bold fs-5 shadow-sm transition-all`}
                                    onClick={() => !registeredIds.includes(seminar.id) && handleOpenModal(seminar)}
                                    disabled={registeredIds.includes(seminar.id)}
                                >
                                    {registeredIds.includes(seminar.id) ? (
                                        <><CheckCircle size={22} className="me-2" /> Registered Successfully</>
                                    ) : (
                                        'Register for Free'
                                    )}
                                </button>
                            </div>
                        </div>
                    ))}

                    {seminars.length === 0 && (
                        <div className="text-center py-5">
                            <h5 className="text-muted">No seminars available at the moment.</h5>
                        </div>
                    )}
                </div>
            </div>

            {/* Modal التسجيل */}
            {showModal && (
                <div className="modal show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)' }}>
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content border-0 shadow-lg rounded-4">
                            <div className="modal-header border-0 bg-light rounded-top-4">
                                <h5 className="modal-title fw-bold">Register for: {selectedSeminar?.name}</h5>
                                <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
                            </div>
                            <form onSubmit={handleConfirmRegistration}>
                                <div className="modal-body py-4">
                                    <div className="mb-3">
                                        <label className="form-label fw-bold small text-uppercase">Full Name</label>
                                        <input type="text" className="form-control p-2 shadow-none border-2" placeholder="Enter your full name" required />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label fw-bold small text-uppercase">Email Address</label>
                                        <input type="email" className="form-control p-2 shadow-none border-2" placeholder="example@mail.com" required />
                                    </div>
                                    <div className="p-3 bg-light rounded-3">
                                        <p className="small mb-0 text-muted italic">
                                            * You will receive a confirmation email with the seminar details.
                                        </p>
                                    </div>
                                </div>
                                <div className="modal-footer border-0">
                                    <button type="button" className="btn btn-light rounded-pill px-4" onClick={() => setShowModal(false)}>Cancel</button>
                                    <button type="submit" className="btn btn-primary rounded-pill px-5 fw-bold shadow-sm">Confirm My Seat</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Seminars;