import "./App.css";
import Intromessage from "./components/Intromessage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App px-10 md:px-20 lg:px-40">
      <Navbar />
      <Intromessage />
    </div>
  );
}

export default App;
