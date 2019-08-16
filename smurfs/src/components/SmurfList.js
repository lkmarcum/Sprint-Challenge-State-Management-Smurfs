import React, { useState } from "react";
import { connect } from "react-redux";
import Smurf from "./Smurf";

const SmurfList = props => {
  const [newSmurf, setNewSmurf] = setState({ name: "", age: "", height: "" });

  const handleChange = e => {
    setNewSmurf({ ...newSmurf, [e.target.name]: e.target.value });
  };

  const submitSmurf = e => {
    e.preventDefault();
    // add action here
    setNewSmurf({ name: "", age: "", height: "" });
  };

  return (
    <>
      <h3>Add a New Smurf</h3>
      <form>
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
          props.smurfs.map(smurf => {
            <Smurf key={smurf.id} smurf={smurf} />;
          })}
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

export default connect(mapStateToProps)(SmurfList);
