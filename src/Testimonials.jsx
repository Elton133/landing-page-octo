import vr from './assets/vr.jpg'


export default function Testimonials() {
    return(
        <>
        <div id="testimonials" className="testimonials-header">
            <h2>Testimonials</h2>
            <p className="testimonials-description">Don't just take our word for it - hear from our satisfied clients who have experienced the tranformative impact of our AI text tool.</p>
            <p className="testimonials-description">Learn how this powerful tool has revolutionized thier work and accelerated their success.</p>
            </div>
            <div className="testimonials">
            <p>"The excellent voice recognition quality of AI Ally app makes it perfect for dictation and note taking. I have never come across such accuracy before" <br /><br /><br /><img className="person-image" src={vr} alt="person-image" />Craig Jordan <br />CEO, Aveva</p>
            <p>"The excellent voice recognition quality of AI Ally app makes it perfect for dictation and note taking. I have never come across such accuracy before" <br /><br /><br /><img className="person-image" src={vr} alt="person-image" />Craig Jordan <br />CEO, Aveva</p>
            <p>"The excellent voice recognition quality of AI Ally app makes it perfect for dictation and note taking. I have never come across such accuracy before" <br /><br /><br /><img className='person-image' src={vr} alt="person-image" />Craig Jordan <br />CEO, Aveva</p>
        </div>
        </>
    )
}