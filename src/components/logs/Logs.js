import React, {useState, useEffect} from "react";
import LogItem from "./LogItem";
import Loader from "../layouts/Loader";

const Logs = () => {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getLogs();
    // eslint-disable-next-line
  }, []);

  const getLogs = async () => {
    setLoading(true);

    // fetch("logs") => http://localhost:5000/logs  http://localhost:5000 Proxy Written in Package.js
    const res = await fetch("logs");
    const data = await res.json();

    setLogs(data);
    setLoading(false);
  };

  if (loading) {
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

export default Logs;
