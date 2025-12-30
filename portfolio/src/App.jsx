import Home from "./pages/Home"
import {Routes,Route} from 'react-router-dom'
import bg from './assets/bg.png'
import Projects from "./pages/Projects"



const App = () => {
  return (
    <div style={{backgroundImage:`url(${bg})`}}>
      <Routes>
        <Route path='/MyPortfolio/'  element={<Home/>}/>
        <Route path="/MyPortfolio/projects" element={<Projects/>} />
      </Routes>
    </div>
  )
}

export default App
