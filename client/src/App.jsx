import {Routes,Route} from 'react-router-dom';
import './App.css'

function App() {


  return (
    <>
   <div>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="" element={}/>
      <Route path="" element={}/>
    </Routes>
   </div>
    </>
  )
}

export default App
