import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { Calendar, MapPin, User, CheckCircle, Ticket, Info } from 'lucide-react';

const Seminars = () => {
    // 1. جلب الندوات من الـ localStorage
    const [seminars] = useState(() => {
        const savedSeminars = localStorage.getItem('global_seminars');
        if (savedSeminars) {
            return JSON.parse(savedSeminars);
        }
        return [
            { id: 1, name: "Smoking Awareness & Lung Health", time: "Oct 25, 2026 – 7:00 PM", location: "Hilton Grand Nile Tower", speaker: "Dr. Gruen Von Behrens" }
        ];
    });

    const [registeredIds, setRegisteredIds] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedSeminar, setSelectedSeminar] = useState(null);

    const handleOpenModal = (seminar) => {
        setSelectedSeminar(seminar);
        setShowModal(true);
    };

    const handleConfirmRegistration = (e) => {
        e.preventDefault();
        setShowModal(false);

        Swal.fire({
            title: 'Seat Reserved!',
            text: `You have successfully registered for the ${selectedSeminar.name} seminar.`,
            icon: 'success',
            confirmButtonColor: '#0d6efd',
            confirmButtonText: 'Got it!',
            borderRadius: '15px'
        });

        setRegisteredIds([...registeredIds, selectedSeminar.id]);
    };

    return (
        <section className="bg-light py-5 min-vh-100">
            <div className="container py-lg-4">
                <div className="text-center mb-5">
                    <h2 className="fw-bold text-dark display-5">Upcoming Seminars</h2>
                    <p className="text-muted mx-auto" style={{maxWidth: '600px'}}>
                        Join our expert-led sessions to learn more about lung health and modern prevention techniques.
                    </p>
                </div>

                <div className="row g-4 justify-content-center">
                    {seminars.map((seminar) => (
                        <div className="col-lg-9 col-xl-8" key={seminar.id}>
                            <div className="card border-0 shadow-sm rounded-4 overflow-hidden position-relative seminar-card">
                                <div className="row g-0">
                                    {/* Left Accent Color */}
                                    <div className="col-md-1 bg-primary d-none d-md-block" style={{width: '10px'}}></div>
                                    
                                    <div className="col-md-11 p-4 p-md-5 bg-white">
                                        <div className="d-flex justify-content-between align-items-start flex-wrap gap-2 mb-3">
                                            <div>
                                                <span className="badge bg-primary-soft text-primary mb-2 px-3 py-2 rounded-pill small fw-bold" style={{backgroundColor: '#e7f1ff'}}>
                                                    Live Event
                                                </span>
                                                <h3 className="fw-bold mb-1 text-dark">{seminar.name}</h3>
                                            </div>
                                            <div className="text-md-end">
                                                <p className="text-primary fw-bold mb-0 d-flex align-items-center justify-content-md-end">
                                                    <Calendar size={18} className="me-2" /> {seminar.time}
                                                </p>
                                            </div>
                                        </div>

                                        <hr className="my-4 opacity-25" />

                                        <div className="row mb-4">
                                            <div className="col-sm-6 mb-3 mb-sm-0">
                                                <p className="text-muted small text-uppercase fw-bold mb-2">Location</p>
                                                <p className="d-flex align-items-center text-dark fw-medium mb-0">
                                                    <MapPin size={18} className="me-2 text-primary" /> {seminar.location}
                                                </p>
                                            </div>
                                            <div className="col-sm-6">
                                                <p className="text-muted small text-uppercase fw-bold mb-2">Keynote Speaker</p>
                                                <p className="d-flex align-items-center text-dark fw-medium mb-0">
                                                    <User size={18} className="me-2 text-primary" /> {seminar.speaker}
                                                </p>
                                            </div>
                                        </div>

                                        <button
                                            className={`btn ${registeredIds.includes(seminar.id) ? 'btn-success disabled' : 'btn-primary'} w-100 py-3 fw-bold rounded-3 shadow-sm transition-all d-flex align-items-center justify-content-center gap-2`}
                                            onClick={() => !registeredIds.includes(seminar.id) && handleOpenModal(seminar)}
                                            style={{ fontSize: '1.1rem' }}
                                        >
                                            {registeredIds.includes(seminar.id) ? (
                                                <><CheckCircle size={22} /> You are on the list!</>
                                            ) : (
                                                <><Ticket size={22} /> Claim Your Free Seat</>
                                            )}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                    {seminars.length === 0 && (
                        <div className="text-center py-5">
                            <div className="bg-white d-inline-block p-4 rounded-circle shadow-sm mb-4">
                                <Info size={48} className="text-muted" />
                            </div>
                            <h5 className="text-muted fw-normal">There are no seminars scheduled at this moment.</h5>
                            <p className="text-muted small">Please check back later or subscribe to our newsletter.</p>
                        </div>
                    )}
                </div>
            </div>

            {/* Registration Modal */}
            {showModal && (
                <div className="modal show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(13, 22, 46, 0.85)', backdropFilter: 'blur(8px)' }}>
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content border-0 shadow-lg rounded-4 overflow-hidden">
                            <div className="modal-header border-0 bg-primary text-white p-4">
                                <div>
                                    <h5 className="modal-title fw-bold">Seminar Registration</h5>
                                    <p className="small mb-0 opacity-75">{selectedSeminar?.name}</p>
                                </div>
                                <button type="button" className="btn-close btn-close-white" onClick={() => setShowModal(false)}></button>
                            </div>
                            <form onSubmit={handleConfirmRegistration}>
                                <div className="modal-body p-4">
                                    <div className="mb-3">
                                        <label className="form-label fw-bold text-dark small">FULL NAME</label>
                                        <input type="text" className="form-control form-control-lg border-2 shadow-none fs-6" placeholder="John Doe" required style={{borderRadius: '10px'}} />
                                    </div>
                                    <div className="mb-4">
                                        <label className="form-label fw-bold text-dark small">EMAIL ADDRESS</label>
                                        <input type="email" className="form-control form-control-lg border-2 shadow-none fs-6" placeholder="john@example.com" required style={{borderRadius: '10px'}} />
                                    </div>
                                    <div className="alert alert-info border-0 rounded-3 mb-0 d-flex gap-3">
                                        <Info size={20} className="flex-shrink-0" />
                                        <p className="small mb-0">
                                            By registering, you agree to receive reminders and materials related to this seminar via email.
                                        </p>
                                    </div>
                                </div>
                                <div className="modal-footer border-0 p-4 pt-0">
                                    <button type="button" className="btn btn-light fw-bold px-4 py-2" onClick={() => setShowModal(false)} style={{borderRadius: '10px'}}>Cancel</button>
                                    <button type="submit" className="btn btn-primary fw-bold px-5 py-2 shadow" style={{borderRadius: '10px'}}>Confirm Seat</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}

            <style dangerouslySetInnerHTML={{ __html: `
                .seminar-card { transition: all 0.3s ease; }
                .seminar-card:hover { transform: translateY(-5px); box-shadow: 0 1rem 3rem rgba(0,0,0,0.1) !important; }
                .bg-primary-soft { background-color: #eef4ff; }
            ` }} />
        </section>
    );
};

export default Seminars;