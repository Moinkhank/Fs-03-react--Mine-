import logo from "./logo.svg";
import "./App.css";
import Nav from "./Components/Nav/Nav";
import Users from "./Components/JSON-USER/Users";

function App(props) {
  return (
    <div className="App">
      <Nav />
      <Users />
    </div>
  );
}

export default App;
