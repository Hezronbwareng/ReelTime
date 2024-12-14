import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react'

import './App.css'
import Header from './pages/Header'
import Banner from './pages/Banner'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header/>
     <Banner/>
    </>
   

  )
}

export default App
