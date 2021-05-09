import { BrowserRouter as Router, Switch } from "react-router-dom";
import { useEffect } from "react";
import RouteWithSubRoutes from "./components/RouteWithSubRoutes";
import "./index.css";
import API from './api';

import routes from "./routes/routes"; import { useDispatch } from "react-redux";
;

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    API.get("hotels").then((res) => {
      dispatch({ type: "LIST_HOTEL", payload: res.data.data })
      dispatch({ type: "LIST_HOTEL_FILTER", payload: res.data.data })

    })
  })
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
