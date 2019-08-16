import React from "react";
import { connect } from "react-redux";
import { deleteSmurf } from "../actions";

const Smurf = props => {
  return (
    <div className="smurf">
      <h4>{props.smurf.name}</h4>
      <p>Age: {props.smurf.age}</p>
      <p>Height: {props.smurf.height}</p>
      <button onClick={() => props.deleteSmurf(props.smurf.id)}>Delete</button>
    </div>
  );
};

export default connect(
  null,
  { deleteSmurf }
)(Smurf);
