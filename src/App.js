import { Route, Switch } from "react-router";
import "./App.css";
import LandingPage from "./screens/LandingPage/LandingPage";
import SignIn from "./screens/SignIn/SignIn";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route path="/businesses">
          <BusinessIndex />
        </Route>
        <Route path="/business/:id">
          <BusinessProfile />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
