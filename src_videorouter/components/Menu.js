import React from "react";
import Video from "./Video";
import { Link, Route, Switch } from "react-router-dom";

export class Menu extends React.Component {
  
  render() {
    return (
      <div>
          <ul>
            <li >
              <Link to={`/fast`}>Fast</Link>
            </li>
            <li >
              <Link to={`/slow`}>Slow</Link>
            </li>
            <li >
              <Link to={`/cute`}>Cute</Link>
            </li>
            <li >
              <Link to={`/eek`}>Eek</Link>
            </li>
          </ul>
          <Switch>
            <Route path={`/:type`} component={Video} />
          </Switch>
      </div>
    );
  }
}
