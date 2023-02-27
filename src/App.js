import { Route, Routes } from 'react-router-dom';
import pages from './pages/index'
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import './App.css'

const { Projects, About, Contact } = pages

function App() {
  return (
    <>
      <div className='screen'>
        <Navbar />
        <Routes>
          <Route
            path='/'
            element={<Projects />}
          />
          <Route
            path='/contact'
            element={<Contact />}
          />
          <Route
            path='/about'
            element={<About />}
          />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
