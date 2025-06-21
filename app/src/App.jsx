import './styles/main.scss';
import Header from './components/Header';
import DesignSystem from './pages/DesignSystem';
import { Routes, Route } from "react-router-dom";
import About from './pages/About';
import Projects from './pages/Projects';
import Blog from './pages/Blog';

function App() {
    return (
        <div id="website-container">
            <Header />
            <Routes>
                <Route path="/" element={<About/>}/>
                <Route path="/projects" element={<Projects/>}/>
                <Route path="/design" element={<DesignSystem/>}/>
                <Route path="/blog" element={<Blog/>}/>
            </Routes>
        </div>
    );
}

export default App;
