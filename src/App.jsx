import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Nav from './components/Nav'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import Driver from './pages/Driver'

const App = () => {
  return (
    <>
      <header>
        <Nav />
      </header>
      <main>
        <h1>Delivery App</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/driver" element={<Driver />} />
        </Routes>
      </main>
    </>
  )
}

export default App
