import logo from './logo.svg';
import './App.css';
import Home from './page/Home';
import Auth from './page/Auth';
import Category from './page/Category';
import Articles from './page/Articles';
import Notification from './page/Notification';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import SignUp from './page/Auth/SignUp';
import SignIn from './page/Auth/SignIn';
import Article from './page/Article';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/authenticaion" element={<Auth/>}>
        <Route path='signup' element={<SignUp/>}/>
        <Route path='signin' element={<SignIn/>}/>
      </Route>
      <Route path="/category" element={<Category/>} />
      <Route path="/article" element={<Article />} />
      <Route path="/notification" element={<Notification />} />
      <Route />
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
