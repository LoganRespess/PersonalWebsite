import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import NavBar from './Components/Navbar';
function App() {
  return (
    <>
    <NavBar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/' element={<Home />} />
      <Route path='/' element={<Home />} />
      <Route path='/' element={<Home />} />
    </Routes>
    </>
  );
}

export default App;
