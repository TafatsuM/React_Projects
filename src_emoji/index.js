import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import emojipedia from "./emojipedia";

console.log(emojipedia);

const Entry = (
  <div className="term">
    {emojipedia.map((emoji, index) => {
      return (
        <div key={emoji.id}>
          <dt>
            <span className="emoji" role="img">
              {emoji.icon}
            </span>
            <span>{emoji.name}</span>
          </dt>
          <dd>
            <span>{emoji.meaning}</span>
          </dd>
        </div>
      );
    })}
  </div>
);

const app = (
  <div>
    <h1>This is Emojipedia App</h1>
    <dl className="dictionary">{Entry}</dl>
  </div>
);

ReactDOM.render(<div>{app}</div>, document.getElementById("root"));
