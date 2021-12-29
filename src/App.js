import "./App.css";
import RenderLogin from "./pages/login";
import RenderProfile from "./pages/profile";
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
        <Route path="/" element={<RenderLogin />} />
        <Route path="/profile" element={<RenderProfile />} />
      </Routes>
    </div>
  );
}

export default App;
