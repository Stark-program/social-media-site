import logo from "./logo.svg";
import "./App.css";
import RenderLogin from "./pages/login";

function App() {
  return (
    <div className="bg-blue-400 ">
      <div className="grid grid-cols-6 w-full">
        <div className=" ">1</div>
        <div className="col-span-4 bg-violet-300 min-h-screen">
          <RenderLogin />
        </div>
        <div className="">3</div>
      </div>
    </div>
  );
}

export default App;
