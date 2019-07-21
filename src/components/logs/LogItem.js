import React from "react";
import Moment from "react-moment";
import {deleteLog, setCurrent} from "../../actions/LogActions";
import {connect} from "react-redux";
import M from "materialize-css/dist/js/materialize.min.js";

const LogItem = ({log, deleteLog, setCurrent}) => {
  const {message, attention, date, tech, id} = log;

  const onDelete = () => {
    deleteLog(id);
    M.toast({html: "Log Delete!"});
  };
  return (
    <li className='collection-item'>
      <div>
        <a
          href='#edit-modal'
          className={`modal-trigger ${attention ? "red-text" : "blue-text"}`}
          onClick={() => setCurrent(log)}>
          {message}
        </a>
        <br />
        <span className='grey-text'>
          Last Updated By
          <span className='black-text'> {tech} </span>on{" "}
          <Moment format='MMMM Do YYYY, hh:mm:ss a'>{date}</Moment>
        </span>
        <a className='secondary-content cursorPointer'>
          <i className='material-icons grey-text' onClick={onDelete}>
            delete
          </i>
        </a>
      </div>
    </li>
  );
};

export default connect(
  null,
  {deleteLog, setCurrent}
)(LogItem);
