import logo from "./components/Lego/logo.svg";
import './App.css';
// import RowOne from "./components/Lego/RowOne/RowOne";
// import RowTwo from "./components/Lego/RowTwo/RowTwo";
import Panels from "./components/Panels/Panels";
import 'bootstrap/dist/css/bootstrap.min.css'
// import "./components/Panels/panels.css";

function App() {

  return (
    <div className="App">
      <Panels />
      {/* <div className="row">
        <RowOne />
      </div>
      <div className="row">
        <RowTwo />
      </div> */}
    </div>
  )
}

export default App;