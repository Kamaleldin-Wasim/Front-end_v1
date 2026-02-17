import React from 'react';

const Footer = () => (
    <footer className="bg-dark text-white py-5" id="contact">
        <div className="container py-md-3">
            <div className="row gy-4 align-items-center">
                {/* Brand & Mission */}
                <div className="col-md-6 text-center text-md-start">
                    <h2 className="fw-bold text-primary mb-3 display-6">LungCare</h2>
                    <p className="opacity-75 mx-auto mx-md-0 lh-base" style={{ maxWidth: '400px' }}>
                        Our goal is to keep you healthy. Join us in our mission for a cleaner, healthier future and a smoke-free life.
                    </p>
                </div>

                {/* Newsletter Section */}
                <div className="col-md-6">
                    <div className="text-center text-md-end">
                        <p className="mb-3 fw-bold fs-5">Keep In Touch</p>
                        <div className="d-flex flex-column flex-sm-row gap-2 justify-content-md-end">
                            <input 
                                type="email" 
                                className="form-control border-0 shadow-sm" 
                                placeholder="Your Email" 
                                style={{ borderRadius: '10px', padding: '12px 20px' }} 
                            />
                            <button className="btn btn-primary px-4 fw-bold shadow-sm" style={{ borderRadius: '10px' }}>
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <hr className="my-5 opacity-25" />

            {/* Bottom Bar */}
            <div className="d-flex justify-content-center justify-content-md-between small opacity-75 flex-wrap gap-4 text-center">
                <span>© 2026 <span className="text-primary fw-bold">LungCare</span>. All rights reserved.</span>
                <div className="d-flex gap-4">
                    <span className="footer-link" style={{ cursor: 'pointer' }}>Terms of Service</span>
                    <span className="footer-link" style={{ cursor: 'pointer' }}>Privacy Policy</span>
                </div>
            </div>
        </div>

        {/* CSS بسيط جداً لتحسين الروابط - يمكن وضعه في App.css لاحقاً */}
        <style dangerouslySetInnerHTML={{ __html: `
            .footer-link:hover { color: var(--bs-primary); transition: 0.3s; }
        ` }} />
    </footer>
);

export default Footer;