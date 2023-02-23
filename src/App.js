import { BrowserRouter as Route, Routes } from 'react-router-dom';
import { Home, About, Contact } from './pages/index'
import Footer from './components/Footer';
import Navbar from './components/Navbar';


function App() {
  return (
    <>
    <Navbar />
    {/* <Routes>
      <Route 
        path='/'
        element={<Home/>}
        />
      <Route 
        path='/contact' 
        element={<Contact/>}
        />
      <Route 
        path='/resume'
        element={<About/>}
        />
    </Routes> */}
    <Footer />
    </>
  );
}

export default App;
