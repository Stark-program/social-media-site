import "./App.css";
import RenderLogin from "./pages/login";
import RenderProfile from "./pages/profile";
import RenderSignup from "./pages/signup";
import RenderLandingPage from "./pages/landingPage";
import { useState } from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  Link,
  Switch,
  Redirect,
} from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<RenderLandingPage />} />
        <Route path="/login" element={<RenderLogin />} />
        <Route path="/profile" element={<RenderProfile />} />
        <Route path="/signup" element={<RenderSignup />} />
      </Routes>
    </div>
  );
}

export default App;
