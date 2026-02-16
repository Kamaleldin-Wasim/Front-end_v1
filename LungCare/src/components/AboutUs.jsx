import React from 'react';

const AboutUs = () => (
<section className="bg-primary text-white py-5" id="about">
    <div className="container">
    <div className="row align-items-center">
        <div className="col-md-5">
        <img src="/photo-1554774853-aae0a22c8aa4.jpg" alt="About" className="img-fluid rounded-3 shadow border border-white border-3" />
        </div>
        <div className="col-md-7 ps-md-5 mt-4 mt-md-0">
        <h2 className="fw-bold mb-4 display-6 text-white">About US</h2>
        <p className="fs-5 mb-4" style={{fontStyle: 'italic', fontWeight: '300'}}>
            "We believe every breath tells a story — a story of strength, recovery, and hope. Our mission is to turn awareness into action, and action into life."
        </p>
        <p className="opacity-75 fs-6">
            This platform was built for those ready to take the first step toward healing... to quit, to learn, and to live free.
        </p>
        </div>
    </div>
    </div>
</section>
);
export default AboutUs;