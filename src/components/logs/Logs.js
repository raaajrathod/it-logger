import React, {useEffect} from "react";
import LogItem from "./LogItem";
import Loader from "../layouts/Loader";
import {connect} from "react-redux";
import {getLogs} from "../../actions/LogActions";

const Logs = ({log,getLogs }) => {
  const {logs, loading} = log;

  useEffect(() => {
    getLogs();
    // eslint-disable-next-line
  }, []);

  if (loading || logs === null) {
    return <Loader />;
  }

  return (
    <ul className='collection with-header'>
      <li className='collection-header'>
        <h4 className='center'>System Logs</h4>
      </li>
      {!loading && logs.length === 0 ? (
        <p className='center'>No Logs Show...</p>
      ) : (
        logs.map(log => <LogItem key={log.id} log={log} />)
      )}
    </ul>
  );
};

const mapToStateProps = state => ({
  log: state.log
});

export default connect(
  mapToStateProps,
  {
    getLogs
  }
)(Logs);
