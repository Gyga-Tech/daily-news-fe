import './App.css'
import Home from './page/Home'
import Auth from './page/Auth'
import Category from './page/Category'
import Articles from './page/Articles'
import Notification from './page/Notification'
import AddArticles from './page/AddArticles'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Article from './page/Article'
import SignUp from './page/Auth/SignUp'
import SignIn from './page/Auth/SignIn'
import Search from './page/Search/Search'
import CatArticle from './page/CatArticle'
import Forgot from './page/Forgot'
import User from './page/User'
import CategoryAdmin from './dashboard/CategoryAdmin'
import AdminArticle from './dashboard/ArticleAdmin'

import WaitingList from './dashboard/WaitingList'
import Dashboard from './dashboard/dashboard'
import AlreadySignIn from './page/Auth/AlreadySignIn.js'
import VerifyAuth from './page/Auth/VerifyAuth/VerifyAuth'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* can't access after login */}
        <Route path="/" element={<Home />} />
        <Route path="/" element={<AlreadySignIn />}>
          <Route path="authentication" element={<Auth />}>
            <Route path="signup" element={<SignUp />} />
            <Route path="signin" element={<SignIn />} />
          </Route>
        </Route>

        {/* public Route */}
        <Route path="/category" element={<Category />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/article" element={<Article />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/category/article" element={<CatArticle />}>
          <Route path=":categoryId" element={<CatArticle />} />
        </Route>
        <Route path="/article" element={<Article />}>
          <Route path=":articleId" element={<Article />} />
        </Route>
        <Route path="/notification" element={<Notification />} />
        <Route path="/forgot" element={<Forgot />} />

        {/* protected route */}
        <Route path="/search" element={<Search />} />
        <Route path="/" element={<VerifyAuth />}>
          <Route path="dashboard/admin-category" element={<CategoryAdmin />} />
          <Route path="dashboard/admin-article" element={<AdminArticle />} />
          <Route path="dashboard/article-pending" element={<WaitingList />} />
          <Route path="user" element={<User />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="addarticles" element={<AddArticles />} />
        </Route>

        <Route />
      </Routes>
    </BrowserRouter>
  )
}

export default App
