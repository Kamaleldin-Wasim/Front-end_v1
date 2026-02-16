import React, { useState, useEffect } from 'react';

const NicotineTest = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [step, setStep] = useState(1);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);

    const questions = [
        {
            q: "How soon after you wake up do you smoke your first cigarette?",
            options: [
                { text: "Within 5 minutes", points: 3 },
                { text: "6–30 minutes", points: 2 },
                { text: "31–60 minutes", points: 1 },
                { text: "After 60 minutes", points: 0 }
            ]
        },
        {
            q: "Do you find it difficult to refrain from smoking in places where it is forbidden?",
            options: [
                { text: "Yes, it's very hard", points: 1 },
                { text: "No, I can manage", points: 0 }
            ]
        },
        {
            q: "Which cigarette would you hate most to give up?",
            options: [
                { text: "The first one in the morning", points: 1 },
                { text: "Any other one", points: 0 }
            ]
        },
        {
            q: "How many cigarettes per day do you smoke?",
            options: [
                { text: "31 or more", points: 3 },
                { text: "21–30", points: 2 },
                { text: "11–20", points: 1 },
                { text: "10 or less", points: 0 }
            ]
        },
        {
            q: "Do you smoke more frequently during the first hours after waking than during the rest of the day?",
            options: [
                { text: "Yes", points: 1 },
                { text: "No", points: 0 }
            ]
        },
        {
            q: "Do you smoke even if you are so ill that you are in bed most of the day?",
            options: [
                { text: "Yes", points: 1 },
                { text: "No", points: 0 }
            ]
        }
    ];

    const handleAnswer = (points) => {
        setScore(score + points);
        if (step < questions.length) {
            setStep(step + 1);
        } else {
            setShowResult(true);
            window.scrollTo(0, 0);
        }
    };

    const getAnalysis = () => {
        if (score <= 2) return { level: "Very Low Dependence", color: "#28a745", advice: "You have a low physical dependence. Your main challenge might be the habit itself." };
        if (score <= 4) return { level: "Low to Moderate", color: "#85cc29", advice: "You have some dependence. Quitting will require discipline." };
        if (score <= 6) return { level: "Moderate Dependence", color: "#ffc107", advice: "Consider Nicotine Replacement Therapy (NRT) like patches." };
        return { level: "High Dependence", color: "#dc3545", advice: "We highly recommend consulting a doctor for a structured plan." };
    };

    const result = getAnalysis();

    return (
        <div className="container py-5" style={{ marginTop: '70px', minHeight: '100vh' }}>
            {/* باقي كود الـ UI اللي عملناه في الرد اللي فات... */}
            <div className="card shadow-lg border-0 mx-auto overflow-hidden" style={{ maxWidth: '650px', borderRadius: '30px' }}>
                <div className="p-4 text-center text-white" style={{ background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)' }}>
                    <h3 className="fw-bold m-0">Clinical Nicotine Assessment</h3>
                    <p className="small opacity-75 mt-2 mb-0">Official Fagerström Test</p>
                </div>

                <div className="card-body p-4 p-md-5">
                    {!showResult ? (
                        <div>
                            <div className="d-flex justify-content-between align-items-center mb-4">
                                <span className="badge rounded-pill bg-primary px-3 py-2">Question {step} of {questions.length}</span>
                                <div className="progress flex-grow-1 ms-3" style={{ height: '8px' }}>
                                    <div className="progress-bar" style={{ width: `${(step/questions.length)*100}%` }}></div>
                                </div>
                            </div>
                            <h4 className="fw-bold mb-4">{questions[step-1].q}</h4>
                            <div className="d-grid gap-3">
                                {questions[step-1].options.map((opt, i) => (
                                    <button key={i} className="btn btn-outline-dark text-start p-3 fw-bold" 
                                            style={{ borderRadius: '15px', border: '2px solid #eee' }}
                                            onClick={() => handleAnswer(opt.points)}>
                                        {opt.text}
                                    </button>
                                ))}
                            </div>
                        </div>
                    ) : (
                        <div className="text-center animate__animated animate__zoomIn">
                            <h1 className="display-4 fw-bold mb-3" style={{ color: result.color }}>{result.level}</h1>
                            <div className="p-4 rounded-4 mb-4" style={{ backgroundColor: '#f8f9fa' }}>
                                <p className="lead">{result.advice}</p>
                            </div>
                            <button className="btn btn-primary btn-lg px-5 fw-bold" 
                                    onClick={() => { setStep(1); setScore(0); setShowResult(false); window.scrollTo(0,0); }}>
                                Restart Test
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default NicotineTest;