import './App.css';
import Navigation from './components/Navigation';
import AllGalleries from './components/pages/Galleries/AllGalleries';
import LoginPage from './components/pages/Auth/LoginPage';
import RegisterPage from './components/pages/Auth/RegisterPage';
import MyGallery from './components/pages/Galleries/MyGalleries';
import CreateGallery from './components/pages/Galleries/CreateGallery';
import { Route, Routes } from 'react-router-dom';
import UserProvider from './providers/UserProvider';


function App() {
  return (
    <>
    <UserProvider>
    <Navigation />
    <Routes>
      
      <Route index path="/" element={<AllGalleries />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route index path="/my-galleries" element={<MyGallery />} />
      <Route index path="/create-gallery" element={<CreateGallery />} />
    </Routes>

    </UserProvider>

  </>
      
      
  );
}

export default App;
