import './App.css';
import Home from './page/Home';
import Auth from './page/Auth';
import Category from './page/Category';
import Articles from './page/Articles';
import Notification from './page/Notification';
import AddArticles from './page/AddArticles';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Article from './page/Article'
import SignUp from './page/Auth/SignUp';
import SignIn from './page/Auth/SignIn';
import CatArticle from './page/CatArticle';

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
      <Route path="/category/article" element={<CatArticle/>}>
        <Route path=":categoryId" element={<CatArticle/>} />
      </Route>
      <Route path="/article" element={<Article />} >
        <Route path=":articleId" element={<Article />} />
      </Route>
      <Route path="/notification" element={<Notification />} />
      <Route path="/addarticles" element={<AddArticles/>}/>
      <Route />
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
