import React, { useEffect } from 'react';

const QuitSmokingPrograms = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const programs = [
        {
            title: "WHO Quit Tobacco Program",
            category: "International Support Program",
            description: "A global initiative by the World Health Organization providing educational material, motivation tools, and quit plans.",
            link: "https://www.who.int/campaigns/world-no-tobacco-day"
        },
        {
            title: "Egyptian Ministry of Health – Quit Smoking Clinics",
            category: "Local Government Program",
            description: "Free clinics across Egypt offering counseling, nicotine replacement therapy, and follow-up sessions for smokers who want to quit.",
            link: "https://mohp.gov.eg"
        },
        {
            title: "SmokeFree App",
            category: "Mobile Application",
            description: "A mobile app that tracks your quit journey, money saved, and cravings reduced — based on behavioral science.",
            link: "https://smokefree.gov/tools-tips/apps"
        }
    ];

    return (
        <div className="pb-5" style={{ marginTop: '100px', backgroundColor: '#fff', minHeight: '100vh' }}>
            <div className="container text-center">
                <h1 className="fw-bold mb-3">Quit Smoking Programs</h1>
                <p className="text-muted mx-auto mb-5" style={{ maxWidth: '900px', fontSize: '1.1rem' }}>
                    Quitting smoking can significantly improve your health, reduce the risk of lung cancer, and enhance your overall quality of life.
                </p>

                <div className="d-flex flex-column gap-4 align-items-center">
                    {programs.map((prog, index) => (
                        <div key={index} 
                            className="card border-0 shadow-sm w-100 p-4 text-white" 
                            style={{ borderRadius: '20px', backgroundColor: '#0d8bf2', maxWidth: '1000px' }}>
                            <div className="card-body">
                                <h2 className="fw-bold mb-2">{prog.title}</h2>
                                <h5 className="mb-4 opacity-90">{prog.category}</h5>
                                <p className="mb-4" style={{ fontSize: '1.2rem' }}>{prog.description}</p>
                                <a href={prog.link} target="_blank" rel="noreferrer" 
                                   className="btn btn-dark px-5 py-2 fw-bold"
                                   style={{ borderRadius: '12px', backgroundColor: '#2b4c7e', border: 'none' }}>
                                   🔗 Learn More
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default QuitSmokingPrograms;