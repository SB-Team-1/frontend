import { Route, Switch } from "react-router-dom";
import "./App.css";
import LandingPage from "./screens/LandingPage/LandingPage";
import SignIn from "./screens/SignIn/SignIn";
import BusinessesContainer from "./containers/BusinessesContainer/BusinessesContainer";
import AlliancesContainer from "./containers/AlliancesContainer/AlliancesContainer";
import {
  loginUser,
  verifyUser,
  registerUser,
  removeToken,
} from "./services/auth";
import Layout from "./components/shared/Layout";

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser();
      setCurrentUser(userData);
    };
    handleVerify();
  }, []);

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
      <Layout handleLogout={handleLogout} currentUser={currentUser}>
        <Switch>
          <Route path="/businesses">
            <BusinessesContainer />
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
    </div>
  );
}

export default App;
