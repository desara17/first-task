import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

import DetailPage from "./DetailPage";
import HomePage from "./HomePage";

import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/:id">
          <DetailPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
