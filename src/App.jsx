import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import MainLayout from './layout/MainLayout';


function App() {
  return (
    <>
    <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/Contact" element={<ContactPage />} />
          

        </Route>
      </Routes>
    </>
  );
}

export default App;
