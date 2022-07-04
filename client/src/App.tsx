import { HashRouter, Routes, Route } from "react-router-dom";
import Nav from './components/Nav/Nav';
import Articles from "./pages/Articles";
import ArticlesPlan from "./pages/ArticlesPlan";
import LandingPage from "./pages/LandingPage";
import { ProtectedRoute } from "./routes/ProtectedRoutes";

function App() {
  return (
    <HashRouter>
      <Nav/>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/articles" element={<ProtectedRoute/>}>
          <Route path="/articles" element={<Articles/>}/>
        </Route>
        <Route path="/article-plans" element={<ProtectedRoute/>}>
          <Route path="/article-plans" element={<ArticlesPlan/>}/>
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
