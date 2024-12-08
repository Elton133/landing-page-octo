


import './App.css'


export default function Content(props) {
   
    return (
   <>
        <div className='content-container'>
        <div className='content-items'>
            <div className='content-item'>
                <p className='content-description'>{props.description}</p>
                <img className="content-image"src={props.images} alt="image"/>

                <h4 className='personas'>{props.personas}</h4>
                <p className='persona-description'>{props.personaDescription}</p>
            </div>
            
            </div>
        </div>
        
        </>
    )
}