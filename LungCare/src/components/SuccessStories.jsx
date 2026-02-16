import React from 'react';

const SuccessStories = () => {
const stories = [
    { name: 'John Smith',
        time: '1 Year',
        story: 'I quit smoking after 20 years, and this platform was a game-changer. The support and resources kept me motivated every step of the way.'
    },
    { name: 'Nour Ali',
        time: '6 Months',
        story: 'This platform helped me quit smoking in just 6 months. I never thought it would be this easy!'
    },
    { name: 'Mohamed Ahmed',
        time: '2 Months', 
        story: 'I was skeptical at first, but the progress tracking feature kept me motivated. I\'m proud of my achievement!' 
    }
];
return (
    <section className="py-5 bg-white" id="success-stories">
    <div className="container text-center">
        <h2 className="fw-bold mb-5">Success Stories</h2>
        <div className="row g-4">
        {stories.map((story, i) => (
            <div key={i} className="col-md-4 text-start">
            <div className="card border-0 shadow-sm p-4 h-100" style={{borderLeft: '4px solid #28a745'}}>
                <span className="text-success small fw-bold mb-2">● {story.time}</span>
                <h6 className="fw-bold mb-2">{story.name}</h6>
                <p className="text-muted small mb-0" style={{fontStyle: 'italic'}}>{story.story}
                </p>
            </div>
            </div>
        ))}
        </div>
    </div>
    </section>
);
};

export default SuccessStories;