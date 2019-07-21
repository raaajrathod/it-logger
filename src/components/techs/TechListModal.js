import React, {useEffect, useState} from "react";
import TechItemModal from "./TechItemModal";
import {connect} from "react-redux";
import {getTech} from "../../actions/TechActions";

const TechListModal = ({tech, getTech}) => {
  const {techs} = tech;
  useEffect(() => {
    getTech();
    // eslint-disable-next-line
  }, []);

  return (
    <div id='tech-list-modal' className='modal'>
      <div className='modal-content'>
        <h4 className='center'>Technician List</h4>
        <ul className='collection with-header'>
          {techs !== null &&
            techs.map(t => <TechItemModal key={t.id} tech={t} />)}
        </ul>
      </div>
    </div>
  );
};
const mapStateToProps = state => ({
  tech: state.tech
});

export default connect(
  mapStateToProps,
  {
    getTech
  }
)(TechListModal);
