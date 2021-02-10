// import logo from './logo.svg';
import './App.css';
// import RowOne from "./components/RowOne";
import RowTwo from "./components/RowTwo";
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const rowStyles = {
    height: "400px",
    margin: "10px",
    minWidth: "100%"
  }

  return (
    <div className="App">
      <div className="row">
        <RowTwo style={rowStyles} />
      </div>
      <div className="row">
        <RowTwo style={rowStyles} />
      </div>
    </div>
  );
}

export default App;