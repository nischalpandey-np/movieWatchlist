import Favorite from './pages/favourites.jsx'
import Home from './pages/home.jsx'
import {Routes,Route} from 'react-router-dom'
import NavBar from './components/NavBar.jsx'
import './css/App.css'
import { MovieProvider } from './context/MovieContext.jsx'
function App() {


  return (
    <MovieProvider>
      <NavBar/>
      <main className="main-content">
        <Routes> 
          <Route path='/' element={<Home/>} />
          <Route path='/favorites' element={<Favorite/>} />
        </Routes>
      </main>
    </MovieProvider>
   
      
  
  )
}

export default App
