import React, {useEffect} from "react";
import {getTech} from "../../actions/TechActions";
import {connect} from "react-redux";

const TechSelectOptions = ({tech, getTech}) => {
  const {techs} = tech;

  useEffect(() => {
    getTech();
    // eslint-disable-next-line
  }, []);
  return (
    techs != null &&
    techs.map(tech => (
      <option key={tech.id} value={`${tech.firstName} ${tech.lastName}`}>
        {tech.firstName} {tech.lastName}
      </option>
    ))
  );
};

const mapStateToProp = state => ({
  tech: state.tech
});

export default connect(
  mapStateToProp,
  {getTech}
)(TechSelectOptions);
