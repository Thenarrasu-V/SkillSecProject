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
import CyberTools from './components/pages/CyberTools';
import GainingAccess from './components/pages/tools/GainingAccess';
import Reconnaissance from './components/pages/tools/Reconnaissance';
import Scanning from './components/pages/tools/scanning';
import MaintainingAccess from './components/pages/tools/MaintainingAccess';
import CoveringTracks from './components/pages/tools/CoveringTracks';
import MessagePage from './components/Messages/MessagePage';
import LearnPage from './components/Learn/LearnPage';
import IntroductionToCybersecurity from './components/Learn/IntroductionToCybersecurity';
import EncryptionAndDecryption from './components/Learn/EncryptionAndDecryption';
import NetworkSecurity from './components/Learn/NetworkSecurity';
import CyberThreatsAndMitigation from './components/Learn/CyberThreatsAndMitigation';
import CybersecurityRoadmap from './components/Learn/CybersecurityRoadmap';
import QuizPage from './components/Learn/Quiz';
import AboutPage from './components/common/AboutPage';


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
        <Route path="/cyber-tools" element={<CyberTools />} />
        <Route path="/scanning" element={<Scanning />} />
        <Route path="/Reconnaissance" element={<Reconnaissance />} />
        <Route path="/gaining-access" element={<GainingAccess />} />
        <Route path="/maintaining-access" element={<MaintainingAccess />} />
        <Route path="/covering-tracks" element={<CoveringTracks />} />
        <Route path="/messages" element={<MessagePage />} />
        <Route path="/learn" element={<LearnPage />} />
        <Route path="/intro" element={<IntroductionToCybersecurity />} />
        <Route path="/enc-dec" element={<EncryptionAndDecryption />} />
        <Route path="/netsec" element={<NetworkSecurity />} />
        <Route path="/cyber-threats" element={<CyberThreatsAndMitigation />} />
        <Route path="/cybersecurity-roadmap" element={<CybersecurityRoadmap />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/about" element={<AboutPage />} />
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
