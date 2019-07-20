import React, {useEffect, useState} from "react";
import TechItemModal from "./TechItemModal";

const TechListModal = () => {
  const [techs, setTechs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getTechs();
    // eslint-disable-next-line
  }, []);

  const getTechs = async () => {
    setLoading(true);

    // fetch("techs") => http://localhost:5000/techs  http://localhost:5000 Proxy Written in package.json
    const res = await fetch("techs");
    const data = await res.json();

    setTechs(data);
    setLoading(false);
  };

  return (
    <div id='tech-list-modal' className='modal'>
      <div className='modal-content'>
        <h4 className='center'>Technician List</h4>
        <ul className='collection with-header'>
          {!loading &&
            techs.map(tech => <TechItemModal key={tech.id} tech={tech} />)}
        </ul>
      </div>
    </div>
  );
};

export default TechListModal;
