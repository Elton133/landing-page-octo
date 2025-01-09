import Navbar from './Navbar'
import './App.css'
import Banner from './Banner'
import Content from './Content'
import Marketing from './Marketing'
import Testimonials from './Testimonials'
import Plans from './Plans'
import BottomNav from './BottomNav'
import Copyrights from './Copyrights'
import students from './assets/students.jpg'
import vr from './assets/vr.jpg'
import tech from './assets/tech1.jpg'
import tech2 from './assets/tech2.jpg'
import Pricing from './Pricing'
function App() {


  return (
  <div>
    <Navbar/>
    <Banner/>
    <h3  className="heading">Different destinations</h3>
    <div className='content-wrapper'>
    <Content
    description="We explore how this technology is transforming work across industries and fields."
    images={vr}
    personas="Students"
    personaDescription="AI Ally can assist in research, provide learning materials, and answer questions"
    />
    <Content
    description="Discover how AI can streamline processes and elevate your work to new heights"
    images={tech}
    personas="Professionals"
    personaDescription="AI Ally can provide quick access to relevant information and offer data analysis insights"
    />
    <Content
    description="AI ALLY"
    images={tech2}
    personas="Writers"
    personaDescription="AI Ally can help writers by generating ideas, suggesting improvements in writing style"
    />
    </div>
    <div className='button-container'>
    <button className='destination-button'>And more than 50 other destinations</button>
    </div>
    <Marketing/>
    <Testimonials/>
    <Plans/>
    <BottomNav/>
    <Copyrights/>
    
  </div>
  )
}

export default App
