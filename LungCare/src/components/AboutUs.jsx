import React from 'react';

const AboutUs = () => {
    return (
        <section className="bg-primary text-white py-5 shadow-sm" id="about">
            <div className="container py-md-4">
                <div className="row align-items-center gy-4">
                    {/* Image Column */}
                    <div className="col-md-5 text-center">
                        <img 
                            src="/photo-1554774853-aae0a22c8aa4.jpg" 
                            alt="About LungCare" 
                            className="img-fluid rounded-4 shadow-lg border border-white border-3"
                            style={{ maxWidth: '90%', height: 'auto' }}
                        />
                    </div>

                    {/* Text Column */}
                    <div className="col-md-7 ps-md-5">
                        <div className="text-start">
                            <h2 className="fw-bold mb-4 display-6">About US</h2>
                            
                            <p className="fs-5 mb-4 fw-light fst-italic border-start border-white border-3 ps-3" style={{ lineHeight: '1.6' }}>
                                "We believe every breath tells a story — a story of strength, recovery, and hope. 
                                Our mission is to turn awareness into action, and action into life."
                            </p>
                            
                            <p className="text-white-50 fs-6 lh-base mb-0">
                                This platform was built for those ready to take the first step toward healing... 
                                to quit, to learn, and to live free. We are here to support your journey with 
                                science-backed tools and a dedicated medical community.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;