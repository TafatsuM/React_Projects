import React from 'react';
import {names} from "./names";

export class Select extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const name = e.target.value;
    this.props.onChange(name);
  }

  render() {
    return (
      <div>
        <h1>Pickup a name :</h1>
        <select
          id="great-names"
          onChange={this.handleChange}>
          {names.map((name, index)=>{
            return <option key={index} value={name}>{name}</option>
          })}
          {/* <option value="Cornelius">Cornelius</option>
          <option value="Philomena">Philomena</option>
          <option value="Rhythm">Rhythm</option> */}
        </select>
      </div>
    );
  }
}