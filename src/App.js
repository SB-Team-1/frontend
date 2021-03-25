import React, { useState, useEffect } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import "./App.css";
import LandingPage from "./screens/LandingPage/LandingPage";
import SignIn from "./screens/SignIn/SignIn";
import SignUp from "./screens/SignUp/SignUp";
import BusinessesContainer from "./containers/BusinessesContainer/BusinessesContainer";
import AlliancesContainer from "./containers/AlliancesContainer/AlliancesContainer";
import {
  loginUser,
  verifyUser,
  registerUser,
  removeToken,
} from "./services/auth";
import { getUserBusinesses } from "./services/businesses";
import Layout from "./components/shared/Layout";
import { theme } from "./styles/materialUItheme";
import { ThemeProvider } from "@material-ui/core";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [userBusinesses, setUserBusinesses] = useState([]);
  const [userAlliances, setUserAlliances] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser();
      setCurrentUser(userData);
    };
    handleVerify();
  }, []);

  useEffect(() => {
    const fetchUserBusinesses = async () => {
      const resp = await getUserBusinesses(currentUser.id);
      setUserBusinesses(resp);
    };
    if (currentUser) {
      fetchUserBusinesses();
    }
  }, [currentUser]);

  const handleLogin = async (loginData) => {
    const userData = await loginUser(loginData);
    setCurrentUser(userData);
    history.push("/");
  };

  const handleRegister = async (registerData) => {
    const userData = await registerUser(registerData);
    setCurrentUser(userData);
    history.push("/");
  };

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem("authToken");
    removeToken();
    history.push("/");
  };

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Layout handleLogout={handleLogout} currentUser={currentUser}>
          <Switch>
            <Route path="/businesses">
              <BusinessesContainer
                handleLogin={handleLogin}
                currentUser={currentUser}
                userBusinesses={userBusinesses}
              />
            </Route>
            <Route path="/alliances">
              <AlliancesContainer />
            </Route>
            <Route path="/sign-in">
              <SignIn handleLogin={handleLogin} />
            </Route>
            <Route path="/sign-up">
              <SignUp handleRegister={handleRegister} />
            </Route>
            <Route exact path="/">
              <LandingPage />
            </Route>
          </Switch>
        </Layout>
      </ThemeProvider>
    </div>
  );
}

export default App;
