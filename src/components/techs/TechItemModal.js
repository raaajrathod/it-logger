import React from "react";
import PropTypes from "prop-types";

const TechItemModal = ({tech}) => {
  const {id, firstName, lastName} = tech;
  return (
    <li key={id} className='collection-item'>
      <span>
        {firstName} {lastName}
      </span>
      <span className='right'>
        <i className='material-icons grey-text cursorPointer'>delete</i>
      </span>
    </li>
  );
};

TechItemModal.propTypes = {
  tech: PropTypes.object.isRequired
};

export default TechItemModal;
