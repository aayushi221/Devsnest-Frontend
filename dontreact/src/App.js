import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Day17 from "./day17/day17";
import Day18 from "./day18/day18";
import Day19 from "./day19/day19";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/day17">
          <Day17 />
        </Route>
        <Route exact path="/day18">
          <Day18 />
        </Route>
        <Route exact path="/day19">
          <Day19 />
        </Route>
        {/* <Route exact path="/day16">
          <Day16 />
        </Route>
        <Route exact path="/day16">
          <Day16 />
        </Route> */}
      </Switch>
    </Router>
  );
}

export default App;
