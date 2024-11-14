import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/pages/landingpage';
import SignIn from './components/Auth/SignIn';
import SignUp from './components/Auth/SignUp';
import EncryptionDecryption from './components/Tools/EncryptionDecryption';
import Dashboard from './components/common/Dashboard';
import EncryptImageOnline from './components/Tools/EncryptImageOnline';
import EncryptFileOnline from './components/Tools/FileEncryptionDecryption';
import Bcrypt from './components/Tools/BcryptTool';
import OtherTools from './components/Tools/OtherTools';
import TripleDES from './components/Tools/TripleDES'; 
import BlogLandingPage from './components/Blogs/BlogLandingPage';
import PostBlogPage from './components/Blogs/PostBlogPage';
import BlogPage from './components/Blogs/BlogPage';
import { BlogProvider } from './components/Blogs/BlogContext';
import './components/Blogs/styles.css';
import BlogDetailPage from './components/Blogs/BlogDetailPage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/online-tools" element={<EncryptionDecryption />} />
        <Route path="/other-tools" element={<OtherTools />} /> {/* Corrected `component` to `element` */}
        <Route path="/encrypt-image-online" element={<EncryptImageOnline />} />
        <Route path="/FileEn" element={<EncryptFileOnline />} />
        <Route path="/bcrypt" element={<Bcrypt />} />
        <Route path="/triple-des" element={<TripleDES />} /> {/* Added the TripleDES route */}
      </Routes>
        <BlogProvider>
          <Routes>
        <Route path="/bloglan" element={<BlogLandingPage />} />
        <Route path="/post-blog" element={<PostBlogPage />} />
        <Route path="/blog/:id" element={<BlogDetailPage />} />
        <Route path="/blogs/:id" element={<BlogPage />} />
        </Routes>
        </BlogProvider>
    </Router>
  );
}

export default App;
