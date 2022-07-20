import logo from './logo.svg';
import './App.css';
import Home from './page/Home';
import Auth from './page/Auth';
import Category from './page/Category';
import Articles from './page/Articles';
import Notification from './page/Notification';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/authenticaion" element={<Auth/>} />
      <Route path="/category" element={<Category/>} />
      <Route path="/articles" element={<Articles />} />
      <Route path="/notification" element={<Notification />} />
      <Route />
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
