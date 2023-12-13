import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import MainLayout from './layout/MainLayout';
import WishlistPage from './pages/WishlistPage';


function App() {
  return (
    <>
    <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/Contact" element={<ContactPage />} />
          <Route path="/Wishlist" element={<WishlistPage/>} />

          

        </Route>
      </Routes>
    </>
  );
}

export default App;
