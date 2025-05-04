import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import MagazineList from './pages/MagazineList';
import TechNews from './pages/TechNews';
import Featured from './pages/Featured';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ArticleDetail from './pages/ArticleDetail';
import AdminDashboard from './pages/AdminDashboard';
import { UserProvider } from './context/UserContext';
import { ArticleProvider } from './context/ArticleContext';

function App() {
  return (
    <Router>
      <UserProvider>
        <ArticleProvider>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/magazine" element={<MagazineList />} />
                <Route path="/tech-news" element={<TechNews />} />
                <Route path="/featured" element={<Featured />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/article/:id" element={<ArticleDetail />} />
                <Route path="/admin" element={<AdminDashboard />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </ArticleProvider>
      </UserProvider>
    </Router>
  );
}

export default App;