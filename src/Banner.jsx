import './App.css'
import ai from './assets/ai3.png'
import image from './assets/BannerImage.png'
export default function Banner(props) {
    return (
        <section className='banner-container'>
            <div className='banner'>
             
            <div className='banner-text'>
                <p className='main-text'>Unlease the full potential of AI</p>
                <p className='sub-text'>AI Ally is a versatitle assistant that utilizes state-of-the-art natural langauge processing to provide real-time support and assistance across various domains</p>
                <button className='get-app-button'>Get the App</button>
                <span className='rating-users'>
                <p><p id="number-value">4.8</p>Rating on App Store</p>
                <p><p id="number-value">700k+</p>Active users</p>
                </span>
                
            </div>
            <div className='banner-image'>
               <img src={image} alt="ai-image" /> 
            </div>
             
            </div>
        </section>
    )
}