import logo from "./logo.svg";
import "./App.css";
import RenderLogin from "./pages/login";

function App() {
  return (
    <div className="bg-zinc-500 flex justify-center min-h-screen">
      <div className="flex items-center">
        <RenderLogin />
      </div>
    </div>
  );
}

export default App;
