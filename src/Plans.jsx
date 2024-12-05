import './App.css'
import PlansImage from './PlansImage'

export default function Packages() {
    return(
        <>
        <section className='plans-wrapper'>
        <div className='plans-container'>
            <div className="plans">
            {/* <h2>Choose your favorite plan</h2>
            <p>Subscription level <span>Basic</span><span>Advanced</span><span>Premium</span></p>
            <p>Number of Users<span>1</span><span>Up to 5</span><span>Unlimited</span></p>
            <p>Customer Support<span>Online</span><span>Priority</span><span>Premium</span></p>
            <p>Monthly requests<span>1000</span><span>5000</span><span>Unlimited</span></p>
            <p>Data Packages<span>1 GB</span><span>5 GB</span><span>10 GB</span></p>
            <p>Flexible Cancelation<span>Available</span><span>Available</span><span>Available</span></p>
            <p>Monthly Cost<span>$9.99</span><span>$19.99</span><span>$39.99</span></p> */}
            <PlansImage/>
        </div>
        
        </div>
        
        </section>
        </>
    )
}