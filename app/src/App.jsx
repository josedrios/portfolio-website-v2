import './styles/main.scss';
import Header from './components/Header';
import DesignSystem from './pages/DesignSystem';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Projects from './pages/Projects';
import Blog from './pages/Blog';

function App() {
    return (
        <div id="website-container">
            <Header />
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/projects" element={<Projects/>}/>
                <Route path="/design" element={<DesignSystem/>}/>
                <Route path="/blog" element={<Blog/>}/>
            </Routes>
        </div>
    );
}

export default App;
