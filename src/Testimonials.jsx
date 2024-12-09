import './App.css';
import vr from './assets/vr.jpg';

export default function Testimonials() {
    return (
        <div id="testimonials">
            {/* Header Section */}
            <div className="testimonials-header">
                <h2>Testimonials</h2>
                <p className="testimonials-description">
                    Don't just take our word for it - hear from our satisfied clients who have experienced the transformative impact of our AI text tool.
                </p>
                <p className="testimonials-description">
                    Learn how this powerful tool has revolutionized their work and accelerated their success.
                </p>
            </div>

            {/* Testimonials List */}
            <div className="testimonials-list">
                {/* Testimonial Item */}
                <div className="testimonials-item">
                    <p className="testimonial-description">
                        "The excellent voice recognition quality of AI Ally app makes it perfect for dictation and note-taking. I have never come across such accuracy before."
                    </p>
                    <span className="image-title">
                        <img className="image-of-person" src={vr} alt="Craig Jordan" />
                        <span className="title-role">
                            <p className="name-of-person">Craig Jordan</p>
                            <p className="role-of-person">CEO, Aveva</p>
                        </span>
                    </span>
                </div>

                {/* Testimonial Item */}
                <div className="testimonials-item">
                    <p className="testimonial-description">
                        "AI Ally has streamlined my workflow, saving me hours every week. It's an essential tool for anyone looking to boost productivity."
                    </p>
                    <span className="image-title">
                        <img className="image-of-person" src={vr} alt="Craig Jordan" />
                        <span className="title-role">
                            <p className="name-of-person">Craig Jordan</p>
                            <p className="role-of-person">CEO, Aveva</p>
                        </span>
                    </span>
                </div>

                {/* Testimonial Item */}
                <div className="testimonials-item">
                    <p className="testimonial-description">
                        "I was skeptical at first, but AI Ally exceeded all my expectations. The accuracy and efficiency it offers are unmatched."
                    </p>
                    <span className="image-title">
                        <img className="image-of-person" src={vr} alt="Craig Jordan" />
                        <span className="title-role">
                            <p className="name-of-person">Craig Jordan</p>
                            <p className="role-of-person">CEO, Aveva</p>
                        </span>
                    </span>
                </div>
            </div>
        </div>
    );
}
