import { HashRouter, Route, Routes } from "react-router-dom";
import { Menu } from "./Menu";
import { HomePage } from "./HomePage";
import { BlogPage } from "./BlogPage";
import { BlogPost } from "./Blogpost";
import { AboutPage } from "./AboutPage";
import { NotFound } from "./NotFound";


function App() {
  return (
   <HashRouter>
    <Menu/>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/blog" element={<BlogPage/>}>
      <Route path=":slug" element={<BlogPost/>}/>
      </Route>
      
      <Route path="/about" element={<AboutPage/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
   </HashRouter>
  );
}

export default App;
