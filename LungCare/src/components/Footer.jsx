import React from 'react';

const Footer = () => (
<footer className="bg-dark text-white py-5" id="contact">
    <div className="container">
    <div className="row gy-5 align-items-center">
        <div className="col-md-6">
        <h2 className="fw-bold text-primary mb-3">LungCare</h2>
        <p className="w-75 opacity-75">Our goal is to keep you healthy. Join us in our mission for a cleaner, healthier future.</p>
        </div>
        <div className="col-md-6 text-md-end">
        <p className="mb-3 fw-bold">Keep In Touch</p>
        <div className="d-flex gap-2 justify-content-md-end">
            <input type="email" className="form-control w-50" placeholder="Your Email" style={{borderRadius: '8px'}} />
            <button className="btn btn-primary px-4">Send</button>
        </div>
        </div>
    </div>
    <hr className="my-5 opacity-25" />
    <div className="d-flex justify-content-between small opacity-50 flex-wrap gap-3">
        <span>© 2026 LungCare. All rights reserved.</span>
        <div className="d-flex gap-4">
        <span>Terms of Services</span>
        <span>Privacy Policy</span>
        </div>
    </div>
    </div>
</footer>
);

export default Footer;