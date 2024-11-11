import React, { useState } from 'react';
import './Figma.css';
import NEWthumbnailHani from "../../assets/HealthyMeal-UIUX.png";
import NEWthumbnailHani1 from "../../assets/HealthyMeal-UIUX1.png";
import TeacherApp from "../../assets/TeacherApp.png";
// import HaniCard from '../header/Cards/HaniCard';

const prototypes = [
    {
        id: 1,
        title: "Healthy Meals App",
        thumbnail: NEWthumbnailHani1,
        url: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FqDOYy8OX3MZVjCjCaBJvV8%2FUi-Chellenge---3-screens-app-design%3Fnode-id%3D3-142%26t%3DnMPMjZh5C3pzamPt-1%26scaling%3Dscale-down%26content-scaling%3Dfixed%26page-id%3D0%253A1%26starting-point-node-id%3D3%253A142%26show-proto-sidebar%3D1",
    },
    {
        id: 2,
        title: "Teacher with a Touch App",
        thumbnail: TeacherApp,
        url: "https://embed.figma.com/proto/Vmns9geQkluGEl2Ozoscmo/%D9%81%D8%B1%D9%8A%D9%82-Creative-Force---%D8%AA%D8%B7%D8%A8%D9%8A%D9%82-%D9%85%D8%B9%D9%84%D9%85-%D8%A8%D9%84%D9%85%D8%B3%D8%A9?node-id=5-87&node-type=canvas&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=5%3A87&show-proto-sidebar=1&embed-host=share",
    }
    // Add more prototypes here, with or without unique `cardData`
];

const Figma = () => {
    const [selectedPrototypeId, setSelectedPrototypeId] = useState(null);
    const [showPopup, setShowPopup] = useState(false);

    const handleClick = (id) => {
        setSelectedPrototypeId(id);
        setShowPopup(true);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
    };

    const stopPropagation = (e) => {
        e.stopPropagation();
    };

    return (
        <section className="figma-section">
            <p id="prototype-section-description">💡 Click on a screen to make it interactive and try the Figma prototype!</p>
            <div className="figma-thumbnails">
                {prototypes.map((prototype) => (
                    <div key={prototype.id} className="thumbnail-wrapper">
                        <h4 id={`prototype-title-${prototype.id}`}>{prototype.title}</h4>
                        <div>
                            {selectedPrototypeId === prototype.id ? (
                                <iframe
                                    className="figma__iframe"
                                    src={prototype.url}
                                    allowFullScreen
                                ></iframe>
                            ) : (
                                <img
                                    src={prototype.thumbnail}
                                    alt={prototype.title}
                                    className="figma-iframe"
                                    onClick={() => handleClick(prototype.id)}
                                />
                            )}
                        </div>
                        <p id="prototype-description" dangerouslySetInnerHTML={{ __html: prototype.description }}></p>
                        {/* Render HaniCard with the specific cardData */}
                        {/* <HaniCard cardData={prototype.cardData} /> */}
                    </div>
                ))}
            </div>
            {/* Popup */}
            {showPopup && (
                <div className="popup-overlay">
                <div className="popup-content" onClick={stopPropagation}>
                    <p>⌛ The prototype may take a few seconds to load, please wait.</p>
                    <p>Please do not click on another application screen until you finish with the current one 💫</p>
                    <button onClick={handleClosePopup}>Got it</button>
                </div>
            </div>
            )}
        </section>
    );
};

export default Figma;
