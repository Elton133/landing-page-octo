import plans from './assets/plans.png'
import './App.css'
import appstore from './assets/appstore.png'
import googleplay from './assets/googleplay.png'

export default function PlansImage() {
    return (
        <div className='plans-image'>
            <div className='plans-image-text'>
            <p className='plans-image-header'>Try it right now</p>
            <p>Download the AI Ally on the Appstore and Google Play and discover the world of artificial intelligence! Enjoy innovative AI technologies directly on your device</p>
            <img className="download-icon"src={appstore} alt="" />
            <img className="download-icon"src={googleplay} alt="" />
            </div>
        <img className="marketing-image"src={plans} alt="" />
        </div>
    )
}