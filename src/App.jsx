import 'bootstrap/dist/css/bootstrap.min.css';
import 'swiper/css';
import { useState } from 'react'

import './App.css'
import Header from './pages/Header'
import Banner from './pages/Banner'
import Main from './pages/Main';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header/>
     <Banner/>
     <Main/>
    </>
   

  )
}

export default App
