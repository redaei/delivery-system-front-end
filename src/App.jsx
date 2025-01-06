import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Nav from './components/Nav'

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
        </Routes>
      </main>
    </>
  )
}

export default App
