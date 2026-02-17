import React, { useState, useEffect } from 'react';

const SuccessStories = () => {
    const [allStories, setAllStories] = useState([]);

    useEffect(() => {
        // القصص الافتراضية (الثابتة)
        const staticStories = [
            { 
                name: 'John Smith',
                time: '1 Year',
                story: 'I quit smoking after 20 years, and this platform was a game-changer. The support and resources kept me motivated every step of the way.'
            },
            { 
                name: 'Nour Ali',
                time: '6 Months',
                story: 'This platform helped me quit smoking in just 6 months. I never thought it would be this easy!'
            },
            { 
                name: 'Mohamed Ahmed',
                time: '2 Months', 
                story: 'I was skeptical at first, but the progress tracking feature kept me motivated. I\'m proud of my achievement!' 
            }
        ];

        // جلب القصص التي وافق عليها الأدمن من الـ LocalStorage
        const approvedStories = JSON.parse(localStorage.getItem('approved_stories') || '[]');
        
        // دمج القصص المعتمدة الجديدة مع القصص الثابتة
        setAllStories([...approvedStories, ...staticStories]);
    }, []);

    return (
        <section className="py-5 bg-white" id="success-stories">
            <div className="container text-center">
                <h2 className="fw-bold mb-5">Success Stories</h2>
                <div className="row g-4">
                    {allStories.map((story, i) => (
                        <div key={i} className="col-md-4 text-start">
                            <div className="card border-0 shadow-sm p-4 h-100" style={{borderLeft: '4px solid #28a745', borderRadius: '10px'}}>
                                <span className="text-success small fw-bold mb-2">● {story.time}</span>
                                <h6 className="fw-bold mb-2">{story.name}</h6>
                                <p className="text-muted small mb-0" style={{fontStyle: 'italic'}}>
                                    "{story.story}"
                                </p>
                            </div>
                        </div>
                    ))}
                    
                    {allStories.length === 0 && (
                        <p className="text-muted">Be the first one to share a success story!</p>
                    )}
                </div>
            </div>
        </section>
    );
};

export default SuccessStories;