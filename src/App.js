import "./App.css";
import RenderLogin from "./pages/login";
import RenderProfile from "./pages/profile";
import RenderSignup from "./pages/signup";
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
    <Routes>
      <Route exact path="/" element={<RenderLogin />} />
      <Route path="/profile" element={<RenderProfile />} />
      <Route path="/signup" element={<RenderSignup />} />
    </Routes>
  );
}

export default App;
