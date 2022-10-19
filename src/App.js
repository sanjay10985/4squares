import "./App.css";
import Header from "./containers/Header";
import {Home} from "./pages";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/blog" element={null}/>
        <Route path="/internet" element={null}/>
        <Route path="/about" element={null}/>
        <Route path="/contact-us" element={null}/>
      </Routes>
    </div>
  );
}

export default App;
