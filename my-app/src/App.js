import { Route, Routes } from 'react-router-dom';
import './App.css';
import { MernProjects } from './Projects/MernProjects';
import  {Main}  from './Pages/Main';
import { FrontProjects } from './Projects/FrontProjects';
import { BlogSection } from './Projects/BlogSection';
import { JavascriptSection } from './Projects/JavascriptSection';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/mernProjects' element={<MernProjects/>}/>
        <Route path='/frontProjects' element={<FrontProjects/>}/>
        <Route path='/blogSection' element={<BlogSection/>}/>
        <Route path='/javascript' element={<JavascriptSection/>}/>
      </Routes>
    </div>
  );
}

export default App;
