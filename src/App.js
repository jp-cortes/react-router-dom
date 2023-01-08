import { HashRouter, Route, Routes } from "react-router-dom";
import { Menu } from "./Menu";
import { AuthProvider, AuthRoute } from "./auth";
import { HomePage } from "./HomePage";
import { BlogPage } from "./BlogPage";
import { BlogPost } from "./Blogpost";
import { ProfilePage } from "./ProfilePage";
import { LoginPage } from "./LoginPage";
import { LogoutPage } from "./LogoutPage";
import { NotFound } from "./NotFound";


function App() {
  return (
   <HashRouter>
    <AuthProvider>
    <Menu/>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/blog" element={<BlogPage/>}>
      <Route path=":slug" element={<BlogPost/>}/>
      </Route>
      
      <Route path="/profile"
       element={
       <AuthRoute>
        <ProfilePage/>
       </AuthRoute>
       }
       />
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/logout"
       element={
       <AuthRoute>
        <LogoutPage/>
       </AuthRoute>
       }
       />
      <Route path="*" element={<NotFound/>}/>
    </Routes>
    </AuthProvider>
   </HashRouter>
  );
}

export default App;
