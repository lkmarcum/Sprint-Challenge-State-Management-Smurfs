import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Smurf from "./Smurf";
import { getSmurfs, addSmurf } from "../actions";

const SmurfList = props => {
  const [newSmurf, setNewSmurf] = useState({ name: "", age: "", height: "" });

  useEffect(() => {
    props.getSmurfs();
  }, []);

  const handleChange = e => {
    setNewSmurf({ ...newSmurf, [e.target.name]: e.target.value });
  };

  const submitSmurf = e => {
    e.preventDefault();
    props.addSmurf(newSmurf);
    setNewSmurf({ name: "", age: "", height: "" });
  };

  return (
    <>
      <h3>Add a New Smurf</h3>
      {/* <button onClick={props.getSmurfs}>Get Smurfs</button> */}
      <form onSubmit={submitSmurf}>
        <label>
          Name
          <input
            type="text"
            value={newSmurf.name}
            name="name"
            onChange={handleChange}
          />
        </label>
        <label>
          Age
          <input
            type="text"
            value={newSmurf.age}
            name="age"
            onChange={handleChange}
          />
        </label>
        <label>
          Height
          <input
            type="text"
            value={newSmurf.height}
            name="height"
            onChange={handleChange}
          />
        </label>
        <button>Submit</button>
      </form>
      <div className="smurf-container">
        {props.smurfs &&
          props.smurfs.map(smurf => <Smurf key={smurf.id} smurf={smurf} />)}
      </div>
    </>
  );
};

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    isLoading: state.isLoading
  };
};

export default connect(
  mapStateToProps,
  { getSmurfs, addSmurf }
)(SmurfList);
