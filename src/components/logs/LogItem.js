import React from "react";
import Moment from "react-moment";

const LogItem = ({log}) => {
  const {message, attention, date, tech} = log;
  return (
    <li className='collection-item'>
      <div>
        <a
          href='#edit-modal'
          className={`modal-trigger ${attention ? "red-text" : "blue-text"}`}>
          {message}
        </a>
        <br />
        <span className='grey-text'>
          Last Updated By
          <span className='black-text'> {tech} </span>on {' '}  
          <Moment format='MMMM Do YYYY, hh:mm:ss a'>{date}</Moment>
        </span>
        <a className='secondary-content'>
          <i className='material-icons grey-text'>delete</i>
        </a>
      </div>
    </li>
  );
};

export default LogItem;
