import { BrowserRouter as Router, Switch } from "react-router-dom";
import RouteWithSubRoutes from "./components/RouteWithSubRoutes";
import "./index.css";

import routes from "./routes/routes";
function App() {
  return (
    <div className="App ">
      <Router>
        <Switch>
          {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
