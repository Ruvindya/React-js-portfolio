import React from 'react';

export default function WorkExperience() {
    return (
        <section id="WorkExperience" className="about--section">
            <div className="hero--section--content-box">
                <div className="hero--section--content">
                    <h1 className="skills--section--heading">Work Experience</h1>
                    
                    <div className="experience-item">
                        <div className="experience-header">
                            <h2 className="text-xl font-bold">Full-Stack Developer Intern</h2>
                            <h3 className="text-lg">FocalID Technologies</h3>
                            <p className="text-gray-600">February 2024 - July 2024</p>
                        </div>
                        
                        <ul className="experience-details mt-4 space-y-3">
                            <li className="flex gap-2">
                                <span className="text-primary">•</span>
                                <p>Developed and optimized backend API calls while implementing frontend solutions using React, Next.js, and Tailwind CSS, ensuring responsive and user-friendly interfaces</p>
                            </li>
                            
                            <li className="flex gap-2">
                                <span className="text-primary">•</span>
                                <p>Established and maintained CI/CD pipelines using Docker, creating Dockerfiles and managing containerization to enhance development consistency and deployment efficiency</p>
                            </li>
                            
                            <li className="flex gap-2">
                                <span className="text-primary">•</span>
                                <p>Managed end-to-end API development and integrated multiple databases including MySQL, MongoDB, and Elasticsearch for effective data management</p>
                            </li>
                            
                            <li className="flex gap-2">
                                <span className="text-primary">•</span>
                                <p>Utilized Jira for project management and followed Scrum/Kanban methodologies to ensure timely project delivery and efficient workflow management</p>
                            </li>
                            
                            <li className="flex gap-2">
                                <span className="text-primary">•</span>
                                <p>Collaborated with cross-functional teams using GitHub for version control, conducting code reviews, and maintaining best practices for code quality</p>
                            </li>
                            
                            <li className="flex gap-2">
                                <span className="text-primary">•</span>
                                <p>Worked closely with designers using Figma to ensure seamless UI/UX implementation while maintaining project requirements and specifications</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <div className="experience--section--img">
                <img src="./img/focalid.jpg" alt="Work Experience" />
            </div>
        </section>
    );
}