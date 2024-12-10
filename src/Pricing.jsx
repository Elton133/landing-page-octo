import './App.css'
import lightbulb from './assets/light-bulb.png'
export default function Pricing() {
    return(
        <>
        <h2 className="pricing-table-header">Choose your favorite plan</h2>
        <div className="pricing-table">
  
  <div className="table">
    <div className="row header">
      <p>Subscription level</p>
      <span>Basic <img className='icon' src={lightbulb} alt="icon" /></span>
      <span>Advanced</span>
      <span>Premium</span>
    </div>
    <div className="row">
      <p>Number of Users</p>
      <span>1</span>
      <span>Up to 5</span>
      <span>Unlimited</span>
    </div>
    <div className="row">
      <p>Customer Support</p>
      <span>Online</span>
      <span>Priority</span>
      <span>Premium</span>
    </div>
    <div className="row">
      <p>Monthly requests</p>
      <span>1000</span>
      <span>5000</span>
      <span>Unlimited</span>
    </div>
    <div className="row">
      <p>Data Packages</p>
      <span>1 GB</span>
      <span>5 GB</span>
      <span>10 GB</span>
    </div>
    <div className="row">
      <p>Flexible Cancelation</p>
      <span>Available</span>
      <span>Available</span>
      <span>Available</span>
    </div>
    <div className="row">
      <p>Monthly Cost</p>
      <span>$9.99</span>
      <span>$19.99</span>
      <span>$39.99</span>
    </div>
  </div>
</div>
  
        </>

    )
}