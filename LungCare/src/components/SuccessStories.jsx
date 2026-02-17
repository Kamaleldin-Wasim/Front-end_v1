import React, { useState } from 'react';
import { Quote, Award, Clock } from 'lucide-react';

const SuccessStories = () => {
    const [allStories] = useState(() => {
        // القصص الافتراضية
        const staticStories = [
            {
                name: 'John Smith',
                time: '1 Year Smoke-Free',
                story: 'I quit smoking after 20 years, and this platform was a game-changer. The support and resources kept me motivated every step of the way.'
            },
            {
                name: 'Nour Ali',
                time: '6 Months Smoke-Free',
                story: 'This platform helped me quit smoking in just 6 months. I never thought it would be this easy or that I could feel this much better!'
            },
            {
                name: 'Mohamed Ahmed',
                time: '2 Months Smoke-Free',
                story: 'I was skeptical at first, but the progress tracking feature kept me motivated. I\'m proud of my achievement and my lungs feel great!'
            }
        ];

        const approvedStories = JSON.parse(localStorage.getItem('approved_stories') || '[]');
        return [...approvedStories, ...staticStories];
    });

    return (
        <section className="py-5 bg-white" id="success-stories">
            <div className="container py-lg-4 text-center">
                <div className="mb-5">
                    <span className="badge bg-success-soft text-success px-3 py-2 rounded-pill mb-3 fw-bold" style={{ backgroundColor: '#e8f5e9' }}>
                        Inspiration
                    </span>
                    <h2 className="fw-bold text-dark display-6">Real Success Stories</h2>
                    <p className="text-muted mx-auto" style={{ maxWidth: '600px' }}>
                        Hear from our community members who have successfully transformed their lives and prioritized their lung health.
                    </p>
                </div>

                <div className="row g-4">
                    {allStories.map((story, i) => (
                        <div key={i} className="col-lg-4 col-md-6 text-start">
                            <div className="card border-0 shadow-sm p-4 h-100 position-relative transition-all story-card" 
                                 style={{ 
                                     borderRadius: '20px', 
                                     backgroundColor: '#fcfcfc',
                                     borderBottom: '4px solid #198754' 
                                 }}>
                                
                                {/* Quote Icon Decor */}
                                <div className="position-absolute top-0 end-0 m-4 opacity-10">
                                    <Quote size={40} />
                                </div>

                                <div className="d-flex align-items-center gap-2 mb-3">
                                    <div className="bg-success rounded-circle d-flex align-items-center justify-content-center text-white shadow-sm" style={{ width: '40px', height: '40px' }}>
                                        <Award size={20} />
                                    </div>
                                    <span className="text-success small fw-bold d-flex align-items-center gap-1">
                                        <Clock size={14} /> {story.time}
                                    </span>
                                </div>

                                <div className="card-body p-0">
                                    <h6 className="fw-bold mb-2 fs-5 text-dark">{story.name}</h6>
                                    <p className="text-muted mb-0 lh-base" style={{ fontStyle: 'italic', fontSize: '0.95rem' }}>
                                        "{story.story}"
                                    </p>
                                </div>

                                {/* Decorative Dots */}
                                <div className="mt-3 d-flex gap-1">
                                    <div className="bg-success rounded-circle opacity-25" style={{width: '6px', height: '6px'}}></div>
                                    <div className="bg-success rounded-circle opacity-25" style={{width: '6px', height: '6px'}}></div>
                                    <div className="bg-success rounded-circle opacity-25" style={{width: '6px', height: '6px'}}></div>
                                </div>
                            </div>
                        </div>
                    ))}

                    {allStories.length === 0 && (
                        <div className="col-12 py-5">
                            <p className="text-muted fs-5">Be the first one to share a success story and inspire others!</p>
                        </div>
                    )}
                </div>
            </div>

            <style dangerouslySetInnerHTML={{ __html: `
                .story-card { transition: all 0.3s ease-in-out; }
                .story-card:hover { 
                    transform: translateY(-10px); 
                    box-shadow: 0 1rem 3rem rgba(0,0,0,0.08) !important;
                    background-color: #ffffff !important;
                }
            ` }} />
        </section>
    );
};

export default SuccessStories;