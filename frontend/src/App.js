import './App.css';
import { LandingPage } from './Components/LandingPage/LandingPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AdminPage from './Components/AdminPage/AdminPage';

function App() {
  return (
    <>
    <BrowserRouter>
          <Routes>
            <Route 
              path="/" 
              element={<LandingPage/>} 
            />
             <Route 
              path="/admin" 
              element={<AdminPage/>} 
            />
          </Routes>
      </BrowserRouter>
    
    </>
  );
}

export default App;
