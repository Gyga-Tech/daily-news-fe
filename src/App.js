import './App.css';
import Home from './page/Home';
import Auth from './page/Auth';
import Category from './page/Category';
import Articles from './page/Articles';
import Notification from './page/Notification';
import AddArticles from './page/AddArticles';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Article from './page/Article';
import SignUp from './page/Auth/SignUp';
import SignIn from './page/Auth/SignIn';
import Search from './page/Search/Search';
import CatArticle from './page/CatArticle';
import Forgot from './page/Forgot';
import User from './page/User';
import CategoryAdmin from './dashboard/CategoryAdmin';
import AdminArticle from './dashboard/ArticleAdmin';

import WaitingList from './dashboard/WaitingList';



function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/authentication" element={<Auth/>}>
        <Route path='signup' element={<SignUp/>}/>
        <Route path='signin' element={<SignIn/>}/>
      </Route>
      <Route path="/category" element={<Category/>} />
      <Route path="/articles" element={<Articles />} />
      <Route path="/article" element={<Article />} />
      <Route path="/articles" element={<Articles />} />
      <Route path="/category/article" element={<CatArticle/>}>
        <Route path=":categoryId" element={<CatArticle/>} />
      </Route>
      <Route path="/article" element={<Article />} >
        <Route path=":articleId" element={<Article />} />
      </Route>
      <Route path="/notification" element={<Notification />} />
      <Route path="/forgot" element={<Forgot />} />
      <Route path="/addarticles" element={<AddArticles/>}/>
      <Route path="/search" element={<Search/>}/>
      <Route path='/dashboard/admin-category' element={<CategoryAdmin/>}/>
      <Route path='/dashboard/admin-article' element={<AdminArticle/>} />
      <Route path="/dashboard/article-pending" element={<WaitingList/>} />
      <Route path="/user" element={<User />} />
      <Route />
    </Routes>
    </BrowserRouter>

  );
}

export default App;
