import { Route, Switch } from "react-router-dom";
import "./App.css";
import Validate from "./components/Pages/Validate/Validate";
import Diploma from "./components/Pages/Diploma/Diploma";
import Blockchain from "./components/Pages/Blockchain/Blockchain";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Diploma} />
        <Route exact path="/validate" component={Validate} />
        <Route exact path="/blockchain" component={Blockchain} />
      </Switch>
    </div>
  );
}

export default App;
