import { Route, Switch } from "react-router";
import "./App.css";
import LandingPage from "./screens/LandingPage/LandingPage";
import SignIn from "./screens/SignIn/SignIn";
import BusinessIndex from "./screens/BusinessIndex";
import BusinessProfile from "./screens/BusinessProfile";
import AllianceIndex from "./screens/AllianceIndex";
import AllianceProfile from "./screens/AllianceProfile";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/businesses">
          <BusinessIndex />
        </Route>
        <Route path="/business/:id">
          <BusinessProfile />
        </Route>
        <Route path="/alliances">
          <AllianceIndex />
        </Route>
        <Route path="/alliances/:id">
          <AllianceProfile />
        </Route>
        <Route exact path="/">
          <LandingPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
