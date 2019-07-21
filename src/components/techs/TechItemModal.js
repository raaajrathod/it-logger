import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {deleteTech} from "../../actions/TechActions";
import M from "materialize-css/dist/js/materialize.min.js";

const TechItemModal = ({tech, deleteTech}) => {
  const {id, firstName, lastName} = tech;

  const onDelete = () => {
    deleteTech(id);
    M.toast({html: `${firstName} ${lastName} deleted Successfully!`});
  };
  return (
    <li key={id} className='collection-item'>
      <span>
        {firstName} {lastName}
      </span>
      <span className='right'>
        <i
          className='material-icons grey-text cursorPointer'
          onClick={onDelete}>
          delete
        </i>
      </span>
    </li>
  );
};

TechItemModal.propTypes = {
  tech: PropTypes.object.isRequired
};

export default connect(
  null,
  {
    deleteTech
  }
)(TechItemModal);
