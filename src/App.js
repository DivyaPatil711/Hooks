
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Memo from './components/Memo';
import Ref from './components/Ref';
import Effect from './components/Effect';
import UseState from './components/UseState';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import UseContext from './components/UseContext';
import Reducer from './components/Reducer';
function App() {
  return (
    <>
    <Navbar/>
    <Router>
      <Switch>
        <Route path="/home">
          <Home/>
        </Route>
        <Route path="/effect">
          <Effect/>
        </Route>
        <Route path="/UseState">
          <UseState/>
        </Route>
        <Route path="/UseContext">
          <UseContext/>
        </Route>
        <Route path="/Memo">
          <Memo/>
        </Route>
        <Route path="/Ref">
          <Ref/>
        </Route>
        <Route path="/Reducer">
          <Reducer/>
        </Route>
      </Switch>
    </Router>
    </>
  );
}

export default App;
