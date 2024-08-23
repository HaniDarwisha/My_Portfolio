import React from 'react';
import './LinkedinPost.css';

const LinkedinPost = () => {
    return (
        <section className="linkedin-post">
        
            <section>

                <h5>Dive into my Writing journey</h5>
                <h2>Latest Articles on Linkedin</h2>

                <iframe className='linkedin-post__iframe'
                    src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7232333535007641602"
                    frameborder="0"
                    allowfullscreen=""
                    title="Embedded post"
                ></iframe>

            </section>
        
        </section>
    );
};

export default LinkedinPost;