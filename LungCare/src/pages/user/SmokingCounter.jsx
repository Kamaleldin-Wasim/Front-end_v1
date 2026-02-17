import React, { useState, useEffect } from 'react';

const SmokingCounter = () => {
    const [userData, setUserData] = useState(() => {
        const saved = localStorage.getItem('smokingData');
        return saved ? JSON.parse(saved) : {
            quitDate: '',
            pricePerPack: '',
            cigarettesPerPack: '20',
            cigarettesPerDay: ''
        };
    });

    const [hasData, setHasData] = useState(() => {
        return localStorage.getItem('smokingData') ? true : false;
    });

    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    const [stats, setStats] = useState({ moneySaved: 0, cigarettesAvoided: 0 });

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        if (!hasData) return;
        const timer = setInterval(() => {
            const now = new Date();
            const start = new Date(userData.quitDate);
            const diffInMs = now - start;

            if (diffInMs <= 0) {
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
                return;
            }

            const days = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diffInMs / (1000 * 60 * 60)) % 24);
            const minutes = Math.floor((diffInMs / 1000 / 60) % 60);
            const seconds = Math.floor((diffInMs / 1000) % 60);
            setTimeLeft({ days, hours, minutes, seconds });

            const diffInDays = diffInMs / (1000 * 60 * 60 * 24);
            const savedMoney = (diffInDays * (userData.pricePerPack / (userData.cigarettesPerPack / userData.cigarettesPerDay))).toFixed(2);
            setStats({ moneySaved: savedMoney, cigarettesAvoided: Math.floor(diffInDays * userData.cigarettesPerDay) });
        }, 1000);
        return () => clearInterval(timer);
    }, [hasData, userData]);

    const handleSave = (e) => {
        e.preventDefault();
        localStorage.setItem('smokingData', JSON.stringify(userData));
        setHasData(true);
    };

    const handleReset = () => {
        if (window.confirm("Are you sure you want to reset your progress?")) {
            localStorage.removeItem('smokingData');
            setHasData(false);
        }
    };

    return (
        <div className="container py-5" style={{ marginTop: '60px', minHeight: '100vh', fontFamily: "'Segoe UI', Roboto, sans-serif" }}>
            {!hasData ? (
                /* --- الـ Form بتصميم جديد وجذاب --- */
                <div className="card shadow-lg border-0 mx-auto overflow-hidden" style={{ maxWidth: '450px', borderRadius: '30px' }}>
                    <div style={{ background: 'linear-gradient(135deg, #667eea 0%, #3754d1 100%)', padding: '40px 20px', color: 'white', textAlign: 'center' }}>
                        <div style={{ fontSize: '50px', marginBottom: '10px' }}>⏳</div>
                        <h3 className="fw-bold m-0">New Beginning</h3>
                        <p className="opacity-75 mt-2">Fill in your details to track your success</p>
                    </div>

                    <div className="card-body p-4 p-md-5 bg-white">
                        <form onSubmit={handleSave}>
                            <div className="mb-4">
                                <label className="form-label fw-bold text-secondary small text-uppercase">Quit Date & Time</label>
                                <input type="datetime-local" className="form-control form-control-lg border-0 bg-light"
                                    style={{ borderRadius: '15px', fontSize: '1rem' }} required
                                    onChange={(e) => setUserData({ ...userData, quitDate: e.target.value })} />
                            </div>

                            <div className="mb-4">
                                <label className="form-label fw-bold text-secondary small text-uppercase">Price Per Pack (EGP)</label>
                                <div className="input-group">
                                    <span className="input-group-text border-0 bg-light" style={{ borderRadius: '15px 0 0 15px' }}>EGP</span>
                                    <input type="number" className="form-control form-control-lg border-0 bg-light"
                                        style={{ borderRadius: '0 15px 15px 0', fontSize: '1rem' }} placeholder="60" required
                                        onChange={(e) => setUserData({ ...userData, pricePerPack: e.target.value })} />
                                </div>
                            </div>

                            <div className="mb-4">
                                <label className="form-label fw-bold text-secondary small text-uppercase">Cigarettes Smoked Per Day</label>
                                <input type="number" className="form-control form-control-lg border-0 bg-light"
                                    style={{ borderRadius: '15px', fontSize: '1rem' }} placeholder="20" required
                                    onChange={(e) => setUserData({ ...userData, cigarettesPerDay: e.target.value })} />
                            </div>

                            <button type="submit" className="btn btn-lg w-100 shadow-sm text-white fw-bold py-3 mt-2"
                                style={{ background: 'linear-gradient(135deg, #667eea 0%, #3754d1 100%)', borderRadius: '15px', border: 'none' }}>
                                Start Tracking Progress
                            </button>
                        </form>
                    </div>
                </div>
            ) : (
                /* --- لوحة العرض (Dashboard) بعد الإدخال --- */
                <div className="text-center animate__animated animate__fadeIn">
                    <h2 className="fw-bold mb-4" style={{ color: '#4a4a4a' }}>Your Smoke-Free Journey</h2>

                    <div className="row g-4">
                        <div className="col-12">
                            <div className="card border-0 shadow-lg p-5 text-white"
                                style={{ borderRadius: '30px', background: 'linear-gradient(135deg, #00c6ff 0%, #0072ff 100%)' }}>
                                <h4 className="opacity-75 mb-4 text-uppercase fw-bold" style={{ letterSpacing: '2px' }}>Time Since Last Cigarette</h4>
                                <div className="row g-2">
                                    {[
                                        { val: timeLeft.days, unit: 'Days' },
                                        { val: timeLeft.hours, unit: 'Hours' },
                                        { val: timeLeft.minutes, unit: 'Mins' },
                                        { val: timeLeft.seconds, unit: 'Secs' }
                                    ].map((item, idx) => (
                                        <div key={idx} className="col-3">
                                            <h1 className="display-4 fw-bold m-0">{item.val}</h1>
                                            <p className="small m-0 text-uppercase opacity-75">{item.unit}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="card border-0 shadow p-4 h-100" style={{ borderRadius: '25px', backgroundColor: '#f8f9ff' }}>
                                <div className="fs-1 mb-2">💰</div>
                                <h5 className="text-secondary fw-bold">Money Saved</h5>
                                <h2 className="text-success fw-bold display-6">{stats.moneySaved} <small style={{ fontSize: '1.2rem' }}>EGP</small></h2>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="card border-0 shadow p-4 h-100" style={{ borderRadius: '25px', backgroundColor: '#fff5f5' }}>
                                <div className="fs-1 mb-2">🚭</div>
                                <h5 className="text-secondary fw-bold">Cigarettes Avoided</h5>
                                <h2 className="text-danger fw-bold display-6">{stats.cigarettesAvoided}</h2>
                            </div>
                        </div>
                    </div>

                    <button onClick={handleReset} className="btn btn-link text-muted mt-5 text-decoration-none">
                        <small>Wrong data? <u>Reset and start over</u></small>
                    </button>
                </div>
            )}
        </div>
    );
};

export default SmokingCounter;