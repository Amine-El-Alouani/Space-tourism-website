import "./App.css";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Crew from "./components/Crew";
import Destination from "./components/Destination";
import Technology from "./components/Technology";

function App() {
  return (
    <Container>
      <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/destination">
          <Destination/>
        </Route>
        <Route exact path="/crew">
          <Crew/>
        </Route>
        <Route exact path="/technology">
          <Technology/>
        </Route>
      </Switch>
      </Router>
    </Container>
  );
}

export default App;

const Container = styled.main``;
