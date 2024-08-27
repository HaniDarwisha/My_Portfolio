import React from 'react';
import './Figma.css';


const Figma = () => {
    return (
        <section className="linkedin-post">

            <section>

                <h5>Check out my design</h5>
                <h2>Healthy Meals App Figma Design</h2>
                {/* <h5 className="note">Click on the X button to properly view and interact with the design prototype</h5> */}

                <iframe className="figma__iframe"
                    src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FqDOYy8OX3MZVjCjCaBJvV8%2FUi-Chellenge---3-screens-app-design%3Fnode-id%3D3-142%26t%3DnMPMjZh5C3pzamPt-1%26scaling%3Dscale-down%26content-scaling%3Dfixed%26page-id%3D0%253A1%26starting-point-node-id%3D3%253A142%26show-proto-sidebar%3D1"
                    allowFullScreen
                ></iframe>

            </section>

        </section>

    );
};

export default Figma;